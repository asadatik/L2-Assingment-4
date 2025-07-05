"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useUpdateBookMutation } from "@/features/api/BooksApi";

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

const UpdateBook= () => {
  const { register, handleSubmit, setValue, reset } = useForm<TBookInput>();
  const { bookId } = useParams();
  const [updateBook] = useUpdateBookMutation();
  const [bookData, setBookData] = useState<TBookInput | null>(null);
  const navigate = useNavigate();

 

  
  useEffect(() => {
    const fetchBookData = async () => {
      const response = await fetch(`https://mongose.vercel.app/api/books/${bookId}`);
      const data = await response.json();
      setBookData(data.data);
      if (data?.data) {
        setValue("title", data.data.title);
        setValue("author", data.data.author);
        setValue("genre", data.data.genre);
        setValue("isbn", data.data.isbn);
        setValue("description", data.data.description);
        setValue("copies", data.data.copies);
      }
    };

    fetchBookData();
  }, [bookId, setValue]);



  const onSubmit = async (data: TBookInput) => {
    try {
      const payload = { ...data, copies: Number(data.copies) };
      const res = await updateBook({ id: bookId, data: payload });
    
      if (res?.data?.success) {
        toast.success("Book updated successfully!");
        reset();
        navigate("/books");
      }
    } catch (err) {
      toast.error("Failed to update book");
      console.error(err);
    }
  };

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">📝 Update Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input {...register("title", { required: true })} />
        </div>
        <div>
          <Label>Author</Label>
          <Input {...register("author", { required: true })} />
        </div>
        <div>
          <Label>Genre</Label>
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
          <Label>ISBN</Label>
          <Input {...register("isbn", { required: true })} />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea {...register("description")} rows={3} />
        </div>
        <div>
          <Label>Copies</Label>
          <Input type="number" {...register("copies", { required: true, min: 1 })} />
        </div>

        <Button type="submit" className="w-full">
          Update Book
        </Button>
      </form>
    </section>
  );
};

export default UpdateBook;
