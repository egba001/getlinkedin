import PropTypes from "prop-types"
const Button = ({ text, type, disabled }) => {
    return (
        <button type={type} disabled={disabled} className="bg-button disabled:bg-black py-4 hover:opacity-70 active:opacity-40 transition-opacity duration-300 rounded-md text-center w-44 font-normal text-white">
            {text}
        </button>
    )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

export default Button;