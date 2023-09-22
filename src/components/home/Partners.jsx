import sponsors from './../../assets/sponsors.png'
import BlurredCircle from "./../common/BlurredCircle";

const Partners = () => {
    return (
        <section className="h-full border-b py-24 text-white border-b-borderColor">
            <div className="container relative mx-auto px-10">
                <BlurredCircle color={'#460984'} top={'10%'} left={'-3%'} blur={'100px'} />
                <BlurredCircle color={'#460984'} top={'70%'} left={'80%'} blur={'100px'} />
                <div className="text-center mb-14 z-10">
                    <h2 className="font-clash text-3xl font-bold mb-4">Partners and Sponsors</h2>
                    <p className="font-normal text-[14px] text-center w-[40%] mx-auto">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>
                <div className="w-full border border-[#D434FE] bg-black/[.1] z-10 py-24 rounded-md">
                    <img src={sponsors} alt="Sponsors logo" className='z-10 mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default Partners;