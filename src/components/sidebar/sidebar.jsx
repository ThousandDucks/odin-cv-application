import '../sidebar/sidebar.css'


function Sidebar({cvData, setCvData}) {
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

                    
                    <section className='persona-info'>
                        <div className='subheader'>Education</div>
                    </section>

                </form>

        </div>
    )
}

export default Sidebar;