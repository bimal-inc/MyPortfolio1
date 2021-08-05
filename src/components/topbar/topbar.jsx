import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
const topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Bimal.</a>
                    <div className="itemcontainer">
                    <Person className="icon"/>
                    <span>9813585735</span>
                        
                    </div>
                    <div className="itemcontainer">
                    <Mail className="icon"/>
                    <span>Bimalyadavemail7@gmail.com</span>
                        
                    </div>
                </div>
               
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>

                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                

                </div>
                

            </div>

        </div>
    )
}

export default topbar
