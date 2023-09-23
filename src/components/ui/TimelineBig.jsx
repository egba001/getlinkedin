import { motion } from "framer-motion";
import Star from "../common/Star";

const TimelineBig = () => {
    return (
      <div className="h-[70%] w-full">
        <div className="container relative w-[97%] h-[60%] mx-auto">
          <div className="hidden lg:block">
            <Star name='url(img/starpu.png)' size='calc(6% - 20px)' top='1%' left='12%'/>
            <Star name='url(img/starash.png)' size='calc(5% - 20px)' top='91%' left='2%'/>
            <Star name='url(whitestar.svg)' size='calc(5% - 20px)' top='43%' left='90%'/>
          </div>
          <div className="flex w-[95%] items-center justify-between mx-auto h-full">
            <motion.div
              initial={{ x: -110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, stiffness: 80 }}
              className="w-[44%] mt-[10%]">
              <h2 className="text-purp font-bold text-xl text-right mb-2">Hackathon Announcement</h2>
              <p className="text-[14px] text-right">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </motion.div>
            <div className="w-[10%] flex justify-center h-[40vh]">
              <div className="w-1 h-full relative bg-purp ">
                <div className="rounded-full top-[70%] left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">1</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 4, stiffness: 80 }}
              className="w-[44%] mt-[10%]">
              <p className="text-purp font-bold text-xl">November 18, 2023</p>
            </motion.div>
          </div>
          <div className="flex flex-row-reverse w-[95%] items-center justify-between mx-auto h-[20vh]">
            <motion.div
              initial={{ x: 110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 8, stiffness: 80 }}
              className="w-[44%]">
              <h2 className="text-purp font-bold text-xl text-left mb-2">Teams Registration begins</h2>
              <p className="text-[14px] text-left">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            </motion.div>
            <div className="w-[10%] h-full flex justify-center">
              <div className="w-1 h-full relative bg-purp ">
                <div className="rounded-full top-1/2 left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">2</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 10, stiffness: 80 }}
              className="w-[44%]">
              <p className="text-purp font-bold text-xl text-right w-full">November 18, 2023</p>
            </motion.div>
          </div>
          <div className="flex w-[95%] items-center justify-between mx-auto h-[20vh]">
            <motion.div
              initial={{ x: -110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 15, stiffness: 80 }}
              className="w-[44%]">
              <h2 className="text-purp font-bold text-xl text-right mb-2">Teams Registration ends</h2>
              <p className="text-[14px] text-right">Interested Participants are no longer Allowed to register</p>
            </motion.div>
            <div className="w-[10%] flex justify-center h-full">
              <div className="w-1 h-full relative bg-purp ">
                <div className="rounded-full top-1/2 left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">3</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 16, stiffness: 80 }}
              className="w-[44%]">
              <p className="text-purp font-bold text-xl">November 18, 2023</p>
            </motion.div>
          </div>
          <div className="flex flex-row-reverse w-[95%] items-center justify-between mx-auto h-[20vh]">
            <motion.div
              initial={{ x: 110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 22, stiffness: 80 }}
              className="w-[44%]">
              <h2 className="text-purp font-bold text-xl text-left mb-2">Announcement of the accepted teams and ideas</h2>
              <p className="text-[14px] text-left">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </motion.div>
            <div className="w-[10%] h-full flex justify-center">
              <div className="w-1 h-full relative bg-purp ">
                <div className="rounded-full top-1/2 left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">4</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 22, stiffness: 80 }}
              className="w-[44%]">
              <p className="text-purp font-bold text-xl text-right w-full">November 18, 2023</p>
            </motion.div>
          </div>
          <div className="flex w-[95%] items-center justify-between mx-auto h-[20vh]">
            <motion.div
              initial={{ x: -110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 29, stiffness: 80 }}
              className="w-[44%]">
              <h2 className="text-purp font-bold text-xl text-right mb-2">Getlinked Hackathon 1.0 Offically Begins</h2>
              <p className="text-[14px] text-right">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </motion.div>
            <div className="w-[10%] flex justify-center h-full">
              <div className="w-1 h-full relative bg-purp ">
                <div className="rounded-full top-1/2 left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">5</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 28, stiffness: 80 }}
              className="w-[44%]">
              <p className="text-purp font-bold text-xl">November 18, 2023</p>
            </motion.div>
          </div>
          <div className="flex flex-row-reverse w-[95%] items-center justify-between mx-auto h-[20vh]">
            <motion.div
              initial={{ x: 110, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 36, stiffness: 80 }}
              className="w-[44%]">
              <h2 className="text-purp font-bold text-xl text-left mb-2">Demo day</h2>
              <p className="text-[14px] text-left">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </motion.div>
            <div className="w-[10%] h-full flex justify-center">
              <div className="w-1 h-1/2 relative bg-purp ">
                <div className="rounded-full top-[100%] left-1/2 bg-purp -translate-x-1/2 -translate-y-1/2 absolute border-[8px] border-background items-center flex justify-center w-12 h-12 bg-button">
                  <p className="font-bold">6</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 34, stiffness: 80 }}
              className="w-[44%]">
              <p className="text-purp font-bold text-xl text-right w-full">November 18, 2023</p>
            </motion.div>
          </div>
        </div>

      </div>
    )
}

export default TimelineBig;
