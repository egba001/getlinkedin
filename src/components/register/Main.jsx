import group from './../../assets/groupwalk.png';
import BlurredCircle from '../common/BlurredCircle';
import man from './../../assets/man2.png';
import Form from './Form';


const Main = () => {
    return (
        <main className="w-full h-full text-white relative">
            <div className="container px-6 flex mx-auto relative py-20 justify-between">
                <BlurredCircle color={'#460984'} top={'20%'} left={'-3%'} blur={'100px'} />
                <BlurredCircle color={'#460984'} top={'50%'} left={'75%'} blur={'100px'} />
                <div className='z-10 mt-0'>
                    <img src={man} alt="Illustration of a man in front of a Desktop setup" />
                </div>
                <div className='w-[67%] bg-[#FFFFFF]/[.05] z-10 rounded-lg p-16 shadow-lg'>
                    <div className='w-full'>
                        <h3 className='font-semibold text-3xl mb-10 font-clash text-purp'>Register</h3>
                        <p className='mb-2'>
                            <span className='text-[14px] font-normal'>Be part of this movement</span>
                            <img src={group} alt='Illustration of man and woman walking' className='inline mb-6 ml-1' />
                        </p>
                        <h4 className='text-2xl font-medium mb-8'>CREATE YOUR ACCOUNT</h4>
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;