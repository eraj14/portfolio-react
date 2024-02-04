import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoE from '../../assets/logo.png'
const Sidebar = () => (

    <div className = 'nav-bar'>
        <Link className = "logo" to = '/'>
            <img src = {LogoE} alt = "logo" />
        </Link>
        <nav>
            <NavLink exact = "true" activeClassName = "active" to = '/'>
                <FontAwesomeIcon icon = {faHome} color = "#181818">
            </NavLink>
        </nav>
    </div>
)

export default Sidebar