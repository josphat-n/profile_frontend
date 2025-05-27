import React from 'react';

const Index = () => {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <section className="text-center mb-5">
                <img
                    src="/static/images/Josephat.jpg"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h1 className="display-4">Josphat Njoroge</h1>
                <p className="lead text-muted">Software Engineer &amp; Web Developer</p>
            </section>

            {/* About Me */}
            <section className="mb-5">
                <h2 className="mb-3">About Me</h2>
                <p>
                    Passionate software engineer with X years of experience in building scalable web applications. Skilled in React, Python, Flask,
                    and cloud technologies. Committed to writing clean, efficient code and continuously learning new tools and techniques.
                </p>
            </section>

            {/* Skills */}
            <section className="mb-5">
                <h2 className="mb-3">Skills</h2>
                <div className="d-flex flex-wrap gap-3">
                    {[
                        'JavaScript', 'React', 'Python', 'Flask', 'SQLAlchemy', 'Docker', 'AWS', 'REST APIs'
                    ].map(skill => (
                        <span key={skill} className="badge bg-primary fs-6">{skill}</span>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-5">
                <h2 className="mb-3">Projects</h2>
                <div className="row">
                    {[
                        {
                            title: "Project One",
                            description: "A web app for managing tasks using React and Flask.",
                            link: "https://github.com/yourusername/project-one"
                        },
                        {
                            title: "Project Two",
                            description: "An e-commerce platform with payment integration.",
                            link: "https://github.com/yourusername/project-two"
                        }
                    ].map(({title, description, link}) => (
                        <div key={title} className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text flex-grow-1">{description}</p>
                                    <a href={link} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-auto">
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="mb-5">
                <h2 className="mb-3">Contact</h2>
                <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></p>
                <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
            </section>
        </div>
    );
};

export default Index;