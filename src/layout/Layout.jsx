import PropTypes from "prop-types"
import Navbar from "../components/common/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-background overflow-hidden relative h-full">
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