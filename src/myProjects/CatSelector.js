import "../styles/ProjectPage.css";
import FirstPage from "../images/projects/catSelector.jpg";
import ImgOne from "../images/projects/catSelector1.png";
import ImgTwo from "../images/projects/catSelector2.png";
import ImgThree from "../images/projects/init3.png";

const CatSelector = () => {
    return (
        <>
            <div className="projectOverview">
                <div className="projectFeatures">
                    <img src={FirstPage} width="500px" alt="Project First Page"/>

                    <div className="projectTitle">
                        <h1>Cat Selector</h1>
                        <h2>Features</h2>
                        <ul>
                            <li>App that reccommends cat breeds</li>
                            <li>Connected to a SQL database and a Node.js server</li>
                            <li>Uses user's responses to provide reccomendations</li>
                        </ul>
                    </div>
                </div>

                <h2>Project Description</h2>
                <p>Designed and made an interactive CRUD website that uses a RESTful API (written in Node.js) which 
                    connects it to a SQL database to gather cat data. Express.js being used to compliment the backend. 
                    The website is a Cat Breed Selector. Implementing an advanced filtering algorithm which gathers 3 
                    answers from the user, their ability to groom weekly, the desired activity of the cat, and the exoticness of 
                    it. Depending on the answers, the website returns breeds that cater to them, including pictures and 
                    relevant details. Responsive design was included.  </p>
            </div>

            <a href="https://myfavoritecatselector.com/" target="_blank" rel="noreferrer" className="loreButton">See Project</a>

            <div className="projectImages">
                <img src={ImgOne} alt="First project display"/>
                <img src={ImgTwo} alt="Second project display"/>
                
            </div>
        </>
    );
}

export default CatSelector;