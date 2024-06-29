import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import PROJECT01 from "../../download/PROJECT01.pdf";
import PROJECT02 from "../../download/PROJECT02.pdf";
import PROJECT03 from "../../download/PROJECT03.pdf";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
import CallToAction from "../shared/CallToAction";
import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Real Estate Price Prediction System",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
            pdf: PROJECT01,
        },
    },
    {
        id: 2,
        name: "Student's Dashboard",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
            pdf: PROJECT02,
        },
    },
    {
        id: 3,
        name: "password manager",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
            pdf: PROJECT03,
        },
    },
    {
        id: 4,
        name: "Analog Clock",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
