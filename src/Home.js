import React from "react";
import "./styles/Home.css"
import Computer from "./images/pcGif.gif";
import HomeButton from "./HomeButton";

const Home = () => {
    const [fiuHover, setFiu] = React.useState(false);
    const [linkedHover, setLinked] = React.useState(false);

    function hoverFIU () {
        setFiu(!fiuHover);
    }

    function hoverLinked () {
        setLinked(!linkedHover);
    }

    return (
        <div className="world">
            <div className="myBackground">
                <div className="welcomeImgs">
                    <div className="welcomeText">
                        <h1>Hello I am <br></br>
                        Saul Espinoza Nalvarte
                        </h1>
                        <h2>Computer Science student at FIU</h2>
                    </div>

                    <img src={Computer} alt="Computer"></img>
                </div>
            </div>

            <div className="lowHomeImgs">
                <a href="https://www.fiu.edu/" target="_blank" rel="noreferrer">
                    <div className="b1-one" onMouseEnter={hoverFIU} onMouseLeave={hoverFIU}>
                        {fiuHover ? <p>My School</p> : <p></p>}
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/saul-espinoza-nalvarte-fiu/" target="_blank" rel="noreferrer">
                    <div className="b2-two" onMouseEnter={hoverLinked} onMouseLeave={hoverLinked}>
                        {linkedHover ? <p>My professional profile</p> : <p></p>}
                    </div>
                </a>
            </div>

            <HomeButton/>
        </div>
    );
}

export default Home;