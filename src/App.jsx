import Home from "./routes/homepage/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "../src/routes/listPage/listPage.jsx";
import {  Layout,RequireAuth } from "../src/routes/layout/layout.jsx";
import SinglePage from "../src/routes/singlePage/singlePage.jsx";
import Profile from "../src/routes/profile/profile.jsx";
import Login from '../src/routes/login/login.jsx';
import Register from '../src/routes/register/register.jsx';
import ProfileUpdatePage from '../src/routes/profileUpdatePage/profileUpdatePage.jsx';
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

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
          loader:listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader:singlePageLoader,
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
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile/>,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>,
        },
        {
          path: "/add",
          element: <NewPostPage/>,
        },
      ]
    }
  ]);

  return <RouterProvider router={router}/>

}

export default App;
