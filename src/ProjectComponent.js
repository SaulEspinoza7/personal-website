import {Link} from "react-router-dom"
import "./styles/ProjectComponent.css"
import React, {useState} from "react"
import DownArrow from "./images/downArrow.png";

const ProjectComponent = (props) => {
    const [hover, setHover] = useState(false);

    const capitalize = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
        

    return (
        <Link to="#" className="projectComponentBox" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={require(`./images/projects/${props.title}.jpg`)} width="500px" style={{borderRadius: "10px"}} alt="Project Image" className="componentImg"></img>
                {hover && 
                <div className="projectOverlay">
                    <h2>{capitalize(props.title)}</h2>

                    <h3>{props.description}</h3>

                    <div className="projectTechs">
                    {props.technologies.map((x) => <h3 className="projectArrayElement">{x}</h3>)}
                    </div>  

                    <h3>View project</h3>

                    <img src={DownArrow} alt="Arrow pointing down" width="25px"></img>    
                </div>}
            
        </Link>
    );
}

export default ProjectComponent;