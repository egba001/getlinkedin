import group from './../../assets/groupwalk.png';
import BlurredCircle from '../common/BlurredCircle';
import man from './../../assets/man2.png';
import Form from './Form';
import Star from '../common/Star';


const Main = () => {

    return (
        <main className="w-full h-full text-white relative">
            <div className="container px-2 lg:px-6 flex flex-col lg:flex-row mx-auto relative pt-6 pb-20 lg:py-20 justify-between">
                <div className='hidden lg:block'>
                    <BlurredCircle color={'#460984'} top={'20%'} left={'-3%'} blur={'100px'} size={'30%'} />
                    <BlurredCircle color={'#460984'} top={'50%'} left={'75%'} blur={'100px'} size={'30%'} />
                </div>
                <div className='lg:hidden'>
                    <Star name='url(img/starpu.png)' size='calc(10% - 20px)' top='20%' left='85%'/>
                    <Star name='url(img/starpu.png)' size='calc(8% - 20px)' top='69%' left='90%'/>
                    <Star name='url(img/starash.png)' size='calc(9% - 20px)' top='42%' left='4%'/>
                    <BlurredCircle color={'#460984'} top={'5%'} left={'5%'} blur={'100px'} size={'30%'} />
                </div>
                <h3 className='font-semibold text-[20px] px-10 lg:hidden lg:text-3xl mb-10 font-clash text-purp'>Register</h3>
                <div className='z-10 mt-0 w-[70%] mx-auto lg:mx-0'>
                    <img src={man} alt="Illustration of a man in front of a Desktop setup" className='w-[120%]' />
                </div>
                <div className='w-full lg:w-[67%] bg-inherit lg:bg-[#FFFFFF]/[.05] z-10 rounded-lg px-8 lg:p-16 shadow-lg'>
                    <div className='w-full'>
                        <h3 className='font-semibold text-[20px] hidden lg:block lg:text-3xl mb-4 lg:mb-10 font-clash text-purp'>Register</h3>
                        <p className='mb-1 lg:mb-2'>
                            <span className='text-[14px] font-normal'>Be part of this movement</span>
                            <img src={group} alt='Illustration of man and woman walking' className='inline mb-6 ml-1' />
                        </p>
                        <h4 className='lg:text-2xl text-[21px] -mt-2 lg:-mt-0 font-semibold mb-8'>CREATE YOUR ACCOUNT</h4>
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;