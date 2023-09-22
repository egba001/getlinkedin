import PropTypes from "prop-types"
const Star = ({ name, size, top, left  }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: top,
                left: left,
                width: size,
                height: size,
                backgroundImage: name,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
        ></div>
    )
}

Star.propTypes = {
  left: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  top: PropTypes.string
}
export default Star;