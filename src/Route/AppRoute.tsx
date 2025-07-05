// src/routes/AppRoutes.tsx

import Home from "@/Page/HomePage/Home";
import { Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/books" element={<AllBooks />} />
      <Route path="/create-book" element={<CreateBook />} />
      <Route path="/edit-book/:id" element={<EditBook />} />
      <Route path="/books/:id" element={<BookDetails />} /> */}
    </Routes>
  );
};

export default AppRoutes;
