import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/svg/logo.svg';
import Button from "./Button";
import { useState } from "react";
import hamburger from './../../assets/svg/hamburger.svg';
import { MdClose } from 'react-icons/md';
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { scroller } from 'react-scroll';

const Navbar = () => {
    // State to managae visibility of Overlay menu on mobile
    const [ open, setOpen ] = useState(false);



    // get current location from react router dom
    const { pathname } = useLocation();

    const scrollToSection = () => {
        scroller.scrollTo('overview', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'overview'
        });
    };

    // Function to display mobile menu
    const openMenu = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <nav className="max-w-full flex py-8">
            <div className="container flex items-center justify-between mx-auto px-10 lg:px-12">
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
                    <li className="text-white text-base font-normal leading-normal" onClick={scrollToSection()}>
                        <a href='*'>Timeline</a>
                    </li>
                    <li className="text-white text-base font-normal leading-normal" onClick={scrollToSection}>
                        <p>Overview</p>
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
        <AnimatePresence>
        <motion.div
            key="navigation"
            initial={{ y: 100, opacity: 0 }}
            animate={open && { y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full absolute top-0 z-50 right-0 h-screen bg-background">
            <div className="container h-full mx-auto flex items-center relative">
            <div onClick={closeMenu} className="absolute right-[10%] top-[4%] p-px bg-gradient-to-b from-[#903AFF] to-[#FE34B9] rounded-full text-center w-fit font-normal text-white">
                <div className="rounded-full flex items-center justify-center p-1 bg-background">
                    <MdClose className="text-white"/>
                </div>
            </div>
            <nav className="px-[10%] h-fit my-auto block">
                <ul className="space-y-6 mb-6">
                    <li className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <a href='*'>Timeline</a>
                    </li>
                    <li className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <a href='*'>Overview</a>
                    </li>
                    <li className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <a href='*'>FAQs</a>
                    </li>
                    <li className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Link to='/registration'>
                    <Button text={'Register'} />
                </Link>
            </nav>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Navbar

MobileNav.propTypes = {
  closeMenu: PropTypes.func.isRequired
}