import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Component/NavBar'
import GalleryPage from './Pages/GalleryPage';


function App() {
  return (
    <BrowserRouter>
      <main className='mainpage'>
        <NavBar />
        <div className='darkDiv'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
