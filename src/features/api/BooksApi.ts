import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["books" , "borrow"],
  endpoints: (builder) => ({

// 
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),

  // 
  getBookById: builder.query({
  query: (id) => `/books/${id}`,
    providesTags: ["books"],
}),

// 
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),

// 
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

// 

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),


    // 
      getBorrows: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    
    //
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["borrow", "books"],
    }),
  }),
});

export const {useGetBooksQuery,   useGetBookByIdQuery,  useAddBookMutation,useDeleteBookMutation,useUpdateBookMutation ,  useGetBorrowsQuery, useCreateBorrowMutation  } = BookApi;
