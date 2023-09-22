import trophy from './../../assets/trophy.png';
import bronze from './../../assets/bronze.png';
import silver from './../../assets/silver.png';
import gold from './../../assets/gold.png';
import BlurredCircle from './../common/BlurredCircle';
import Star from './../common/Star';

const Prizes = () => {
    return (
        <section className='backdrop-filter py-24 text-white bg-blend-color-burn bg-black/[.1] bg-opacity-30'>
            <div className="container relative mx-auto px-12 flex items-center">
                <BlurredCircle color={'#460984'} top={'10%'} left={'15%'} blur={'100px'} />
                <BlurredCircle color={'#460984'} top={'50%'} left={'90%'} blur={'100px'} />
                <Star name='url(img/starpu.png)' size='calc(9% - 20px)' top='-5%' left='20%'/>
                <Star name='url(whitestar.svg)' size='calc(7% - 20px)' top='25%' left='50%'/>
                <div className="w-1/2 self-end z-10">
                    <img src={trophy} alt="Trophy ilustration" />
                </div>
                <div className='w-[60%] flex flex-col h-full items-center'>
                    <div className='text-left w-[65%] mb-20'>
                        <h2 className="font-clash mb-4 font-bold text-3xl z-20">Prizes and<span className="text-purp block">Rewards</ span></h2>
                        <p className='w-[85%] text-base'>Highligh of prizes or rewards for winners and for participants.</p>
                    </div>
                    <div className='flex justify-evenly z-10 w-[90%] h-[70%]'>
                        <div className='self-end mb-5'>
                            <img src={silver} alt='Silver Medal' className='w-[190%] mx-auto' />
                        </div>
                        <div className='self-end'>
                            <img src={gold} alt='Gold Medal' className='w-[190%] mx-auto' />
                        </div>
                        <div className='self-end mb-5'>
                            <img src={bronze} alt='Silver Medal' className='w-[190%] mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes;