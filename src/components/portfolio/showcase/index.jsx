import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={project.id}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <a
                                href={project.media.pdf} // Link to the PDF file
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-link"
                            >
                                <AiOutlineCloudDownload />
                                Download info
                            </a>
                            <Arrow />
                        </div>
                    </div>
                    <img src={project.media.thumbnail} />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
