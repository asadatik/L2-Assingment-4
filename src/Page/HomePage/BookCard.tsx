import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { useDeleteBookMutation } from "@/features/api/BooksApi";
import type { TBook } from "@/type";
// import { BorrowModal } from "@/pages/allBooks/components/BorrowModal";


import { Edit2, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ fixed import
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface IBookCardProps {
  book: TBook;
}

export function BookCard({ book }: IBookCardProps) {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteBook(book._id);
          if (res?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          toast.error((error as Error)?.message || "Something went wrong");
        }
      }
    });
  };

  const genreVariant: Record<string, "default" | "destructive" | "secondary"> = {
    FICTION: "default",
    NON_FICTION: "secondary",
    SCIENCE: "destructive",
    HISTORY: "default",
    BIOGRAPHY: "destructive",
    FANTASY: "destructive",
  };

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100  flex items-center justify-center">
      <Card className="w-full  group hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-purple-500/10 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          style={{ padding: "1px" }}
        >
          <div className="w-full h-full bg-white rounded-lg" />
        </div>

        <div className="relative z-10">
          <CardHeader className="space-y-4">
            <div className="flex justify-between items-start gap-3">
              <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                {book.title}
              </CardTitle>
              <Badge
                variant={genreVariant[book.genre as keyof typeof genreVariant]}
                className="shrink-0 animate-pulse group-hover:animate-none transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-md"
              >
                {book.genre}
              </Badge>
            </div>

            <CardDescription className="space-y-3">
              <div className="space-y-2">
                <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {book.author}
                </p>

                <div className="space-y-1.5 text-sm">
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <span className="font-semibold text-gray-700">ISBN:</span> {book.isbn}
                  </p>

                  <p
                    className={`font-medium transition-all duration-300 ${
                      book.copies > 0
                        ? "text-emerald-600 group-hover:text-emerald-700"
                        : "text-red-500 group-hover:text-red-600"
                    }`}
                  >
                    {book.copies > 0 ? `${book.copies} Copies Available` : `This Book is Not Available`}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {book.description?.slice(0, 80)}...
                  </p>
                </div>
              </div>
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex gap-2 justify-end pt-4">
            <Button
              title="Delete Book"
              onClick={handleDelete}
              variant="outline"
              size="sm"
              className="group/btn hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
            >
              <Trash2 className="h-4 w-4 group-hover/btn:animate-bounce" />
            </Button>

            <Link to={`/edit-book/${book?._id}`}>
              <Button
                title="Edit Book"
                variant="outline"
                size="sm"
                className="group/btn hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
              >
                <Edit2 className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              </Button>
            </Link>
              <Link to={`/books/${book?._id}`}>
              <Button
                title="View Book"
                size="sm"
                className="group/btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
