import TimelineBig from "../ui/TimelineBig";
import { motion } from "framer-motion";
import TimelineSmall from "../ui/Timelinesmall";
import { useMediaQuery } from 'react-responsive'
import { useEffect } from "react";

const Timeline = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
      })

      useEffect(() => {
        const onBeforeUnload = () => {
          window.scrollTo(0, 0); // Scroll to the top before refreshing
        };
    
        window.addEventListener('unload', onBeforeUnload);
    
        return () => {
          window.removeEventListener('unload', onBeforeUnload);
        };
      }, []);

    return (
        <section id='timeline' className="text-white h-full w-full">
            <div className="container mx-auto h-full px-8 lg:px-8 pt-16 pb-96 lg:py-16">
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
                        <div className="w-full mx-auto">
                            {isDesktopOrLaptop ? <TimelineBig /> : <TimelineSmall />}
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;