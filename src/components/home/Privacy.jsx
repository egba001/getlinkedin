import Star from '../common/Star';
import unlock from './../../assets/lock.png'
import list from '/img/list.png'
import BlurredCircle from './../common/BlurredCircle';
import Button from './../common/Button';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Privacy = () => {

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
        <section className="h-full py-28 text-white">
            <div className="container h-full flex-col lg:flex-row mx-auto px-8 lg:px-20 relative flex justify-between" >
                <div className='hidden lg:block'>
                    <BlurredCircle color={'#460984'} top={'70%'} left={'3%'} blur={'100px'} size={'30%'} />
                    <Star name='url(img/starash.png)' size='calc(6% - 20px)' top='-2%' left='30%'/>
                    <Star name='url(img/starash.png)' size='calc(6% - 20px)' top='78%' left='95%'/>
                    <Star name='url(img/starpu.png)' size='calc(6% - 20px)' top='74%' left='1%'/>
                    <Star name='url(img/starpu.png)' size='calc(4% - 20px)' top='64%' left='65%'/>
                    <Star name='url(img/starpu.png)' size='calc(5% - 20px)' top='13%' left='48%'/>
                    <Star name='url(whitestar.svg)' size='calc(4% - 20px)' top='17%' left='83%'/>
                    <Star name='url(whitestar.svg)' size='calc(4% - 20px)' top='75%' left='60%'/>
                </div>
                <div className='lg:hidden'>
                    <BlurredCircle color={'#460984'} top={'50%'} left={'3%'} blur={'100px'} size={'20%'} />
                </div>
                <div className="w-full lg:w-1/2 z-10">
                    <div className="w-full lg:w-[80%] mx-auto lg:mx-0 mb-14">
                        <motion.h2
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 8, stiffness: 20 }}
                            className="font-clash lg:mb-4 mb-2 font-bold text-[20px] text-center lg:text-start lg:text-3xl z-20">Privacy Policy and<span className="text-purp block">Terms</ span></motion.h2>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 14, stiffness: 20 }}
                            className="text-[12px] text-center lg:text-start text-white/[.7] lg:text-[14px] font-normal mb-7">Last updated on <time>September 12, 2023</time></motion.p>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 25, stiffness: 20 }}
                            className="lg:text-[14px] font-normal w-[98%] text-[12px] mb-4 lg:mb-0 text-center lg:text-start leading-6">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</motion.p>
                    </div>
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 32, stiffness: 20 }}
                        className="w-full text-[14px] border border-[#D434FE] bg-[#D9D9D908]/[.05] z-10 px-6 pt-8 lg:p-12 rounded-md">
                        <div className='mb-8 text-[12px] lg:text-[14px]'>
                            <p className="leading-8 mb-8 text-[12px] text-center lg:text-start lg:text-[14px]">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                            <h3 className="text-purp text-base font-bold">Licensing Policy</h3>
                            <h4 className="font-bold text-[14px] mb-4">Here are terms of our Standard License:</h4>
                            <ul className="flex flex-col space-y-6">
                                <li className='flex items-start space-x-3'><img src={list} alt='list ico' className='mt-1'/>  <span>The Standard License grants you a non-exclusive right to navigate and register for our event</span></li>
                                <li className='flex items-start space-x-3'><img src={list} alt='list ico' className='mt-1'/> <span>You are licensed to use the item available at any free source sites, for your project developement</span></li>
                            </ul>
                        </div>
                        <div className='mx-auto w-fit mb-10 lg:mb-0'>
                            <Button text={'Read More'} />
                        </div>
                    </motion.div>
                </div>
                <div className="w-full mt-12 lg:mt-0 lg:w-1/2 flex justify-center self-end h-full">
                    <img src={unlock} className='w-[90%] self-end' alt="Illustration of man holding padlock" />
                </div>
            </div>

        </section>
    )
}

export default Privacy;