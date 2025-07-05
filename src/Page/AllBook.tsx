"use client";

import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit2, Eye, Filter, Search, Trash2 } from "lucide-react";
import { useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useDeleteBookMutation, useGetBooksQuery } from "@/features/api/BooksApi";
import type { TBook } from "@/type";
import { Link } from "react-router-dom";
import { BorrowModal } from "./Borrow/BorrowModal";



const AllBooksPage = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const books: TBook[] = data?.data || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");




  const handleDelete = (bookId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action is irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteBook(bookId);
          if ("data" in res && res.data?.success) {
            toast.success("Book deleted successfully");
          } else {
            toast.error("Failed to delete book");
          }
       
        } catch  {
          toast.error("Something went wrong");
        }
      }
    });
  };

  const filteredBooks = books?.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = selectedGenre === "all" || book.genre === selectedGenre;
    return matchSearch && matchGenre;
  });

  const uniqueGenres = [...new Set(books.map((b) => b.genre))];

if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="container mx-auto px-4 md:px-10 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    All Books
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Explore and manage the collection</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="pl-10 pr-8 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all bg-white/50 backdrop-blur-sm min-w-[150px]"
              >
                <option value="all">All Genres</option>
                {uniqueGenres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
          <Table>
            <TableCaption className="text-gray-600 py-6 text-base">
             <span  className="text-blue-400 text-xl  font-medium" >  {filteredBooks.length} </span>    books found in the library
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-purple-50/50 to-blue-50/50">
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Copies</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBooks?.map((book) => (
                <TableRow key={book._id}>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>
                    <Badge
                  
                      className="bg-gray-700  "
                    >
                      {book.genre}
                    </Badge>
                  </TableCell>
                  <TableCell>{book.isbn}</TableCell>
                  <TableCell>{book.copies}</TableCell>
                  <TableCell>
                    {book.copies > 0 ? (
                      <Badge 
                className="shrink-0 animate-pulse group-hover:animate-none transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-md"
                      
                      >Available</Badge>
                    ) : (
                      <Badge variant="destructive">Unavailable</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-2">

                      <Button title="borrow Book" type="submit" className="border  border-gray-500    hover:bg-gray-300 bg-white text-black ">
                        <BorrowModal bookId={book._id} isHome={true} />
                      </Button>   

                    <Link to={`/update-book/${book._id}`}>
                      <Button size="sm" variant="outline">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`/books/${book._id}`}>
                      <Button
                      
                      size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                        className="bg-red-400"
                      onClick={() => handleDelete(book._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {/* <BorrowModal bookId={book._id} /> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-8 w-8 text-purple-500 mb-2" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No books found</h3>
              <p className="text-gray-500">Try a different search or filter</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllBooksPage;
