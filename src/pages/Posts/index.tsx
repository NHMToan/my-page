import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutPost from './components/LayoutPost';
import PostDetails from './PostDetails';
import PostForm from './PostForm';
import PostsList from './PostsList';

interface PostsProps {}
const Posts: FC<PostsProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPost />}>
        <Route path="new" element={<PostForm />} />
        <Route path=":postID" element={<PostDetails />} />
        <Route index element={<PostsList />} />
      </Route>
    </Routes>
  );
};

export default Posts;
