import React from 'react';


const Project = ({ title, description, tags, url}) => (
    <>
        <div className="project">
            <h1>{title}</h1>
            <h3>{tags}</h3>
            <p>{description}</p>
            <a href={url}>View this project online </a>
        </div>
    </>
);

export default Project;