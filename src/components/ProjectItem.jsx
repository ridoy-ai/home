import React from 'react';

// Define a component for rendering a project item
const ProjectItem = ({ name, description, images, techStack, link }) => {
    return (
        <div className="p-4 bg-bg-gray-300 shadow-lg rounded-lg border-solid border-2 border-theme-dark-slate">
            <h3 className="text-xl text-text-small-slate-dark font-bold">{name}</h3>
            <p className="text-text-small-slate-dark">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {images && images.map((image) => (
                    <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 object-cover rounded-md"
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech) => (
                    <span className="inline-block px-2 py-1 rounded-full border-2 text-text-small-slate-dark">
                        {tech}
                    </span>
                ))}
            </div>
            {link && <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-text-small-slate-dark hover:font-bold underline"
            >
                Visit Project
            </a>}
        </div>
    );
};

export default ProjectItem;