import Login from 'pages/Auth/Login';
import Homepage from 'pages/Homepage';
import { Route, Routes } from 'react-router-dom';

const Root = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
