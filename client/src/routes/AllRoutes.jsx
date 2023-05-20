import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@view/Home";
import Login from "@view/Authentication/Login";
import Register from "@view/Authentication/Register";
import Layout from "../layout/Layout";

const routes = [
  {
    path: "/", // show path for routing
    element: <Layout />, // show component for particular path
    errorElement: <h1>error</h1>, // show error component for path is different
    children: [ // show children component for routing
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Register />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;
