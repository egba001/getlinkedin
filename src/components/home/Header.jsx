import Button from "./../common/Button";
import earth from './../../assets/earth.png';
import Star from "./../common/Star";
import bg from './../../assets/manmatrix.png';
import CountdownTimer from "./../ui/CountdownTimer";
import BlurredCircle from "./../common/BlurredCircle";
import chain from '/img/chain.png'
import bulb from '/img/bulb.png'
import fire from '/img/fire.png'
import curve from '/curve.svg'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Header = () => {

    const targetTime = new Date().getTime() + 8 * 3600000;

    return (
        <header className="h-full z-20 lg:max-h-full lg:overflow-hidden w-full border-b border-t border-t-borderColor  border-b-borderColor relative text-white pt-4">
            <div className="hidden lg:block">
                <BlurredCircle color={'#A83AD1'} top={'25%'} right={'7%'} blendMode={'hard-light'} size={'30%'} />
            </div>
            <div className="hidden lg:block">
                <Star name='url(whitestar.svg)' size='calc(8% - 20px)' top='7%' left='10%'/>
                <Star name='url(img/starash.png)' size='calc(7% - 20px)' top='18%' left='54%'/>
                <Star name='url(img/starash.png)' size='calc(6% - 20px)' top='72%' left='38%'/>
            </div>
            <div className="lg:hidden">
                <Star name='url(whitestar.svg)' size='calc(7% - 20px)' top='10%' left='27%'/>
                <Star name='url(img/starash.png)' size='calc(7% - 20px)' top='8%' left='86%'/>
                <Star name='url(img/starash.png)' size='calc(7% - 20px)' top='39%' left='81%'/>
            </div>
            <div className="flex flex-col h-full font-bold mx-auto container px-1 lg:px-10">
                <div className="mb-14">
                    <h2 className="text-center italic lg:text-right text-base lg:text-3xl">Igniting a Revolution in <span className="relative ">HR Innovation<img src={curve} alt='Curve logo' className="absolute w-full -bottom-15 left-0" /></span></h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-between relative h-full lg:h-[100vh]">
                    <motion.div
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0 }}
                        className='flex flex-col lg:mt-28 items-center lg:items-start'>
                        <div>
                            <h1 className="font-clash text-3xl lg:text-7xl font-bold relative">
                                <img src={bulb} alt='Bulb icon' className="absolute bottom-[80%] w-[10%] left-[87%]" /> 
                                <span>getlinked Tech</span></h1>
                        </div>
                        <div className="flex items-center">
                            <h2 className="font-clash lg:ml-0 text-3xl lg:text-7xl font-bold relative ">Hackathon <span className="text-purp">1.0</span></h2>
                            <div className="lg:h-12 lg:w-12 w-8 h-8 inline-block">
                                <img src={chain} alt="Chain image"className="w-full" />
                            </div>
                            <div className="lg:h-12 lg:w-12 w-8 h-8 inline-block">
                                <img src={fire} alt="Chain image"className="w-full" />
                            </div>
                        </div>
                        <p className="text-[12px] lg:text-[20px] text-center lg:text-start font-normal font-sans w-[80%] lg:w-[66%] mt-6 mb-12">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <Link to='/registration'>
                            <Button text={'Register'} />
                        </Link>
                        <CountdownTimer targetTime={targetTime} />
                    </motion.div>
                    <div className="lg:absolute bg-background top-0 lg:-right-10 w-[100%] lg:max-w-[89%] xl:w-[80%] lg:mx-0">
                        <div className="relative -ml-[40%] lg:-ml-0 lg:mx-auto mb-0">
                            <img src={bg} alt="Background image" className="mix-blend-luminosity lg:absolute -left-48 lg:left-0 lg:-right-20 w-full lg:mx-auto" />
                            <img src={earth} alt="Background image" className="mix-blend-hard-light right-[8%] lg:right-[5%] lg:top-10 top-10 absolute lg:w-[50%] w-[52%]" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;