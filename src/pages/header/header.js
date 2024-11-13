import logo from '../img/film-movies-icon.svg';
import '../css/main.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
            
                <div className="container-nav px-5 py-1 d-flex justify-content-between">
                    <div className="link my-auto d-flex gap-5">
                        <img src={logo} className="logo"/>
                        
                        <ul className="d-flex my-auto text-white">
                            <li className="nav-item px-2">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="/popular">Popular</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to='rating'>Rating</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <form className="d-flex position-relative text-allign-center mx-2 my-1" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="search-btn btn btn-outline-success text-white position-absolute" type="submit">Search</button>
                    </form>
                </div>

            
        </>
    )
        
    
}