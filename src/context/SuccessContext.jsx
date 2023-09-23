import PropTypes from "prop-types"
import { createContext, useState } from "react"

export const SuccessC = createContext();

const SuccessContext = ({ children }) => {

    // State to manage successful form upload
    const [ isSuccessful, setIsSuccessful ] = useState(false);

    return (
        <SuccessC.Provider value={{ isSuccessful, setIsSuccessful }}>
            {children}
        </SuccessC.Provider>
    )
}

SuccessContext.propTypes = {
  children: PropTypes.any
}

export default SuccessContext;