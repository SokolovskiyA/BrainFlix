
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import UploadPage from './Components/Pages/UploadPage';
import HomePage from './Components/Pages/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/upload' element={<UploadPage />}/>
          <Route path='/video/:id' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
