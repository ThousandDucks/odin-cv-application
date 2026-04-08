import '../sidebar/sidebar.css'
import Education from '../sidebar/education'
import ListFormSection from '../sidebar/listFormSection'


function Sidebar({ cvData, setCvData, educationList, setEducationList, employmentList, setEmploymentList, projectsList, setProjectsList}) {

    const handleChange = (e) => {
        const { id, value } = e.target;

        setCvData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className='sidebar-container'>
            <header className="sidebar-header">
                CV Builder
            </header>

                
                <form>
                    <section className='personal-info'>
                        <div className='subheader'>Personal Information</div>

                        <div className='personal-form'>
                            <div className='form-item'>
                                <label htmlFor="fullName">Full Name</label>
                                <input className='form-input' type="text" id="fullName" value={cvData.fullName} onChange={handleChange}/>
                            </div>
                            <div className='form-item'>
                                <label htmlFor='phone'>Phone Number</label>
                                <input className='form-input' type='tel' id='phone' value={cvData.phone} onChange={handleChange}></input>
                            </div>
                            <div className='form-item'>
                                <label htmlFor='email'>Email</label>
                                <input className='form-input' type='email' id='email' value={cvData.email} onChange={handleChange}></input>
                            </div>
                        </div>
                    </section>

                    
                    <section className='education-info'>
                        <div className='subheader'>Education</div>
                        <Education 
                            educationList={educationList} 
                            setEducationList={setEducationList} 
                        />

                        <div className='subheader'>Employment</div>
                        <ListFormSection
                            list={employmentList}
                            setList={setEmploymentList}
                            title="Experience"
                            fields={[
                            { label: "Company", key: "company" },
                            { label: "Role", key: "role" },
                            { label: "Location", key: "location" },
                            { label: "Start Date", key: "startDate", type: "month" },
                            { label: "End Date", key: "endDate", type: "month" },
                            { label: "Description", key: "description", type: "textarea" },
                            ]}
                        />

                        <div className='subheader'>Projects</div>
                        <ListFormSection
                            list={projectsList}
                            setList={setProjectsList}
                            title="Projects"
                            fields={[
                                { label: "Project Name", key: "projectName" },
                                { label: "Description", key: "description", type: "textarea" },
                                { label: "Skills", key: "skills" },
                                { label: "Start Date", key: "startDate", type: "month" },
                                { label: "End Date", key: "endDate", type: "month" },
                            ]}
                        />

                        
                    </section>

                </form>

        </div>
    )
}

export default Sidebar;