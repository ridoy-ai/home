import React from 'react';

// Define a component for rendering a project item
const ProjectItem = ({ name, description, images, techStack, link }) => {
    return (
        <div className="p-4 bg-theme-dark-slate shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {images.map((image) => (
                    <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 object-cover rounded-md"
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech) => (
                    <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
                        {tech}
                    </span>
                ))}
            </div>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-blue-600 hover:text-blue-800 underline"
            >
                Visit Project
            </a>
        </div>
    );
};

export default ProjectItem;