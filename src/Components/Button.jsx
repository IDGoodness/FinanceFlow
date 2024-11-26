// import React from 'react'
import PropTypes from "prop-types";


const Button = ({ name, bg }) => {
  return (
    <>
      <button className="text-white bg-{bg} text-[16px] font-bold rounded-full w-full lg:w-[210px] h-[60px] text-center hover:text-[#0328EE] hover:bg-transparent bg-[#0328EE] ">
          {name}
      </button>
    
    </>
  )
}

Button.PropTypes = {
  name: PropTypes.string.isRequired,
  // bg: PropTypes.string.isRequired,
}

export default Button