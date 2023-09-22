import PropTypes from "prop-types"
import Navbar from "../components/common/Navbar";
import BlurredCircle from "../components/common/BlurredCircle";

const HomeLayout = ({ children }) => {
    return (
        <div className="bg-background overflow-hidden h-full">
            <BlurredCircle color={'#460984'} top={'5%'} left={'20%'} />
            <div className="max-w-full">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

HomeLayout.propTypes = {
  children: PropTypes.any
}

export default HomeLayout;