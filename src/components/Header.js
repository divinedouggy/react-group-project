import {NavLink} from 'react-router-dom'


function Header() {
    return(
        <div className='header'>
            <div className='links'>
                <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/ajdin" >Ajdin</NavLink>
                <NavLink to="/doug" >Doug</NavLink>
                <NavLink to="/haeyoung" >Haeyoung</NavLink>
                <NavLink to="/sabrina" >Sabrina</NavLink>
                <NavLink to="/tamera" >Tamera</NavLink>
                </nav>
            </div>


        </div>
    )
}

export default Header