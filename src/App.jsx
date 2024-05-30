import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Navbar from './components/Navbar';
import './styles.css';
import TopRatedPage from './components/pages/TopRatedPage';
import UpcomingMoviePage from './components/pages/UpcomingMoviePage';
import SingleMovieDetail from './components/pages/SingleMovieDetail';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path = "/" element={<HomePage />}/>
        <Route path='/top-rated-movies' element={<TopRatedPage/>}/>
        <Route path='/upcoming-movies' element={<UpcomingMoviePage/>}/>
        <Route path='/movie-details/:id' element={<SingleMovieDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App;