import styles from "./styles/Projects.module.css"
import ProjectComponent from "./ProjectComponent";

const Projects = () => {
    return (
        <>
            <h1 className={styles.title}>My Projects</h1>

            <div className={styles.twoProjects}>
                <ProjectComponent title="init" description="Complete renovation of INIT's website" technologies={["Figma", "Next.js", "Tailwind.css"]}/>
                <ProjectComponent title="miamiGuide" description="App that gives detailed information on places the user is likely to favor" technologies={["React.js",
                    "Puppeteer.js", "Node.js", "AWS", "SQL"
                ]}/>
            </div>

            <div className={styles.twoProjects}>
                <ProjectComponent title="catSelector" description="Website that returns cat breeds depending on the user's preferences" technologies={["React.js", "Node.js", "SQL"]}/>
                <ProjectComponent title="verdeVentures" description="App that filters S&P companies that are eco-friendly and reccommends stocks with machine learning" technologies={[
                "React.js", "FastAPI", "Python", "SCRUM"]}/>
            </div>
        </>
    );
}

export default Projects;