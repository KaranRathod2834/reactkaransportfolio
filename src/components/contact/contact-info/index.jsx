import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I am seeking opportunities in software companies; please notify
                me of any openings.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 9422716719</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">karanrathod2834@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
