"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "@/features/api/BooksApi";

type TBookInput = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
};

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm<TBookInput>();
  const [createBook] = useAddBookMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: TBookInput) => {
    try {
      const payload = { ...data, copies: Number(data.copies) };
      const res = await createBook(payload);
      
      if (res?.data?.success) {
        toast.success("Book added successfully!");
        reset();
        navigate("/books");
      }
    } catch (err) {
      toast.error("Failed to add book");
      console.error(err);
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">📚 Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label className="m-2"  >Title</Label>
          <Input {...register("title", { required: true })} />
        </div>
        <div>
          <Label className="m-2"   >Author</Label>
          <Input {...register("author", { required: true })} />
        </div>
        <div>
          <Label className="m-2" >Genre</Label>
          <select
            {...register("genre", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select Genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label className="m-2" >ISBN</Label>
          <Input {...register("isbn", { required: true })} />
        </div>
        <div>
          <Label className="m-2"   >Description</Label>
          <Textarea {...register("description")} rows={3} />
        </div>
        <div>
          <Label className="m-2"  >Copies</Label>
          <Input type="number" {...register("copies", { required: true, min: 1 })} />
        </div>

       <div  className="flex justify-center" >
         <Button 
                className=" text-lg font-bold bg-gradient-to-r from-purple-300 to-blue-300 text-black"
        
        type="submit">
          Add Book
        </Button>
       </div>
      </form>
    </section>
  );
};

export default AddBook;
