import { useContext } from 'react';
import success from './../../assets/success.png'
import { SuccessC } from '../../context/SuccessContext';

const Success = () => {

    const { setIsSuccessful } = useContext(SuccessC)

    return (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-background/[.9] z-50">
            <div className="container mx-auto px-6 lg:px-14">
                <div className="border text-white border-[#D434FE] mx-auto lg:w-[52%] py-8 rounded-md">
                    <img src={success} alt="Illustration displaying successful registeration" className='w-[60%] mx-auto' />
                    <h2 className='lg:text-3xl text-base w-[70%] font-semibold text-center lg:w-[90%] mx-auto mb-4'>Congratulations<br /> you have successfuly registered!</h2>
                    <p className='lg:text-[14px] text-[12px] font-medium mx-auto mb-8 text-center w-[68%] lg:w-[43%]'>Yes, it was easy and you did it! Check your mail box for next step &#128521;</p>
                    <div onClick={() => {
                        setIsSuccessful(false);
                        document.body.classList.remove('scroll-lock');
                    }} className="bg-button disabled:bg-black py-4 hover:opacity-70 transition-opacity duration-300 rounded-md text-base text-center px-4 w-[90%] mx-auto font-normal text-white">
                        Back
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;