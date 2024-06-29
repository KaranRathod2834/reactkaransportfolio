import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import boy from "../../../images/boy.jpeg";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Karan Rathod</span>
                    </h1>
                    <p className="title">
                        Desire to be associated with the progressive, dynamic
                        and esteemed organization that can provide me a
                        rewarding career opportunity and strong platform to
                        exercise my technical and analytical skills to achieve
                        organizational goals.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={boy}
                        alt="Hello I am Karan Rathod"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">GOOD CODING SKILLS</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>Hobbies</span>
                            Travelling and Reading Books
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
