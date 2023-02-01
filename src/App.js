import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <div className="App">
      <Container>
          <Routes>
            <Route path='/' element={<Trending/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
      </Container>
    </div>
     <SimpleBottomNavigation/>
    </BrowserRouter>
   
  );
}

export default App;
