import { motion } from "framer-motion";

const TimelineSmall = () => {
    return (
        <div className="flex flex-col h-[600px] w-full space-y-12">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 4, stiffness: 80 }}
                className="w-[98%] h-[20%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">1</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Hackathon Announcement</h2>
                    <p className="text-[12px] leading-6">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-5 text-[12px]">November 18, 2023</div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 18, stiffness: 80 }}
                className="w-[98%] h-[20%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">2</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Teams Registration begins</h2>
                    <p className="text-[12px] leading-6">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-5 text-[12px]">November 18, 2023</div>
            </motion.div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 32, stiffness: 80 }}
                className="w-[98%] h-[30%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">3</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Teams Registration ends</h2>
                    <p className="text-[12px] leading-6">Interested Participants are no longer Allowed to register</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-5 text-[12px]">November 18, 2023</div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 50, stiffness: 80 }}
                className="w-[98%] h-[20%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">4</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Announcement of the accepted teams and ideas</h2>
                    <p className="text-[12px] leading-6">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-1 text-[12px]">November 18, 2023</div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 64, stiffness: 80 }}
                className="w-[98%] h-[20%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">5</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Getlinked Hackathon 1.0 Offically Begins</h2>
                    <p className="text-[12px] leading-6">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-5 text-[12px]">November 18, 2023</div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 88, stiffness: 80 }}
                className="w-[98%] h-[20%] relative mx-auto flex flex-col justify-between">
                <div className="w-1 h-full absolute bg-purp ">
                    <div className="rounded-full top-[90%] bg-purp -translate-x-1/2 absolute border-[8px] border-background items-center flex justify-center w-10 h-10 bg-button">
                      <p className="font-normal">6</p>
                    </div>
                </div>
                <div className="ml-7 mb-3">
                    <h2 className="font-bold text-purp mb-2 text-[12px]">Demo Day</h2>
                    <p className="text-[12px] leading-6">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>
                <div className="text-purp font-bold ml-7 -mb-5 text-[12px]">November 18, 2023</div>
            </motion.div>
        </div>
    )
}

export default TimelineSmall;