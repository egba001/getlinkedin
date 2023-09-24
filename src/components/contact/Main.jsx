import { BsInstagram } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import BlurredCircle from '../common/BlurredCircle';
import Form from './Form';
import Star from '../common/Star';
import { useEffect } from 'react';

const Main = () => {

    useEffect(() => {
        const onBeforeUnload = () => {
          window.scrollTo(0, 0); // Scroll to the top before refreshing
        };
    
        window.addEventListener('unload', onBeforeUnload);
    
        return () => {
          window.removeEventListener('unload', onBeforeUnload);
        };
      }, []);

    return (
        <main className="w-full lg:h-full text-white relative">
            <div className="container px-6 lg:px-8 flex mx-auto relative py-10 lg:py-20 justify-between">
                <div className='hidden lg:block'>
                    <BlurredCircle color={'#460984'} top={'20%'} left={'-3%'} blur={'100px'} size={'30%'} />
                    <BlurredCircle color={'#460984'} top={'50%'} left={'75%'} blur={'100px'} size={'30%'} />
                </div>
                <div className='lg:hidden'>
                    <BlurredCircle color={'#460984'} top={'10%'} left={'10%'} blur={'100px'} size={'35%'} />
                    <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='0%' left='45%'/>
                    <Star name='url(img/starash.png)' size='calc(9% - 20px)' top='10%' left='80%'/>
                    <Star name='url(whitestar.svg)' size='calc(9% - 20px)' top='62%' left='89%'/>
                    <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='75%' left='8%'/>
                </div>
                <div className='z-10 hidden lg:block -ml-40 mt-20'>
                    <h2 className="text-2xl textpurp text-purp mb-4 font-clash font-semibold">Get in touch</h2>
                    <div className="flex flex-col text-base font-normal space-y-4">
                        <h3 className="w-1/2">Contact Information</h3>
                        <address className="not-italic w-[45%]">27, Alara Street Yaba 100012 Lagos State</address>
                        <p>Call Us : <a href="tel:+2347067981819">07067981819</a></p>
                        <p>we are open from Monday-Friday<span className="block"><time>08:00am - 05:00pm</time></span></p>
                        <p className="text-purp font-semibold">Share On</p>
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
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-inherit lg:bg-[#FFFFFF]/[.05] z-10 rounded-lg p-6 lg:py-16 lg:px-24 lg:shadow-lg'>
                    <div className='w-full'>
                        <h3 className='font-semibold text-[18px] w-[70%] -mt-2 lg:-mt-0 font-clash text-purp'>Questions or need assistance?</h3>
                        <h4 className='font-semibold text-[18px] mb-8 font-clash text-purp'>Let us know about it!</h4>
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;