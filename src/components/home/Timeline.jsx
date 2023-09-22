import TimelineComponent from "./../ui/TimelineComponent";

const Timeline = () => {
    return (
        <section className="text-white h-screen">
            <div className="container mx-auto px-16 py-16">
                <div className="w-full">
                    <h2 className="text-center font-bold font-clash text-3xl">Timeline</h2>
                    <p className="text-center mx-auto font-normal text-[14px] w-[30%]">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                    <TimelineComponent />
                </div>
            </div>
        </section>
    )
}

export default Timeline;