import PropTypes from "prop-types"
import Navbar from "../components/common/Navbar";
import BlurredCircle from "../components/common/BlurredCircle";

const HomeLayout = ({ children }) => {
    return (
        <div className="bg-background overflow-hidden h-full">
            <div className="hidden lg:block">
                <BlurredCircle color={'#460984'} top={'5%'} left={'20%'} size={'30%'} />
            </div>
            <div className="lg:hidden">
                <BlurredCircle color={'#460984'} top={'18%'} left={'10%'} size={'40%'} />
            </div>
            <div className="max-w-full relative">
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