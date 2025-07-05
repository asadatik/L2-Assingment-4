import App from "@/App";
import AddBook from "@/Page/AddBook/AddBook";
import AllBooksPage from "@/Page/AllBook";

import Home from "@/Page/HomePage/Home";

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
        path: "/add-book",
        element: <AddBook/>,

      },


    ],
  },
]);
export default AppRoute;
