import { Disclosure, Transition } from '@headlessui/react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  return (
    <div className="w-full pt-4 top-45 flex flex-col absolute">
      <div className="w-full  relative border-b border-b-purp  max-w-md">
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
      </div>
      <div className="w-full  relative border-b border-b-purp mt-3  max-w-md">
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
      </div>
      <div className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>What happens if I don&#39;t have an idea for a project?</span>
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
      </div>
      <div className="w-full  relative border-b border-b-purp mt-3 max-w-md">
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
      </div>
      <div className="w-full  relative border-b border-b-purp mt-3 max-w-md">
        <Disclosure className=''>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-purp">
                <span className='text-white font-normal text-[14px] leading-8'>What happens after the hackathon ends</span>
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
      </div>
      <div className="w-full  relative border-b border-b-purp mt-3 max-w-md">
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
      </div>
    </div>
  )
}

export default Accordion;
