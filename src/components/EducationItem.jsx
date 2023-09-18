import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import MyPortrait from '../assets/portrait_me.jpg'

const EducationItem = ({ date, dateColor, degName, institution, description, pubLink, pubText, transcriptLink }) => {

    return (
        <div className="p-4 mb-2 bg-bg-gray-300 shadow-lg rounded-lg border-solid border-2 border-theme-dark-slate">
            <div className="date border border-theme-dark-slate p-1 inline-block" style={{ color: dateColor }}>
                <span>{date}</span>
            </div>
            <div className="name" style={{ fontWeight: "bold" }}>
                <span>{degName}</span>
            </div>
            <div className="company" style={{ fontStyle: "italic" }}>
                <span>{institution}</span>
            </div>
            <div className="single-post-text p-1 m-1" style={{ whiteSpace: "pre-line" }}>
                <div>
                    <p>{description} <a class="underline italic font-bold" href={pubLink} rel="noreferrer" target="_blank">{pubText}</a>
                    </p>
                </div>
            </div>
            {transcriptLink && <a
                href={transcriptLink}
                target="_blank"
                rel="noreferrer"
                className="block mt-2 text-text-small-slate-dark hover:font-bold underline"
            >
                View Transcripts
            </a>}
            {/* Use conditional rendering to show or hide the dialog */}
        </div>
    );
};


export default EducationItem;
