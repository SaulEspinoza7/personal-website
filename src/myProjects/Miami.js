import "../styles/ProjectPage.css";
import FirstPage from "../images/projects/miamiGuide.jpg";
import ImgOne from "../images/projects/miamiGuide1.png";
import ImgTwo from "../images/projects/miamiGuide2.png";
import ImgThree from "../images/projects/miamiGuide3.png";

const Miami = () => {
    return (
        <>
            <div className="projectOverview">
                <div className="projectFeatures">
                    <img src={FirstPage} width="500px" alt="Project First Page"/>

                    <div className="projectTitle">
                        <h1>Ultimate Miami Guide</h1>
                        <h2>Features</h2>
                        <ul>
                            <li>Tourism guide for Miami</li>
                            <li>Reccommends places that the user is interested in</li>
                            <li>Gives detailed information on the locations such as schedules</li>
                        </ul>
                    </div>
                </div>

                <h2>Project Description</h2>
                <p>Developed an interactive web application that personalizes tourist experiences in Miami by 
                    recommending attractions and restaurants based on user preferences, significantly enhancing the travel 
                    planning process. Implemented the front-end with React.js and Bootstrap, achieving a responsive and user-friendly 
                    interface, which accelerated the development cycle. AWS Lambda was used for the backend. 
                    </p>
            </div>

            <a href="https://ultimatemiamimanual.com/" target="_blank" rel="noreferrer" className="loreButton">See Project</a>

            <div className="projectImages">
                <img src={ImgOne} alt="First project display"/>
                <img src={ImgTwo} alt="Second project display"/>
                <img src={ImgThree} alt="Third project display"/>
            </div>
        </>
    );
}

export default Miami;