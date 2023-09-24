import trophy from './../../assets/trophy.png';
import bronze from './../../assets/bronze.png';
import silver from './../../assets/silver.png';
import gold from './../../assets/gold.png';
import BlurredCircle from './../common/BlurredCircle';
import Star from './../common/Star';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Prizes = () => {

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
        <section className='backdrop-filter py-24 lg:py-36 text-white bg-blend-color-burn bg-black/[.1] bg-opacity-30'>
            <div className="container flex-col lg:flex-row relative mx-auto px-12 flex items-center">
                <div className='hidden lg:block'>
                    <BlurredCircle color={'#460984'} top={'20%'} left={'10%'} size={'40%'} blur={'20px'} />
                    <BlurredCircle color={'#460984'} top={'50%'} left={'90%'} size={'30%'} blur={'100px'} />
                    <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='-5%' left='20%'/>
                    <Star name='url(img/starash.png)' size='calc(8% - 20px)' top='104%' left='78%'/>
                    <Star name='url(whitestar.svg)' size='calc(7% - 20px)' top='25%' left='50%'/>
                    <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='105%' left='20%'/>
                    <Star name='url(whitestar.svg)' size='calc(7% - 20px)' top='48%' left='94%'/>
                </div>
                <div className='lg:hidden'>
                    <BlurredCircle color={'#460984'} top={'1%'} size={'40%'} left={'1%'} blur={'100px'} />
                    <BlurredCircle color={'#460984'} top={'70%'} size={'30%'} left={'55%'} blur={'100px'} />
                </div>
                <div className='relative mb-12'>
                    <div className='lg:hidden'>
                        <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='15%' left='80%'/>
                    </div>
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 4, stiffness: 20 }}
                        className="font-clash lg:hidden mb-2 w-fit mx-auto font-bold text-[20px] lg:text-3xl z-20">Prizes and<span className="text-purp block">Rewards</ span></motion.h2>
                    <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 7, stiffness: 20 }}
                            className='w-[90%] mx-auto text-[12px] text-center lg:hidden'>Highlight of prizes or rewards for winners and for participants.</motion.p>
                </div>
                <div className="lg:w-1/2 w-[100%] self-end z-10">
                    <img src={trophy} alt="Trophy ilustration" />
                </div>
                <div className='w-[95%] lg:w-[60%] flex flex-col h-full items-center'>
                    <div className='text-left w-[65%] mb-20'>
                        <motion.h2
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 4, stiffness: 20 }}
                            className="font-clash hidden lg:block mb-4 font-bold text-3xl z-20">Prizes and<span className="text-purp block">Rewards</ span></motion.h2>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 7, stiffness: 20 }}
                            className='w-[85%] text-base hidden lg:block'>Highlight of prizes or rewards for winners and for participants.</motion.p>
                    </div>
                    <div className='flex justify-evenly z-10 w-full h-full lg:w-[90%] lg:h-[70%]'>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 24, stiffness: 20 }}
                            className='self-end mb-5'>
                            <img src={silver} alt='Silver Medal' className='w-[190%] mx-auto' />
                        </motion.div>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 8, stiffness: 20 }}
                            className='self-end mb-1'>
                            <img src={gold} alt='Gold Medal' className='w-[190%] mx-auto' />
                        </motion.div>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 40, stiffness: 20 }}
                            className='self-end mb-5'>
                            <img src={bronze} alt='Bronze Medal' className='w-[190%] mx-auto' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes;