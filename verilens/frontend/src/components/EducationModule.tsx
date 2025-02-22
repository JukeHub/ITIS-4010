import React, { useEffect, useState } from 'react';

const EducationModule: React.FC = () => {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await fetch('/api/education/modules');
                const data = await response.json();
                setModules(data);
            } catch (error) {
                console.error('Error fetching education modules:', error);
            }
        };

        fetchModules();
    }, []);

    return (
        <div className="education-module">
            <h1>Media Literacy Educational Modules</h1>
            {modules.length > 0 ? (
                <ul>
                    {modules.map((module) => (
                        <li key={module.id}>
                            <h2>{module.title}</h2>
                            <p>{module.description}</p>
                            <button onClick={() => alert(`Starting module: ${module.title}`)}>Start Module</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No educational modules available at this time.</p>
            )}
        </div>
    );
};

export default EducationModule;