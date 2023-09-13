import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@view/Home";
import Login from "@view/Authentication/Login";
import Register from "@view/Authentication/Register";
import Layout from "../layout/Layout";
import MovieHome from "../page/screen/MovieHome";

const routes = [
  {
    path: "/", // show path for routing
    element: <Layout />, // show component for particular path
    errorElement: <h1>Page Not Found</h1>, // show error component for path is different
    children: [ // show children component for routing
      {
        path: "/",
        element: <MovieHome />,
        children:[
          {
            path:"/movie/:id",
            element:<div>hello</div>
          }
        ]
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
