import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <li className="nav-item">
                  <span onClick={onClick}  className="nav-link" role='button'  data-toggle="tab">{children}</span>
    </li>
  )
}

export default Button