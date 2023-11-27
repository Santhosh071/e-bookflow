import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Ho from "../hom/Ho";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";

import UploadBooks from "../dashboard/UploadBooks";
import Dasboard from "../dashboard/Dasboard";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Ho/>
        },
        {
            path:'/shop',
            element:<Shop/>

        },{
            path:'/about',
            element:<About/>
        },{
            path:'/blog',
            element:<Blog/>
        },{
          path:'/book/:id',
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:4000/book/${params.id}`)
        },
        {
          path:"/admin/dashboard",
          element:<DashboardLayout/>,
          children:[
          {
            path:"/admin/dashboard",
            element:<PrivateRoute><Dasboard/></PrivateRoute>
          },
          {
            path:"/admin/dashboard/upload",
            element:<UploadBooks/>
          },
          {
            path:"/admin/dashboard/manage",
            element:<ManageBooks/>
          },
          {
            path:"/admin/dashboard/edit-books/:id",
            element:<EditBook/>,
            loader:({params})=>fetch(`http://localhost:4000/book/${params.id}`)

          },
          {
            path:"/admin/dashboard/sign-up",
            element:<SignUp/>,
          },
          {
            path:"/admin/dashboard/login",
            element:<Login/>
          }

        
        
        ]

        }
      ]
    },
  ]);

  
  export default router;