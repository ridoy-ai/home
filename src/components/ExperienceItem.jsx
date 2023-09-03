import React from 'react';

const ExperienceItem = ({ date, dateColor, name, company, description, link }) => {
    return (
        <div className="resume-item border-line-h bg-bg-slate-800 p-4 mb-2">
            <div className="date border p-1 inline-block" style={{color: dateColor}}>
                <span>{date}</span>
            </div>
            <div className="name" style={{fontWeight: "bold"}}>
                <span>{name}</span>
            </div>
            <div className="company" style={{fontStyle: "italic"}}>
                <span>{company}</span>
            </div>
            <div className="single-post-text p-2 m-2" style={{whiteSpace: "pre-line"}}>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            {link && (
                <a href={link} className="lnk lnk-2" style={{fontWeight: "bold", textDecoration: "underline"}}>
                    <span className="text">Projects</span>
                    <i className="fas fa-angle-right"></i>
                </a>
            )}
        </div>
    );
};


export default ExperienceItem;
