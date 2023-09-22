import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/svg/logo.svg';
import Button from "./Button";
import { useState } from "react";
import hamburger from './../../assets/svg/hamburger.svg';
import { MdClose } from 'react-icons/md';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    // State to managae visibility of Overlay menu on mobile
    const [ open, setOpen ] = useState(false);

    // get current location from react router dom
    const { pathname } = useLocation();

    // Function to display mobile menu
    const openMenu = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <nav className="max-w-full flex relative py-8">
            <div className="container flex items-center justify-between mx-auto px-3 lg:px-12">
            {
                open && <MobileNav closeMenu={closeMenu} />
            }
            <Link to='/'>
                <img src={logo} alt="Get linked logo" className="lg:w-[150px] w-[70px]" />
            </Link>
            <div
                className="lg:hidden"
                onClick={openMenu}
            >
                <img src={hamburger} alt="Hamburger icon" />
            </div>
            <div className="items-center hidden lg:flex lg:items-center space-x-28">
                <ul className="flex space-x-10 items-center">
                    <li className="text-white text-base font-normal leading-normal">
                        <a href='*'>Timeline</a>
                    </li>
                    <li className="text-white text-base font-normal leading-normal">
                        <a href='/'>Overview</a>
                    </li>
                    <li className="text-white text-base font-normal leading-normal">
                        <a href='*'>FAQs</a>
                    </li>
                    <li className="text-white text-base font-normal leading-normal">
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => isActive ? 'bg-button font-bold bg-clip-text text-transparent' : 'text-white'} >Contact</NavLink>
                    </li>
                </ul>
                {
                    pathname !== '/registration' ?
                    <Link to='/registration' className="bg-button py-4 hover:opacity-70 active:opacity-40 transition-opacity duration-300 rounded-md text-center w-44 font-normal text-white">
                    Register</Link> : <Link to='/registration' className="p-px bg-gradient-to-b from-[#903AFF] to-[#FE34B9] rounded-md text-center w-44 font-normal text-white"><div className="rounded-md py-4 bg-background">Register</div></Link>
                }
            </div>
            </div>
        </nav>
    )
}

const MobileNav = ({ closeMenu }) => {
    return (
        <div className="w-full absolute top-0 left-0 h-screen bg-background">
            <div onClick={closeMenu}>
                <MdClose />
            </div>
            <nav>
                <ul>
                    <li className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <a href='*'>Timeline</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

MobileNav.propTypes = {
  closeMenu: PropTypes.func.isRequired
}