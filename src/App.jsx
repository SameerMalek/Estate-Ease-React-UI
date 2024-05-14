import Home from "./routes/homepage/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import Profile from "./routes/profile/profile.jsx";
import Login from './../../api/views/estateease/src/routes/login/login.jsx';
import Register from './routes/register/register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
       
      ],
    },
  ]);

  return <RouterProvider router={router}/>

}

export default App;
