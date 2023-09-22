import unlock from './../../assets/lock.png'
import BlurredCircle from './../common/BlurredCircle';
import Button from './../common/Button';

const Privacy = () => {
    return (
        <section className="h-full py-28 text-white">
            <div className="container h-full mx-auto px-20 relative flex justify-between" >
                <BlurredCircle color={'#460984'} top={'70%'} left={'3%'} blur={'100px'} />
                <div className="w-1/2 z-10">
                    <div className="w-[80%] mb-14">
                        <h2 className="font-clash mb-4 font-bold text-3xl z-20">Privacy Policy and<span className="text-purp block">Terms</ span></h2>
                        <p className="text-[14px] font-normal mb-7">Last updated on <time>September 12, 2023</time></p>
                        <p className="text-[14px] font-normal w-[98%]">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    </div>
                    <div className="w-full text-[14px] border border-[#D434FE] bg-[#D9D9D908]/[.05] z-10 p-12 rounded-md">
                        <div className='mb-8'>
                            <p className="leading-8 mb-8">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                            <h3 className="text-purp text-base font-bold">Licensing Policy</h3>
                            <h4 className="font-bold text-[14px] mb-4">Here are terms of our Standard License:</h4>
                            <ul className="list-image-[url(img/list.png)] pl-6 flex flex-col space-y-6">
                                <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                                <li>You are licensed to use the item available at any free source sites, for your project developement</li>
                            </ul>
                        </div>
                        <div className='mx-auto w-fit'>
                            <Button text={'Read More'} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center self-end h-full">
                    <img src={unlock} className='w-[90%] self-end' alt="Illustration of man holding padlock" />
                </div>
            </div>

        </section>
    )
}

export default Privacy;