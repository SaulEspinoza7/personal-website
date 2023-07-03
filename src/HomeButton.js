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
                            <div className="singleText textAndImg" width="300px">
                                <p>
                                    I was born in Lima, Peru. Since I was little, (about 5 <br/>
                                    years old) I have been very invested with computers, my <br/>
                                    parents always asked me for help with them and when I <br/>
                                    did so, their joy and the title that they gave me "The <br/>
                                    technician" really motivated me to set my dream job to <br/>
                                    be something relating to tech, though I didnt know what <br/>
                                    exactly. It was only by watching movies and documentaries <br/>
                                    about programmers that I was ultimately led to decide that <br/>
                                    this was it, creating things with computers is something <br/>
                                    I want to do with my life. People with the ability to make<br/>
                                    virtual things from scratch were fascinating, and I want<br/>
                                    to be like them.<br/>
                                    Once I turned 13, my family emigrated to the US with the <br/>
                                    sole purpose of providing me with a superior education to <br/>
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
                                    I am now 21 years old and majoring in Computer Science at FIU, I also happen <br/>
                                    to work there as a part time tutor on the courses that I take, and helping the<br/>
                                    undersclassmen with better understanding programming topics and preparing them <br/>
                                    to succeed in their classes. This activity I find to be extremely rewarding as <br/>
                                    it not only helps other people who are struggling with their coursework, but it<br/>
                                    helps me as well, as I get to understand the fundamentals even strongly by <br/>
                                    looking at them from the teaching perspective. Having worked on that milestone, <br/>
                                    the next step towards my goal is to land an internship.<br/>
                                    Did I catch your interest?<br/>
                                    Check out my newest project: <a href="https://myfavoritecatselector.com/">The Cat Breed Selector website</a>

                            </p>
                    </div>
                : <p></p>}
            </div>


        </div>
    );
}

export default HomeButton;