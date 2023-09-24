import { Link } from 'react-router-dom';
import logo from './../../assets/svg/logo.svg';
import { BsInstagram } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import Star from './../common/Star';
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        const onBeforeUnload = () => {
          window.scrollTo(0, 0); // Scroll to the top before refreshing
        };
    
        window.addEventListener('unload', onBeforeUnload);
    
        return () => {
          window.removeEventListener('unload', onBeforeUnload);
        };
      }, []);


    return  (
        <footer className="bg-[#100B20] text-[12px] text-white pt-14 h-full pb-4">
            <div className="container mx-auto relative px-10 lg:px-24 h-full flex flex-col lg:flex-row justify-between">
                <div className='hidden lg:block'>
                    <Star name='url(whitestar.svg)' size='calc(20% - 20px)' top='85%' left='95%'/>
                    <Star name='url(img/starpu.png)' size='calc(20% - 20px)' top='98%' left='49%'/>
                    <Star name='url(img/starash.png)' size='calc(20% - 20px)' top='15%' left='73%'/>
                    <Star name='url(whitestar.svg)' size='calc(20% - 20px)' top='15%' left='3%'/>
                </div>

                <div className="w-full lg:w-1/2 h-full">
                    <div className='h-full mb-6'>
                        <img src={logo} alt="Get linked log" className='w-[50%] lg:w-[25%]' />
                        <p className='mt-6 w-full lg:w-[78%] mb-10 leading-6'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                        <p className=''>Terms of Use <span className='text-purp mx-2'>|</span> Privacy Policy</p>
                    </div>
                </div>
                <div className="w-full space-y-12 lg:w-[43%] flex flex-col lg:flex-row justify-between">
                    <div className='w-fit'>
                        <h3 className='text-purp font-semibold mb-4'>Useful links</h3>
                        <ul className='flex flex-col space-y-4'>
                            <li>Overview</li>
                            <li>Timeline</li>
                            <li>FAQs</li>
                            <li><Link to='/registration'>Register</Link></li>
                            <li className='flex space-x-4'>
                                <span className='text-purp'>Follow us</span>
                                <div className='flex space-x-3 items-center'>
                                    <div className='cursor-pointer'>
                                        <BsInstagram size={20} />
                                    </div>
                                    <div className='cursor-pointer'>
                                        <RiTwitterXLine size={20} />
                                    </div>
                                    <div className='cursor-pointer'>
                                        <FaFacebookF size={20} />
                                    </div>
                                    <div className='cursor-pointer'>
                                        <FaLinkedinIn size={20} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-fit -mr-28'>
                        <h3 className='text-purp font-semibold mb-4'>Contact Us</h3>
                        <ul className='flex flex-col space-y-4'>
                            <li className='flex items-center space-x-2'>
                                <BiSolidPhoneCall className='inline-block' size={15}/>
                                <span >+234 679 81819</span>
                            </li>
                            <li className='flex items-start space-x-2'>
                                <MdLocationOn className='inline-block' size={15}/>
                                <address className='not-italic w-[40%]'>27,Alara Street Yaba 100012 Lagos State</address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='w-fit mx-auto mb-6 lg:mb-0 mt-10 text-white'>All rights reserved. © getlinked Ltd.</p>
        </footer>
    )
}

export default Footer;