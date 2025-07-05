export type TBook = {
  _id: string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TBorrowBook = {
  totalQuantity: number;
  book: { isbn: string; title: string }[];
};

export type TCreateBookForm = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
};
