// src/routes/AppRoutes.tsx

import AllBooksPage from "@/Page/AllBook";
import Home from "@/Page/HomePage/Home";
import { Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<AllBooksPage />} />
      {/* <Route path="/create-book" element={<CreateBook />} />
      <Route path="/edit-book/:id" element={<EditBook />} />
      <Route path="/books/:id" element={<BookDetails />} /> */}
    </Routes>
  );
};

export default AppRoutes;
