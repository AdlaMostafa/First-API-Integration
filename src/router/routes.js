import { Navigate, Outlet} from 'react-router-dom';

import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import PostsPage from "../Pages/PostsPage";
import PostPage from "../Pages/PostPage";
import EditPostPage from "../Pages/EditPostPage";
import CreatePostPage from "../Pages/CreatePostPage";

import { PATHS } from "./paths";

export const routes = [
    {
      index:true,
      element:<HomePage/>
    },
    {
      path:PATHS.ABOUT,
      element:<AboutPage />
    },
    {
      path:PATHS.POSTS.ROOT,
      element:<Outlet />,
      children: [
        {
         index:true,
         element:<PostsPage />,
        },
        {
          path:PATHS.POSTS.VIEW,
          element:<PostPage />
        },
        {
        path:PATHS.POSTS.EDIT,
        element:<EditPostPage />
        },
        {
          path:PATHS.POSTS.CREATE,
          element:<CreatePostPage />
        }
      ]
    } , 
    {
      path:PATHS.ERRORS.NOT_FOUND,
      element:<h1>Page not found 404</h1>
    }, 
    {
      path:"*",
      element:<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
    }
  ];