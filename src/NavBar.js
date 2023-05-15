import React from "react";
import Popup from "./Popup"
import Thumb from "./images/thumbs.png";
import {Link} from 'react-router-dom';
import "./styles/NavBar.css"

const NavBar = () => {
    const [myPopUp, setPopUp] = React.useState(false);
    
    return (
        <div>
            <div className="outBar">
                <Link to="/">
                    <img src = {Thumb} width = "60px"></img>
                </Link>

                <nav>
                    <Link to="/">Home</Link>
                    <a href="#" onClick={() => setPopUp(true)}>Download CV</a>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>

            <Popup showPop={myPopUp} setTrigger={setPopUp}/>            
        </div>
    );
}

export default NavBar;