import { Button } from "@/components/ui/button";

import { NavLink } from "react-router-dom"; 
import Loader from "../../components/Loader/Loader";

import { useGetBooksQuery } from "@/features/api/BooksApi";
import type { TBook } from "@/type";
import { BookCard } from "./BookCard";

const BooksSection = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books: TBook[] = data?.data?.slice(0, 8) || [];

  if (isLoading || !data?.data) {
    return <Loader />;
  }

  return (
    <section className="px-4 md:px-8 py-6">
      {/* <Banner /> */}

      <h2 className="w-full mx-auto my-4 text-center font-semibold text-3xl">
        Latests Book 🚨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-5">
        {books.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>

      <NavLink className="mt-5 flex justify-center items-center" to="/books">
        <Button className="mx-auto">See All</Button>
      </NavLink>
    </section>
  );
};

export default BooksSection;
