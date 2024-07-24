import React from "react";
import "./styles/HomeButton.css";
import Lima from "./images/lima.png";

const HomeButton = () => {
    const [firstButton, setFirst] = React.useState(false);
    const [secondButton, setSecond] = React.useState(false);

    const firstTrigger = () => {
        setFirst(!firstButton);
        setSecond(false);
    }

    const secondTrigger = () => {
        setSecond(!secondButton);
    }

    return (
        <div width="100%">
            <a href="#firstHidden">
                <div className="loreButton" onClick={firstTrigger} href="#salvo">
                    <p>My Story</p>
                </div>
            </a>

            <div>
                {firstButton ? 
                    <div>
                        <div className="separator"  id="firstHidden">
                            <div className="singleText">
                                <p>
                                    I was born in Lima, Peru. Since I was little, (about 5 
                                    years old) I have been very invested with computers, my 
                                    parents always asked me for help with them and when I 
                                    did so, their joy and the title that they gave me "The 
                                    technician" really motivated me to set my dream job to 
                                    be something relating to tech, though I didnt know what 
                                    exactly. It was only by watching movies and documentaries 
                                    about programmers that I was ultimately led to decide that 
                                    this was it, creating things with computers is something 
                                    I want to do with my life. People with the ability to make
                                    virtual things from scratch were fascinating, and I want
                                    to be like them.
                                    Once I turned 13, my family emigrated to the US with the 
                                    sole purpose of providing me with a superior education to
                                    develop my skills to the fullest.
                                </p>
                            </div>

                            <img src ={Lima} className="loreImg" width="500px"></img>
                        </div>
                        
                        <a href="#secondHidden">
                            <div className="loreButton fade" onClick={secondTrigger}>
                                <p>Where we are now</p>
                            </div> 
                        </a>                       
                    </div>
                     : <h1></h1>}
                
                {secondButton ? 
                    <div className="singleText textOnly" id="secondHidden">
                            <p>
                                    I am now 22 years old and majoring in Computer Science at FIU, I also happen
                                    to work there as a part time tutor on the courses that I take, and helping the
                                    undersclassmen with better understanding programming topics and preparing them 
                                    to succeed in their classes. This activity I find to be extremely rewarding as 
                                    it not only helps other people who are struggling with their coursework, but it
                                    helps me as well, as I get to understand the fundamentals even strongly by 
                                    looking at them from the teaching perspective. Having worked on that milestone, 
                                    the next step towards my goal is to land an internship.<br/>
                                    Did I catch your interest?<br/>
                                    Check out my newest projects: <a href="https://myfavoritecatselector.com/">The Cat Breed Selector website</a> <br></br>
                                    <a href="https://ultimatemiamimanual.com/">The Ultimate Miami Manual</a>
                            </p>
                    </div>
                : <p></p>}
            </div>


        </div>
    );
}

export default HomeButton;