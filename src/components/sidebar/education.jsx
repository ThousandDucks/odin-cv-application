
import '../sidebar/education.css'
import { useState } from "react";

function Education( { educationList, setEducationList }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    grade: "",
    location: "",
    });

    function handleSubmit() {
        setEducationList([...educationList, formData]);
        setFormData({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            grade: "",
            location: "",
        });
        setShowForm(false);
    }


    return (
        <div className='button-form-container'>
            <div className='empty-education'>Enter Education Information</div>
            
            {showForm && (<div className='education-form-container'>
                <div className='form-item'>
                    <label htmlFor='school-name'>School name</label>
                    <input value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} className='form-input' id='school-name'></input>
                </div>

                <div className='form-item'>
                    <label htmlFor='degree-title'>Degree Title</label>
                    <input className='form-input' id='degree-title'></input>
                </div>

                <div className='date-container'>
                    <div className='form-item'>
                        <label htmlFor='start-date'>Start Date</label>
                        <input className='form-input' id='start-date' type='date'></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='end-date'>End Date</label>
                        <input className='form-input' id='end-date' type='date'></input>
                    </div>
                </div>

                <div className='form-item'>
                    <label htmlFor='grade'>Grade Achieved</label>
                    <input className='form-input' id='grade'></input>
                </div>

                <div className='form-item'>
                    <label htmlFor='location-degree'>Location</label>
                    <input className='form-input' id='location-degree'></input>
                </div>

                <div className='education-button-container'>
                    <button type="button" className='close-button' onClick={() => setShowForm(false)}>Close</button>
                    <button type="button" className='submit-button' onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>)}
            
            

            {!showForm && (
                <button type="button" className='add-button' onClick={() => setShowForm(true)}>+ Add Education</button>
            )}
            
        </div>
    )
}


export default Education;