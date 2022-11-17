import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItem = <React.Fragment>
        <Link to='/'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>Home</button></Link>
        <Link to='/about'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>About</button></Link>
        <Link to='/appointment'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>Appointment</button></Link>
        <Link to='/reviews'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>Reviews</button></Link>
        <Link to='/contact'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>Contact</button></Link>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Header;