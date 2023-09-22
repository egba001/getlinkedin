import Button from "./../common/Button";
import earth from '/img/earth.png';
import Star from "./../common/Star";
import bg from '/img/manmatrix.png';
import CountdownTimer from "./../ui/CountdownTimer";
import BlurredCircle from "./../common/BlurredCircle";

const Header = () => {

    const targetTime = new Date().getTime() + 8 * 3600000;

    return (
        <header className="h-full z-20 lg:h-[125vh] overflow-hidden w-full border-b border-t border-t-borderColor  border-b-borderColor relative text-white pt-4">
            <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='20%' left='10%' />
            <BlurredCircle color={'#A83AD1'} top={'25%'} right={'7%'} blendMode={'hard-light'} />

            <div className="flex flex-col h-full font-bold mx-auto container px-1 lg:px-10">
                <div className="mb-14">
                    <h2 className="text-center italic lg:text-right text-base lg:text-3xl">Igniting a Revolution in <span className="relative after:absolute after:bg-[url(curve.svg)] after:bg-center after:bg-no-repeat  after:bg-contain after:rounded-[70%] after:h-12 after:w-full after:-bottom-10 lg:after:-bottom-12 after:left-0">HR Innovation</span></h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row justify-between relative h-full lg:h-[100vh]">
                    <div className='flex flex-col items-center lg:items-start relative after:absolute after:bg-[url(img/fire.png)] after:h-[22%] after:w-[22%] after:bg-contain after:bg-no-repeat after:-right-[3%] lg:after:left-[76%] after:bottom-[50%] lg:after:bottom-[45%]'>
                        <div>
                            <h1 className="font-clash text-3xl lg:text-7xl font-bold relative after:absolute after:bg-[url(img/bulb.png)] after:h-[80%] after:w-[80%] after:bg-contain after:bg-no-repeat after:bottom-[80%] after:left-[87%]">getlinked Tech</h1>
                        </div>
                        <div>
                            <h2 className="font-clash -ml-20 lg:ml-0 text-3xl lg:text-7xl font-bold relative after:absolute after:bg-[url(img/chain.png)] after:h-[90%] after:w-[90%] after:bg-contain after:bg-no-repeat after:left-[103%]">Hackathon <span className="text-purp">1.0</span></h2>
                        </div>
                        <p className="text-[12px] lg:text-[20px] text-center lg:text-start font-normal font-sans w-[80%] lg:w-[66%] mt-6 mb-12">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <Button text={'Register'} />
                        <CountdownTimer targetTime={targetTime} />
                    </div>
                    <div className="lg:absolute top-0 lg:-right-10 w-[155%] lg:w-[89%] lg:mx-0">
                        <div className="relative mx-auto mb-0">
                            <img src={bg} alt="Background imgae" className="mix-blend-luminosity absolute -left-24 lg:left-0 lg:-right-20 w-full mx-auto" />
                            <img src={earth} alt="Background imgae" className="mix-blend-hard-light right-24 lg:right-20 lg:top-10 top-10 absolute lg:w-[50%] w-[47%]" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;