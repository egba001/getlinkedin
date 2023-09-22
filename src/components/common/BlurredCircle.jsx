import PropTypes from "prop-types"
const BlurredCircle = ({ color, left, right, top, bottom, blendMode }) => {
    return (
        <div className='absolute w-80 h-80 rounded-full filter blur-3xl opacity-90'
            style={{ top: top, bottom: bottom, right: right, left: left, mixBlendMode: blendMode, backgroundColor: color }}></div>
    )
}

BlurredCircle.propTypes = {
  bottom: PropTypes.string,
  color: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  blur: PropTypes.string,
  blendMode: PropTypes.string
}

export default BlurredCircle;