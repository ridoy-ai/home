import React from 'react';

// Define a component for rendering a project item
const AwardItem = ({ timePeriod, name, description, images, values, link }) => {
    return (
        <div className="p-4 mb-2 bg-bg-gray-300 shadow-lg rounded-lg border-solid border-2 border-theme-dark-slate">
            <div className="date border p-1 inline-block" style={{ color: "#020617" }}>
                <span>{timePeriod}</span>
            </div>
            <h3 className="text-xl text-text-small-slate-dark font-bold">{name}</h3>
            <div className="single-post-text p-2 m-2" style={{ whiteSpace: "pre-line" }}>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            {/* <p className="text-text-small-slate-dark">{description}</p> */}
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
                {values.map((value) => (
                    <span className="inline-block px-2 py-1 rounded-full border-2 text-text-small-slate-dark">
                        {value}
                    </span>
                ))}
            </div>
            {link && <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-text-small-slate-dark hover:font-bold underline"
            >
                View Awards
            </a>}
        </div>
    );
};

export default AwardItem;