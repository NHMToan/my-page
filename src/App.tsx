import BlogDetails from 'pages/blogs/BlogDetails';
import Bloglist from 'pages/blogs/Bloglist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/home/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="blogs" element={<Bloglist />}>
          <Route path=":title" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
