import Login from 'pages/Auth/Login';
import Homepage from 'pages/Homepage';
import Posts from 'pages/Posts';
import { Route, Routes } from 'react-router-dom';

const Root = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="posts/*" element={<Posts />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
