import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/home/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
