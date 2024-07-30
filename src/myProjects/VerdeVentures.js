import "../styles/ProjectPage.css";
import FirstPage from "../images/projects/verdeVentures.jpg";
import ImgOne from "../images/projects/verdeVentures1.png";
import ImgTwo from "../images/projects/verdeVentures2.png";

const VerdeVentures = () => {
    return (
        <>
            <div className="projectOverview">
                <div className="projectFeatures">
                    <img src={FirstPage} width="500px" alt="Project First Page"/>

                    <div className="projectTitle">
                        <h1>VerdeVentures</h1>
                        <h2>Features</h2>
                        <ul>
                            <li>Portfolio selection recommendation application</li>
                            <li>Uses machine learning to pick the most eco-friendly, profitable stocks</li>
                            <li>Implements webscraping to gather stock data</li>
                        </ul>
                    </div>
                </div>

                <h2>Project Description</h2>
                <p>Collaborated and worked in a team of 4 people to develop a website during a 3-day hackathon that uses 
                    machine learning and web scraping to create a portfolio based on environmentally conscious companies. 
                    With React.js, designed a user-friendly interface that allowed users to receive an investing portfolio with 
                    ease, and integrated the Python based machine learning algorithm with the API (FastAPI) for seamless 
                    website functionality.<br/>
                    NOTE: This project is no longer being maintained, as such, the link will redirect you to the Devpost page
                     (the one where the Hackathon submission was made).
                    </p>
            </div>

            <a href="https://devpost.com/software/verdeventures" target="_blank" rel="noreferrer" className="loreButton">See Project</a>

            <div className="projectImages">
                <img src={ImgOne} alt="First project display"/>
                <img src={ImgTwo} alt="Second project display"/>
            </div>
        </>
    );
}

export default VerdeVentures;