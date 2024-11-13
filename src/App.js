import './App.css';
import { BrowserRouter as Router , Routes /* switch old version of dom */ , Route } from "react-router-dom";
import Header from './pages/header/header';
import Home from './pages/home/home';
import Popular from './pages/popular/popular';
import Upcoming from './pages/upcoming/upcoming';
import Rating from './pages/rating/rating';
import MovieDetails from './pages/movie-details/movie-details';
import Footer from './pages/footer/footer'
import LoginSign from './pages/login-or-signup/login-sign';
function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/popular' exact Component={Popular}/>
          <Route path='/upcoming' exact Component={Upcoming}/>
          <Route path='/rating' exact Component={Rating}/>
          <Route path='/movie/:id' exact Component={MovieDetails}/>
          <Route path='/login' exact Component={LoginSign}/>
        </Routes>
        <Footer/>
      </Router>
  
    </>
      
    
  );
}

export default App;
