
import '../live-preview/preview.css'

function Preview({ cvData, educationList }) {
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
                        <h3>Education</h3>
                        {educationList.map((edu, index) => (
                        <div key={index} className="cv-education-item">
                            <p><strong>{edu.degree}</strong> at {edu.school}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <p>Grade: {edu.grade}</p>
                            <p>Location: {edu.location}</p>
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