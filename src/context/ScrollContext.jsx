// ScrollContext.js
import { createContext, useContext, useState } from 'react';

export const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {

    // State to managae visibility of Overlay menu on mobile
    const [ open, setOpen ] = useState(false);

    // Function to display mobile menu
    const openMenu = () => {
        setOpen(!open);
    }

    const closeMenu = () => {
        setOpen(false);
    }

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{scrollToElement, closeMenu, openMenu, open}}>
      {children}
    </ScrollContext.Provider>
  );
};
