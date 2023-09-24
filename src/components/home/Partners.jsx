import { useEffect } from 'react';
import Star from '../common/Star';
import sponsors from './../../assets/sponsors.png'
import BlurredCircle from "./../common/BlurredCircle";
import { motion } from 'framer-motion';

const Partners = () => {

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
        <section className="h-full border-b py-24 lg:py-16 text-white border-b-borderColor">
            <div className="container relative mx-auto px-10 lg:px-20">
                <div className='hidden lg:block'>
                    <BlurredCircle color={'#460984'} top={'10%'} left={'-3%'} blur={'100px'} size={'30%'} />
                    <BlurredCircle color={'#460984'} top={'70%'} left={'80%'} blur={'100px'} size={'30%'} />
                    <Star name='url(img/starpu.png)' size='calc(7% - 20px)' top='10%' left='14%'/>
                    <Star name='url(img/starpu.png)' size='calc(5% - 20px)' top='33%' left='55%'/>
                    <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='80%' left='54%'/>
                </div>
                <div className='lg:hidden'>
                    <BlurredCircle color={'#460984'} top={'10%'} left={'-3%'} blur={'100px'} size={'50%'} />
                    <BlurredCircle color={'#460984'} top={'85%'} left={'80%'} blur={'100px'} size={'60%'} />
                </div>
                <div className="text-center mb-7 lg:mb-14 z-20">
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 8, stiffness: 20 }}
                        className="font-clash text-[20px] text-center lg:text-3xl font-bold mb-2 lg:mb-4">Partners and Sponsors</motion.h2>
                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 12, stiffness: 20 }}
                        className="font-normal text-[12px] lg:text-[14px] text-center w-full lg:w-[40%] mx-auto">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</motion.p>
                </div>
                <div className="w-full border border-[#D434FE] bg-black/[.1] z-20 py-[18%] px-8 rounded-md">
                    <motion.img
                        initial={{ scale: 0.5, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, stiffness: 30 }}
                        src={sponsors} alt="Sponsors logo" className='z-20 mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default Partners;