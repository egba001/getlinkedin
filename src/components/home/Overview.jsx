import { introduction, guidelines, options } from "../../data/data";
import idea from './../../assets/idea.png';
import analysis from './../../assets/svg/analysis.svg';
import plan from './../../assets/plan.png';
import BlurredCircle from "./../common/BlurredCircle";
import Star from "./../common/Star";
import Button from "./../common/Button";

const Overview = () => {

    return (
        <div className="w-full text-white will-change-auto">
            <div className="">
            <section className="flex relative py-20 border-b border-b-borderColor">
                <div className="flex container mx-auto items-center justify-between lg:w-[80%] lg:max-w-[1600px]">
                    <div className="w-[40%] relative after:absolute after:-right-[10%] after:-bottom-[4%] after:bg-[url(img/arrow.png)] after:h-20 after:w-20 after:bg-contain">
                        <img src={idea} alt="Big idea illustration" className="" />
                    </div>
                    <div className="w-[50%]">
                        <h3 className="font-clash mb-4 font-bold text-3xl">Intoduction to getlinked<span className="text-purp   block">tech Hackathon 1.0</span></h3>
                        <p className="text-[14px] w-[92%] leading-7">{introduction}</p>
                    </div>
                </div>
            </section>
            <section className="relative py-2 border-b border-b-borderColor">
                <div className="flex items-center relative container px-20 justify-between mx-auto -mt-2 flex-row-reverse">
                    <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='20%' left='10%'/>
                    <div className="w-[50%] z-10">
                        <img src={plan} alt="Big idea illustration" />
                    </div>
                    <div className="w-[50%] z-10">
                        <h3 className="font-clash mb-4 font-bold text-3xl z-20">Rules and<span className="text-purp block">Guidelines</ span></h3>
                        <p className="text-[14px] w-[92%] leading-7">{guidelines}</p>
                    </div>
                    <BlurredCircle color={'#460984'} top={'20%'} left={'15%'} blur={'100px'} />
                    <BlurredCircle color={'#460984'} top={'50%'} left={'90%'} blur={'100px'} />
                </div>
            </section>
            </div>
            <section className="relative py-20 border-b border-b-borderColor">
                <div className="flex items-center relative justify-between mx-auto container">
                    <Star name='url(img/starpu.png)' size='calc(6% - 20px)' top='10%' left='15%'/>
                    <Star name='url(img/starash.png)' size='calc(6% - 20px)' top='54%' left='30%'/>
                    <Star name='url(whitestar.svg)' size='calc(6% - 20px)' top='87%' left='48%'/>
                    <BlurredCircle color={'#460984'} top={'50%'} left={'5%'} blur={'100px'} />
                    <BlurredCircle color={'#460984'} top={'75%'} left={'75%'} blur={'100px'} />
                    <div className="w-[50%] mt-16 relative lg:before:absolute lg:before:left-[13%] lg:before:-top-[10%] lg:before:bg-gradient-to-r lg:before:z-10 lg:before:from-[#FF2674] lg:before:to-[#8F01FE] lg:before:rounded-full lg:before:h-32 lg:before:w-32">
                        <img src={analysis} className="relative z-10" alt="Big idea illustration" />
                    </div>
                    <div className="w-[40%] mr-14 relative">
                        <h3 className="font-clash mb-4 font-bold text-3xl z-20">Judging Criteria<span className="text-purp block">Key Attributes</ span></h3>
                        <ul className="text-[16px] w-[110%] mb-16 space-y-6">
                            <li>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[0].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[0].description}</p>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[1].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[1].description}</p>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[2].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[2].description}</p>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[3].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[3].description}</p>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h4 className="text-pinky inline-block font-bold mr-1 text-base">{options[4].name}:</h4>
                                    <p className="inline text-[14px] font-normal leading-[23px]">{options[4].description}</p>
                                </article>
                            </li>
                        </ul>
                        <Button text={'Read More'} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview;