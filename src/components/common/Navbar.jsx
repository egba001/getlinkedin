import PropTypes from "prop-types"
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from './../../assets/svg/logo.svg';
import Button from "./Button";
import { useContext } from "react";
import hamburger from './../../assets/svg/hamburger.svg';
import { MdClose } from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { ScrollContext, useScroll } from '././../../context/ScrollContext';

const Navbar = () => {

    const { openMenu, closeMenu, open } = useContext(ScrollContext)

    const scrollToElement = useScroll();

    // get current location from react router dom
    const { pathname } = useLocation();

    const handleFaqClick = () => {
        scrollToElement('faq');
    };

    const handleOverClick = () => {
        scrollToElement('overview');
    };

    const handleTimeClick = () => {
        scrollToElement('timeline');
    };

    return (
        <nav className="max-w-full flex py-8">
            <div className="container flex items-center justify-between mx-auto px-10 lg:px-12">
            {
                open && <MobileNav closeMenu={closeMenu} />
            }
            <NavLink to='/'>
                <img src={logo} alt="Get linked logo" className="lg:w-[150px] w-[70px]" />
            </NavLink>
            <div
                className="lg:hidden"
                onClick={openMenu}
            >
                <img src={hamburger} alt="Hamburger icon" />
            </div>
            <div className="items-center hidden lg:flex lg:items-center space-x-28">
                <ul className="flex space-x-10 items-center">
                    <li className="text-white cursor-pointer text-base font-normal leading-normal" onClick={handleTimeClick} >
                        <p>Timeline</p>
                    </li>
                    <li className="text-white text-base cursor-pointer font-normal leading-normal" onClick={handleOverClick}>
                        <p>Overview</p>
                    </li>
                    <li className="text-white text-base font-normal cursor-pointer leading-normal" onClick={handleFaqClick}>
                        <p>FAQs</p>
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

    const { scrollToElement } = useScroll();

    const navigate = useNavigate()

    const handleFaqClick = () => {
        closeMenu()
        navigate('/')
        scrollToElement('faq');
    };

    const handleOverClick = () => {
        closeMenu()
        navigate('/')
        scrollToElement('overview');
    };

    const handleTimeClick = () => {
        closeMenu()
        navigate('/')
        scrollToElement('timeline');
    };

    return (
        <>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={open && { y: 0, opacity: 1 }}
            className="w-full absolute top-0 z-50 right-0 h-screen bg-background">
            <div className="container h-full mx-auto flex items-center relative">
            <div onClick={closeMenu} className="absolute right-[10%] top-[4%] p-px bg-gradient-to-b from-[#903AFF] to-[#FE34B9] rounded-full text-center w-fit font-normal text-white">
                <div className="rounded-full flex items-center justify-center p-1 bg-background">
                    <MdClose className="text-white"/>
                </div>
            </div>
            <nav className="px-[10%] h-fit my-auto block">
                <ul className="space-y-6 mb-6">
                    <li onClick={handleTimeClick} className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <p>Timeline</p>
                    </li>
                    <li onClick={handleOverClick} className="text-white cursor-pointer text-[18px] font-medium font-inter tracking-[-1px]">
                        <p>Overview</p>
                    </li>
                    <li onClick={handleFaqClick} className="text-white cursor-pointer text-[18px] font-medium font-inter tracking-[-1px]">
                        <p>FAQs</p>
                    </li>
                    <li onClick={closeMenu} className="text-white text-[18px] font-medium font-inter tracking-[-1px]">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <NavLink to='/registration' onClick={closeMenu}>
                    <Button text={'Register'} />
                </NavLink>
            </nav>
            </div>
        </motion.div>
        </>
    )
}

export default Navbar

MobileNav.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  })
}