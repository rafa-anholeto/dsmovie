import {ReactComponent as GithubIcon} from 'Assets/img/github.svg';
import './styles.css';

function Navbar(){
  
    return (
         <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/rafa-anholeto">
              <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/rafa-anholeto</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
      );
}

export default Navbar;