import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import MyPortrait from '../assets/portrait_me.jpg'

const ExperienceItem = ({ date, dateColor, name, company, description, link, projects }) => {

    // Define a state variable for showing or hiding the dialog
    const [showDialog, setShowDialog] = useState(false);

    // Define a function for toggling the dialog
    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };

    return (
        <div className="resume-item border-line-h bg-bg-slate-800 p-4 mb-2">
            <div className="date border p-1 inline-block" style={{ color: dateColor }}>
                <span>{date}</span>
            </div>
            <div className="name" style={{ fontWeight: "bold" }}>
                <span>{name}</span>
            </div>
            <div className="company" style={{ fontStyle: "italic" }}>
                <span>{company}</span>
            </div>
            <div className="single-post-text p-2 m-2" style={{ whiteSpace: "pre-line" }}>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            {link && (
                <div className="projects font-bold underline cursor-pointer" onClick={toggleDialog}>
                    <span>Projects ⮕</span>
                </div>
            )}
            {/* Use conditional rendering to show or hide the dialog */}
            {showDialog && (
                // Use tailwind css classes to style the dialog
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-3/4 h-3/4 border-solid border-4 border-bg-gray-300 bg-text-plain-white overflow-y-auto p-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-text-large-slate">Projects</h2>
                            {/* Add an onClick handler for closing the dialog */}
                            <button
                                className="h-8 w-8 rounded-full bg-theme-dark-slate hover:bg-gray-200 font-bold"
                                onClick={toggleDialog}
                            >
                                X
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {/* Render the project item component with the sample project data */}
                            {projects.map((project) => (
                                <ProjectItem {...project} />
                            ))}
                            {/* <ProjectItem
                                name="Team Lead, Artificial intelligence"
                                description="⦿ Responsible to lead research and development works related with Computer Vision and NLP. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
                                images={[MyPortrait, MyPortrait]}
                                techStack={["React", "Tailwind", "Firebase"]}
                                link="http://example.com/link1"
                            />
                            <ProjectItem
                                name="Team Lead, Artificial intelligence"
                                description="⦿ Responsible to lead research and development works related with Computer Vision and NLP. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
                                images={["image1.jpg", "image2.jpg"]}
                                techStack={["React", "Tailwind", "Firebase"]}
                                link="http://example.com/link1"
                            />
                            <ProjectItem
                                name="Team Lead, Artificial intelligence"
                                description="⦿ Responsible to lead research and development works related with Computer Vision and NLP. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
                                images={["image1.jpg", "image2.jpg"]}
                                techStack={["React", "Tailwind", "Firebase"]}
                                link="http://example.com/link1"
                            />
                            <ProjectItem
                                name="Team Lead, Artificial intelligence"
                                description="⦿ Responsible to lead research and development works related with Computer Vision and NLP. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
                                images={["image1.jpg", "image2.jpg"]}
                                techStack={["React", "Tailwind", "Firebase"]}
                                link="http://example.com/link1"
                            /> */}
                            {/* You can add more project items here */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ExperienceItem;
