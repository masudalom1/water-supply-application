import './nav.css'
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                    <div className="nav-login">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
