
import '../live-preview/preview.css'

function Preview({ cvData, educationList, employmentList, projectsList }) {
    return (
        <div className='preview-container'>
            <header className='preview-header'>
                <div>Live Preview</div>
                <svg className='download' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download-box-outline</title><path d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V7H13.5V10H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" /></svg>
            </header>

            <section className="preview-wrapper">
                <div className="preview-page">
                    <div className='cv-header'>{cvData.fullName}</div>
                    <div className='cv-personal-info'>
                        {(cvData.phone || cvData.email) && (
                            <p className="contact">
                            {cvData.phone && <span>{cvData.phone}</span>}
                            {cvData.phone && cvData.email && <span> | </span>}
                            {cvData.email && <span>{cvData.email}</span>}
                            </p>
                        )}
                    </div>

                    {educationList && educationList.length > 0 && (
                    <div className="cv-education">
                        <h3 className='section-header'>Education</h3>
                        {educationList.map((edu, index) => (
                        <div key={index} className="cv-education-item">
                            <div className='cv-education-item-container'>
                                <p><strong>{edu.school}</strong></p>
                                <p>{edu.location}</p>
                            </div>

                            <div className='cv-education-item-container cv-education-item-container-bottom'> 
                                <p>{edu.degree}, {edu.grade}</p>
                                <p>{edu.startDate} - {edu.endDate}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}

                    {employmentList && employmentList.length > 0 && (
                    <div className="cv-education">
                        <h3 className='section-header'>Experience</h3>
                        {employmentList.map((job, index) => (
                        <div key={index} className="cv-education-item">
                            <div className='cv-employment-item-container'>
                                <div className='employment-top-left'>
                                    <p><strong>{job.role}</strong></p>
                                    <p>{job.company}</p>
                                </div>
                                <div className='employment-top-right'>
                                    <p>{job.startDate} - {job.endDate}</p>
                                    <p>{job.location}</p>
                                </div>
                            </div>
                            <p>{job.description}</p>
                        </div>
                        ))}
                    </div>
                    )}

                    {projectsList && projectsList.length > 0 && (
                    <div className="cv-education">
                        <h3 className='section-header'>Projects</h3>
                        {projectsList.map((project, index) => (
                        <div key={index} className="cv-education-item">
                            <div className='project-top'>
                                <div className='project-top-left'>
                                    <p><strong>{project.projectName}</strong></p>
                                    <p className='separator'> | </p>
                                    <p className='skills'>{project.skills}</p>
                                </div>
                                <p>{project.startDate} - {project.endDate}</p>
                            </div>
                            <p>{project.description}</p>
                        </div>
                        ))}
                    </div>
                    )}
                    
                </div>
            </section>
        </div>
    )
}

export default Preview;