import './index.css'
import { Link, NavLink } from 'react-router-dom';
import LogoE from '../../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (

    <div className = 'nav-bar'>
        <Link className = "logo" to = '/'>
            <img src = {LogoE} alt = "logo" />
        </Link>
        <nav>
            <NavLink exact = "true" activeClassName = "active" to = '/'>
                <FontAwesomeIcon icon = {faHome} color = "#181818"/>
            </NavLink>
            <NavLink exact = "true" activeClassName = "active" classname = "about-link" to = '/about'>
                <FontAwesomeIcon icon = {faUser} color = "#181818"/>
            </NavLink>
            <NavLink exact = "true" activeClassName = "active" classname = "contact-link" to = '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = "#181818"/>
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target ="_blank" rel = "noreferrer" href="/">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#181818"/>
                </a>
            </li>
            <li>
                <a target ="_blank" rel = "noreferrer" href="/">
                    <FontAwesomeIcon icon = {faGithub} color = "#181818"/>
                </a>
            </li>
            <li>
                <a target ="_blank" rel = "noreferrer" href="/">
                    <FontAwesomeIcon icon = {faInstagram} color = "#181818"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar