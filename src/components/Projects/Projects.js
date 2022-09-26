import React from 'react';

import Image from '../Image/Image';

import './Projects.scss';

const Projects = ({ mount, projects }) => {
    return (
        <ul className="c-projects">
            {projects.map((project, index) => (
                <li key={index}>
                    <div className="o-container">
                        <div className="c-projects__item">
                            <div className="c-projects__item-image">
                                <Image
                                    alt={project.name}
                                    image={project.image}
                                    mount={mount}
                                />
                            </div>
                            <div className="c-projects__item-content">
                                <h2 className="c-projects__item-name">
                                    {project.name}
                                </h2>
                                <p className="c-projects__item-role">
                                    {project.role}
                                </p>
                                <a
                                    href={project.url}
                                    className="c-projects__item-cta"
                                    rel="noopener noreferrer"
                                >
                                    <span>Visit site</span>
                                    <i>
                                        <svg
                                            width="14"
                                            height="8"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.984 7.594l3.375-3.375L9.984.844V3.64H.828v1.156h9.156z" />
                                        </svg>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Projects;
