import faq from './../../assets/svg/faq.svg';
import Accordion from '../ui/Accordion';
import { motion } from 'framer-motion';
import Star from '../common/Star';
import { useEffect } from 'react';

const Faq = () => {

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
        <section id="faq" className="lg:py-16 border-b relative border-b-borderColor text-white">
            <div className="container relative mx-auto h-full px-6 lg:px-20 flex flex-col-reverse items-center lg:flex-row-reverse justify-between">
                <div className='hidden lg:block'>
                    <Star name='url(img/starpu.png)' size='calc(6% - 20px)' top='1%' left='5%'/>
                </div>

                <motion.div
                    animate={{ opacity: 0 }}
                    whileInView={{ opacity: 1, delay: 9, duration: 9 }}
                    transition={{ type: "spring", duration: 3, stiffness: 80 }}
                    className='w-[95%] mb-10 lg:mb-0 lg:w-1/2'>
                    <img src={faq} alt='Illustration of man represnting Frequently asked question' className='w-full' />
                </motion.div>
                <div className='w-full lg:w-1/2 h-[80%] self-start mt-12 relative'>
                    <div className='lg:hidden'>
                        <Star name='url(img/starpu.png)' size='calc(11% - 20px)' top='-2%' left='10%'/>
                    </div>
                    <h3 className="font-clash mb-4 font-bold text-center lg:text-start text-[20px] lg:text-3xl z-10">Frequently Asked<span className="text-purp block">questions</ span></h3>
                    <p className='font-normal text-[14px] leading-6 lg:leading-8 w-full lg:w-[65%]'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></p>
                    <Accordion />
                </div>
            </div>
        </section>
    )
}

export default Faq;