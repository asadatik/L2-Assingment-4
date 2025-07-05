
// import { configureStore } from "@reduxjs/toolkit";
// import { quizSlice } from "../features/quizSlice";

// export const store = configureStore({
//   reducer: {
//     quiz: quizSlice.reducer,
//   },
// });

// // Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import { BookApi } from "../features/api/BooksApi";

export const store = configureStore({
  reducer: {
    [BookApi.reducerPath]: BookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
