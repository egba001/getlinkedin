import faq from './../../assets/svg/faq.svg';
import Accordion from '../ui/Accordion';

const Faq = () => {
    return (
        <section className="py-16 border-b relative h-full border-b-borderColor text-white">
            <div className="container mx-auto min-h-full px-20 flex flex-col items-center lg:flex-row-reverse justify-between">
                <div className='w-1/2'>
                    <img src={faq} alt='Illustration of man represnting Frequently asked question' className='w-full' />
                </div>
                <div className='w-1/2 h-[80%] self-start mt-12 relative'>
                    <h3 className="font-clash mb-4 font-bold text-3xl z-20">Frequently asked<span className="text-purp block">questions</ span></h3>
                    <p className='font-normal text-[14px] leading-8 w-[65%]'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></p>
                    <Accordion />
                </div>
            </div>
        </section>
    )
}

export default Faq;