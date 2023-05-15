import "./styles/Contact.css"
import Web from "./images/miniWeb.png"
import Phone from "./images/miniPhone.png";
import Mail from "./images/miniMail.png";

const Contact = () => {
    return (
        <div className="contactBackground">
            <h1>Contact Me</h1>

            <div className="contactWays">
                <div className="contactPoint">
                    <h2>Web</h2>

                    <img src={Web}></img>

                    <a href="https://www.linkedin.com/in/saul-espinoza-nalvarte-fiu/" target="_blank" rel="noreferrer">
                        <h3>LinkedIn</h3>
                    </a>

                    <a href = "https://github.com/SaulEspinoza7" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </div>
                
                <div className="contactPoint">
                    <h2>Phone</h2>

                    <img src={Phone}></img>

                    <h3>Mobile</h3>

                    <p>(720) 590-9654</p>
                </div>

                <div className="contactPoint">
                    <h2>E-mail</h2>

                    <img src={Mail}></img>

                    <h3>Personal</h3>

                    <p>ciberelmas4@gmail.com</p>

                    <h3>University</h3>

                    <p>sespi094@fiu.edu</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;