import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";


export const useScroll = () => {
    return useContext(ScrollContext);
};