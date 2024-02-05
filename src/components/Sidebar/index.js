import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoE from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../../ThemeContext'; 


const Sidebar = () => {
    const { theme, toggleTheme } = useTheme(); 
    const iconColor = theme === 'dark-theme' ? '#FFFFFF' : '#181818';
    const themeIcon = theme === 'dark-theme' ? faSun : faMoon;

    return (
        <div className={`nav-bar ${theme}`}>
            <Link className="logo" to='/'>
                <img src={LogoE} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color={iconColor} alt="home-icon"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color={iconColor} alt="envelope-icon"/>
                </NavLink>
            </nav>
            <div>
            <FontAwesomeIcon 
                alt = "theme-toggle-icon"
                icon={themeIcon} 
                className={`toggle-icon ${theme}`} 
                onClick={toggleTheme} 
                style={{ color: theme === 'dark-theme' ? '#f6ff00' : '#000', cursor: 'pointer' }}
            />Theme</div>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eraj-uzakov/">
                        <FontAwesomeIcon icon={faLinkedin} color={iconColor} alt ="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/eraj14">
                        <FontAwesomeIcon icon={faGithub} color={iconColor} alt ="github-icon"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/eraj_uzakov/">
                        <FontAwesomeIcon icon={faInstagram} color={iconColor} alt ="instagram-icon"/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
