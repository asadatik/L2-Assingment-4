import { useParams } from "react-router";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { BookOpen } from "lucide-react";
import { useGetBookByIdQuery } from "@/features/api/BooksApi";
import Loader from "@/components/Loader/Loader";
;



const BookDlts = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookByIdQuery(id);

  if (isLoading) return <Loader />;
  if (!data?.data || error) return <p className="text-center text-red-500">Something went wrong</p>;

  const book = data.data;
console.log( book ,  'IUOIOUYIKUIIYUIUYIUYIU');

  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <Card className="shadow-lg bg-white/80 backdrop-blur-lg border border-gray-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-2xl font-bold text-gray-800">{book.title}</CardTitle>
          </div>
          <Badge  
            >
            {book.genre}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-3">
          <p><span className="font-semibold">Author:</span> {book.author}</p>
          <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
          <p><span className="font-semibold">Copies:</span> {book.copies}</p>
          <p><span className="font-semibold">Availability:</span>{" "}
            {book.available ? "Available" : "Unavailable"}
          </p>
          <p><span className="font-semibold">Description:</span></p>
          <p className="text-gray-600">{book.description || "No description"}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookDlts;
