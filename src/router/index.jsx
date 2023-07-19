import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import PostsPage from '../Pages/PostsPage';
import PostPage from '../Pages/PostPage';
import EditPostPage from '../Pages/EditPostPage';
import CreatePostPage from '../Pages/CreatePostPage';

import { PATHS } from './paths';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
        <Route index element={<PostsPage />} />
        <Route path={PATHS.POSTS.VIEW} element={<PostPage />} />
        <Route path={PATHS.POSTS.EDIT} element={<EditPostPage />} />
        <Route path={PATHS.POSTS.CREATE} element={<CreatePostPage />} />
      </Route>

      <Route
        path={PATHS.ERRORS.NOT_FOUND}
        element={<h1>Page not found 404</h1>}
      />

      <Route
        path='*'
        element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
      />
    </Routes>
  );
};

export default Router;