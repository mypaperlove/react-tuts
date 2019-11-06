//rfc  React functional Componments
import React from 'react'
import PropTypes from 'prop-types';

export default function TodoHeader (props) {
  return (
    <h1 >
      {props.desc}
      {/* {props.x + props.y} */}
      {props.children}
    </h1>
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
}
TodoHeader.defaultProps = { //设置默认值
  desc: '可惜可惜'
}