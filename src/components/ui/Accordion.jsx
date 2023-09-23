import { Disclosure, Transition } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Accordion = () => {
  return (
    <div className="w-full pt-4 top-45 mb-12 lg:mb-0 flex flex-col lg:absolute">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 8, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp  max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>Can I work on a project I started before the hackathon?</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 12, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp mt-3  max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>What happens if I need help during the hackathon?</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 16, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] w-[86%] lg:w-full leading-8'>What happens if I don&#39;t have an idea for a project?</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 20, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>Can I join a team or do I have to come with one?</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 24, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal w-[80%] lg:w-full text-[14px] leading-8'>What happens after the hackathon ends</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 28, stiffness: 20 }}
        className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>Can I work on a project I started before the hackathon?</span>
                <div>
                    { open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="pt-4 pb-2 transition ease-in duration-100 text-white">
                      <p className='font-[300] text-[14px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </motion.div>
    </div>
  )
}

export default Accordion;
