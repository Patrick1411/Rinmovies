import './footer.scss'
import bg from '../../assets/footer-bg.jpg'
import universalLogo from '../../assets/universal_logo.png'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div 
      className="footer" 
      style={{backgroundImage: `url(${bg})`}}
    >
        <div className="footer_content container">
          <div className="footer_content_logo">
            <div className="logo">
              <img src={universalLogo} alt="universalLogo"/>
              <Link to="/">RinMovies</Link>
            </div>
          </div>
          <div className="footer_content_menus">
            <div className="footer_content_menu">
              <Link to="/">Home</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/terms-of-use">Terms of Use</Link>
            </div>

            <div className="footer_content_menu">
              <Link to="/FAQ">FAQ</Link>
              <Link to="/premium">Premium</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>

            <div className="footer_content_menu">
              <Link to="/movie">You Must Watch</Link>
              <Link to="/tv">Recent Released</Link>
              <Link to="/tv">Top IMDB</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
