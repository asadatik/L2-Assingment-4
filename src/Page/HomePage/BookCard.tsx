import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { useDeleteBookMutation } from "@/features/api/BooksApi";
import type { TBook } from "@/type";
// import { BorrowModal } from "@/pages/allBooks/components/BorrowModal";


import { Edit2, Trash2, View } from "lucide-react";
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
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{book.title}</CardTitle>
          <Badge variant={genreVariant[book.genre]}>{book.genre}</Badge>
        </div>

        <CardDescription>
          <div className="space-y-1">
            <p>{book.author}</p>
            <p>
              <span className="font-semibold">ISBN:</span> {book.isbn}
            </p>
            <p>
              {book.copies > 0
                ? `${book.copies} Copies Available`
                : `This Book is Not Available`}
            </p>
            <p className="mt-5">
              {book.description?.slice(0, 30)} ...
            </p>
          </div>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex gap-2 justify-between">
        <Button title="Delete Book" onClick={handleDelete}>
          <Trash2 />
        </Button>
        <Link to={`/edit-book/${book._id}`}>
          <Button title="Edit Book">
            <Edit2 />
          </Button>
        </Link>
        <Link to={`/books/${book._id}`}>
          <Button title="View Book">
            <View />
          </Button>
        </Link>

        {/* ✅ Don't wrap BorrowModal in Button */}
        {/* <BorrowModal bookId={book._id} isHome={true} /> */}
      </CardFooter>
    </Card>
  );
}
