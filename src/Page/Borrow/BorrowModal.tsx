import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";


import { formatDate } from "date-fns";
import { CalendarIcon, ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import {  useCreateBorrowMutation } from "@/features/api/BooksApi";

type TBorrowModal = {
  bookId: string;
  isHome: boolean;
};

type TBorrowFormData = {
  quantity: string;
  dueDate: string;
};

export function BorrowModal({ bookId, isHome }: TBorrowModal) {
  const navigate = useNavigate();
  const [createBorrow] = useCreateBorrowMutation();
  const form = useForm<TBorrowFormData>({
    defaultValues: {
      quantity: "",
      dueDate: "",
    },
  });

  async function onSubmit(data: TBorrowFormData) {
    const borrowData = { ...data, book: bookId };
    try {
      const res = await createBorrow(borrowData);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/borrow-summary");
      } else {
        toast.error(
          (res?.error &&
            "data" in res.error &&
            (res.error as { data?: { message?: string } }).data?.message) ||
            "An error occurred"
        );
      }
    } catch (error) {
      console.log("Borrow error is", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isHome ? (
          <p  >
            <ShoppingBag  className="" />
          </p>
        ) : (
          <p className="ml-2 hover:cursor-pointer">Borrow Book</p>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
          <DialogDescription>
            You cannot borrow a book that exceeds the available stock.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Calendar */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-5">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            formatDate(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Borrow</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

