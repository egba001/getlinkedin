import { introduction, guidelines, options } from "../../data/data";
import idea from './../../assets/idea.png';
import analysis from './../../assets/svg/analysis.svg';
import plan from './../../assets/plan.png';
import BlurredCircle from "./../common/BlurredCircle";
import Star from "./../common/Star";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Overview = () => {

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
        <div id="overview" className="w-full text-white will-change-auto">
            <div className="w-full">
            <section className="flex relative w-full py-20 border-b border-b-borderColor">
                <div className="flex relative flex-col space-y-12 lg:flex-row container w-full px-6 lg:px-20 mx-auto items-center justify-between">
                    <div className="hidden lg:block">
                        <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='40%' left='10%'/>
                        <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='34%' left='85%'/>
                    </div>
                    <motion.div
                        initial={{ x: -110, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, stiffness: 80 }}
                        className="w-[80%] mb-8 lg:mb-0 lg:w-[40%] relative after:absolute lg:after:-right-[10%] lg:after:-bottom-[6%] after:bg-[url(img/arrow.png)] after:left-[40%] lg:after:left-[90%] after:h-[15%] after:w-[15%] after:bg-contain">
                        <img src={idea} alt="Big idea illustration" className="" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 200 }}
                        viewport={{ once: true }}
                        whileInView={{ x: 0 }}
                        transition={{ type: "spring", duration: 5, stiffness: 80 }}
                        className="w-full lg:w-[50%]"
                        >
                        <h3 className="font-clash text-center lg:text-start mb-2 lg:mb-4 font-bold text-[20px] lg:text-3xl">Intoduction to getlinked<span className="text-purp block">tech Hackathon 1.0</span></h3>
                        <p className="text-[14px] w-[92%] mx-auto lg:mx-0 leading-7 text-center lg:text-start">{introduction}</p>
                    </motion.div>
                </div>
            </section>
            <section className="relative py-12 border-b border-b-borderColor">
                <div className="flex flex-col lg:flex-row-reverse items-center relative container px-6 lg:px-20 justify-between mx-auto -mt-2">
                    <div className="hidden lg:block">
                        <BlurredCircle color={'#A83AD1'} top={'50%'} right={'-2%'} blendMode={'hard-light'} size={'30%'} />
                        <BlurredCircle color={'#A83AD1'} top={'8%'} left={'7%'} blendMode={'hard-light'} size={'30%'} />
                        <Star name='url(whitestar.svg)' size='calc(8% - 20px)' top='75%' left='48%'/>
                        <Star name='url(img/starash.png)' size='calc(8% - 20px)' top='23%' left='30%'/>
                    </div>
                    <div className="lg:hidden">
                        <BlurredCircle color={'#460984'} top={'20%'} left={'15%'} blur={'100px'} />
                        <BlurredCircle color={'#460984'} top={'50%'} left={'90%'} blur={'100px'} />
                    </div>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 3, stiffness: 80 }}
                        className="w-full z-10 lg:w-[50%]">
                        <img src={plan} alt="Big idea illustration" />
                    </motion.div>
                    <motion.div
                        initial={{ x: -110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 3, stiffness: 80 }}
                        className="w-full lg:w-[50%] z-10">
                        <h3 className="font-clash mb-4 text-center lg:text-start font-bold text-[20px] lg:text-3xl z-20">Rules and<span className="text-purp block">Guidelines</ span></h3>
                        <p className="text-[14px] w-[92%] leading-7 text-center lg:text-start mx-auto lg:mx-0">{guidelines}</p>
                    </motion.div>
                </div>
            </section>
            </div>
            <section className="relative py-20 border-b border-b-borderColor">
                <div className="flex flex-col lg:flex-row items-center relative justify-between mx-auto container">
                    <div className="hidden lg:block">
                        <Star name='url(img/starpu.png)' size='calc(7% - 20px)' top='-2%' left='14%'/>
                        <Star name='url(img/starash.png)' size='calc(6% - 20px)' top='54%' left='30%'/>
                        <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='87%' left='48%'/>
                        <BlurredCircle color={'#460984'} top={'50%'} left={'5%'} blur={'100px'} size={'30%'} />
                        <BlurredCircle color={'#460984'} top={'75%'} left={'75%'} blur={'100px'} />
                    </div>
                    <div className="lg:hidden h-full">
                        <BlurredCircle color={'#460984'} top={'3%'} left={'5%'} blur={'100px'} size={'30%'} />
                        <BlurredCircle color={'#460984'} top={'85%'} left={'70%'} blur={'100px'} size={'30%'} />
                    </div>
                    <motion.div
                        initial={{ x: -110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 3, stiffness: 80 }}
                        className="w-[95%] lg:w-[50%] mt-16 relative lg:before:absolute lg:before:left-[13%] lg:before:-top-[10%] lg:before:bg-gradient-to-r lg:before:z-10 lg:before:from-[#FF2674] lg:before:to-[#8F01FE] lg:before:rounded-full lg:before:h-32 lg:before:w-32">
                        <img src={analysis} className="relative z-10" alt="Big idea illustration" />
                    </motion.div>
                    <div className="w-full lg:w-[40%] lg:mr-14 relative">
                        <motion.h3
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 3, stiffness: 80 }}
                            className="font-clash mb-4 font-bold text-[20px] text-center lg:text-start lg:text-3xl z-20">Judging Criteria<span className="text-purp block">Key Attributes</ span></motion.h3>
                        <ul className="lg:text-[16px] w-full px-6 lg:px-0 text-center lg:text-start text-[13px] lg:w-[110%] lg:mb-16 mb-8 space-y-6">
                            <motion.li
                                initial={{ y: 40, opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 8, stiffness: 20 }}>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[0].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[0].description}</p>
                                </article>
                            </motion.li>
                            <motion.li
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 13, stiffness: 20 }}>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[1].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[1].description}</p>
                                </article>
                            </motion.li>
                            <motion.li
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 18, stiffness: 20 }}>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[2].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[2].description}</p>
                                </article>
                            </motion.li>
                            <motion.li
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 23, stiffness: 20 }}>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[3].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[3].description}</p>
                                </article>
                            </motion.li>
                            <motion.li
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 28, stiffness: 20 }}>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[4].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[4].description}</p>
                                </article>
                            </motion.li>
                        </ul>
                        <div className="w-fit mx-auto lg:mx-0">
                            <button className="bg-button disabled:bg-black py-3 lg:py-4 hover:opacity-70 active:opacity-40 transition-opacity duration-300 rounded-md text-[12px] lg:text-base text-center px-4 w-fit lg:w-44 font-normal text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview;