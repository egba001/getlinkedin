import TimelineBig from "../ui/TimelineBig";
import { motion } from "framer-motion";

const Timeline = () => {
    return (
        <section className="text-white h-full w-full">
            <div className="container mx-auto h-full px-8 lg:px-4 py-16">
                <div className="w-full h-full">
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 8, stiffness: 20 }}
                        className="text-center font-bold font-clash mb-2 lg:mb-0 text-[20px] lg:text-3xl">Timeline</motion.h2>
                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 20, stiffness: 20 }}
                        className="text-center mx-auto font-normal mb-24 text-[14px] w-full lg:w-[30%]">Here is the breakdown of the time we anticipate using for the upcoming event.</motion.p>
                        <div className="w-fit h-full mx-auto">
                            <TimelineBig />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;