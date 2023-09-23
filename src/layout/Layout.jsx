import PropTypes from "prop-types"
import Navbar from "../components/common/Navbar";
import Success from "../components/ui/Success";
import { useContext } from "react";
import { SuccessC } from "../context/SuccessContext";

const Layout = ({ children }) => {

    const { isSuccessful } = useContext(SuccessC)

    return (
        <div className="bg-background overflow-hidden relative h-full">
            {isSuccessful && <Success />}
            <div className="max-w-full">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout;