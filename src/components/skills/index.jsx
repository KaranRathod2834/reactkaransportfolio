import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/KARANRATHODRESUME_DJSCE.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I completed a comprehensive course on *C++ with Data
                        Structures and Algorithms* on Udemy, gaining a strong
                        foundation in essential programming concepts.
                        Additionally, I developed several front-end projects,
                        including a personal portfolio website and an e-commerce
                        landing page, using *HTML, **CSS, and **JavaScript*. My
                        projects demonstrate my ability to create responsive and
                        interactive user interfaces. Participating in local
                        hackathons allowed me to apply my skills in real-world
                        scenarios.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
