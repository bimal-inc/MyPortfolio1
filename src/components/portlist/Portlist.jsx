import React from 'react'
import "./Portlist.scss"

const Portlist = ({id , title, active, setSelected}) => {
    return (
        <li
        className={active ? "Portlist active" : "Portlist"}
        onClick={() => setSelected(id)}
      >
        {title}
        </li>
    )
}

export default Portlist





