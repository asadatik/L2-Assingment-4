import App from "@/App";
import AddBook from "@/Page/AddBook/AddBook";
import AllBooksPage from "@/Page/AllBook";
import BookDlts from "@/Page/HomePage/BookDetails/BookDtls";

import Home from "@/Page/HomePage/Home";
import UpdateBook from "@/Page/UpdateBook/UpdateBook";

import { createBrowserRouter } from "react-router-dom";

const AppRoute = createBrowserRouter([
   {
    path: "/",
    element: <App />, // App er moddhei Outlet ase
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooksPage />,

      },

       {
        path: "/books/:id",
       element : <BookDlts></BookDlts>

      },
   
 {
        path: "/add-book",
        element: <AddBook/>,

      },
   

 {
        path: "/update-book/:bookId",
        element: <UpdateBook/>,

      }, 
    ],
  },
]);
export default AppRoute;
