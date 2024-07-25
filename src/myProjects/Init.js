import "../styles/ProjectPage.css";
import FirstPage from "../images/projects/init.jpg";
import ImgOne from "../images/projects/init1.png";
import ImgTwo from "../images/projects/init2.png";
import ImgThree from "../images/projects/init3.png";

const Init = () => {
    return (
        <>
            <div className="projectOverview">
                <div className="projectFeatures">
                    <img src={FirstPage} width="500px" alt="Project First Page"/>

                    <div className="projectTitle">
                        <h1>INIT</h1>
                        <h2>Features</h2>
                        <ul>
                            <li>Complete website renovation</li>
                            <li>Designed to be a perfect tech hub</li>
                            <li>Informs and encourages participation in the organization</li>
                        </ul>
                    </div>
                </div>

                <h2>Project Description</h2>
                <p>Collaborated with a team of developers to renovate the INIT's university website transforming it into the 
                    perfect hub for all things related to tech education and development. Modified the website to ensure that 
                     users know all information they need without redundancy and view upcoming events. </p>
            </div>

            <a href="https://init-website-omega.vercel.app/home" target="_blank" rel="noreferrer" className="loreButton">See Project</a>

            <div className="projectImages">
                <img src={ImgOne} alt="First project display"/>
                <img src={ImgTwo} alt="Second project display"/>
                <img src={ImgThree} alt="Third project display"/>
            </div>
        </>
    );
}

export default Init;