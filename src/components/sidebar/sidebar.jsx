import '../sidebar/sidebar.css'


function Sidebar() {
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
                                <label htmlFor="full-name">Full Name</label>
                                <input className='form-input' type="text" id="full-name"/>
                            </div>
                            <div className='form-item'>
                                <label htmlFor='phone-num'>Phone Number</label>
                                <input className='form-input' type='tel' id='phone-num'></input>
                            </div>
                            <div className='form-item'>
                                <label htmlFor='email'>Email</label>
                                <input className='form-input' type='email' id='email'></input>
                            </div>
                        </div>
                    </section>

                    
                    <section>
                        
                    </section>

                </form>

        </div>
    )
}

export default Sidebar;