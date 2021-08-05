import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect , useRef } from 'react'


const Intro = () => {
        const TextRef = useRef();

    useEffect(() => {
        init(TextRef.current, 
            { 
                backDelay: 1500,
                showCursor: true,
                backSpeed:  10,
                cursorChar: "|",
                strings: ["Intern","Developer", 'Designer',"Software Engineer","Content Creator","Quick Learner" ],
             });

},[]);

    return (
        <div className="intro"  id="intro">
                <div className="left">
                    <div className="imagecontainer">
                    <img src="assets/man.png" alt="dev photo" />

                    </div>

                </div>
                <div className="right">

                    <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Bimal Yadav</h1>
                    <h3>Freelance <span ref={TextRef}></span></h3>

                    </div>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="down arrow" />

                    </a>


                </div>

        </div>
    )
}

export default Intro
