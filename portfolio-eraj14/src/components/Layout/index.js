import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';


const Layout = () => {
    const { theme } = useTheme(); 
    return (
        
        <div className={`App ${theme}`}>

            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'></span>
                <Outlet/>

                <span className='tags bottom-tags'>
                    
                    <br/>
                    <span className="bottom-tag-html"></span>
                </span>
            </div>
        </div>
    )
    } 

export default Layout;