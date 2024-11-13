import '../css/main.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {faSquareXTwitter , faSquareFacebook , faSquareInstagram ,faSquareWhatsapp ,faLinkedin } from'@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/film-movies-icon.svg';

export default function Footer (){
    return(
        <footer>
                <div class="container">
                    <div class="details d-flex justify-content-center w-75 mx-auto">
                        <img src={logo} alt="" class="mx-5"/>
                        <div class="download d-block p-5 text-start mx-5">
                            <h3>THE BASICS</h3>
                            <span class="d-block">About M.Land</span>
                            <span class="d-block">Contact Us</span>
                            <span class="d-block">Support Forums</span>
                            <span class="d-block mb-3">System Status</span>
                            <h3>COMMUNITY</h3>
                            <span class="d-block">Guidelines</span>
                            <span class="d-block">Discussions</span>
                        </div>
                        <div class="product d-block p-5 text-start mx-5 w-fit">
                            <h3>LEGAL</h3>
                            <span class="d-block">Terms of Use</span>
                            <span class="d-block">API Terms of Use</span>
                            <span class="d-block">Privacy Policy</span>
                            <span class="d-block mb-3">DMCA Policy</span>
                            <h3>GET INVOLVED</h3>
                            <span class="d-block">Contribution Bible</span>
                            <span class="d-block">Add New Movie</span>
                        </div>
                        <div class="subscribe p-5 text-start mx-5">
                            <h3>Subscribe</h3>
                            <input type="text" class="px-4 d-block mb-3 py-3 rounded-3" name="name" id="name" placeholder="Name"/>
                            <input type="email" class="px-4 d-block mb-3 py-3 rounded-3" name="Company" id="company" placeholder="Company Email" />
                            <input type="submit" value="Subscribe" placeholder="Subscribe" class="submit w-100 py-3 rounded-3"/>
                        </div>
                    </div>
                    <div class="social w-75 d-flex justify-content-between pt-3 mx-auto">
                        <div class="right">
                            <FontAwesomeIcon icon={faCopyright} className='mr-2 fs-5'/>
                            <span className='text-align-center d-inline-block  mx-2'>MOVIE LAND, All Right Reserved</span>
                        </div>
                        <div class="icons my-auto">
                            <FontAwesomeIcon icon={faSquareXTwitter} className="mx-1 fs-5 font-icon"/> 
                            <FontAwesomeIcon icon={faSquareFacebook} className="mx-1 fs-5 font-icon"/>  
                            <FontAwesomeIcon icon={faSquareInstagram} className="mx-1 fs-5 font-icon"/>
                            <FontAwesomeIcon icon={faSquareWhatsapp} className="mx-1 fs-5 font-icon"/>
                            <FontAwesomeIcon icon={faLinkedin} className=' mx-1 fs-5 font-icon'/>
                        </div>
                    </div>
            </div>
        </footer>
    )
}