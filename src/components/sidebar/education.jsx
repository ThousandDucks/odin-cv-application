
import '../sidebar/education.css'
import { useState } from "react";

function Education( { educationList, setEducationList }) {
    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    grade: "",
    location: "",
    });

    function handleSubmit() {
    if (editIndex !== null) {
        const updatedList = [...educationList];
        updatedList[editIndex] = formData;
        setEducationList(updatedList);
        setEditIndex(null);
    } else {
        setEducationList([...educationList, formData]);
    }

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

    function handleEdit(index) {
        setFormData(educationList[index]); 
        setEditIndex(index);               
        setShowForm(true);                
    }

    function handleDelete(index) {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);

        if (editIndex === index) {
            setEditIndex(null);
            setShowForm(false);
        }
    }

    return (
        <div className='button-form-container'>
            {educationList.length === 0 ? (
                <div className='empty-education'>Enter Education Information</div>
            ) : (
                <div className='education-summary'>
                    {educationList.map((edu, index) => (
                        <div key={index} className='education-card'>
                            <div className='education-card-info'>
                                <p><strong>{edu.school}</strong></p>
                                <p className='education-card-info-summary'>{edu.degree}, {edu.startDate} - {edu.endDate}</p>
                            </div>
                            <div className='education-card-image'>
                                <svg onClick={() => handleEdit(index)} className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
                                <svg onClick={() => handleDelete(index)} className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {showForm && (<div className='education-form-container'>
                <div className='form-item'>
                    <label htmlFor='school-name'>School name</label>
                    <input value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} className='form-input' id='school-name'></input>
                </div>

                <div className='form-item'>
                    <label htmlFor='degree-title'>Degree Title</label>
                    <input value={formData.degree} onChange={(e) => setFormData({ ...formData, degree: e.target.value })} className='form-input' id='degree-title'></input>
                </div>

                <div className='date-container'>
                    <div className='form-item'>
                        <label htmlFor='start-date'>Start Date</label>
                        <input value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} className='form-input' id='start-date' type='month'></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='end-date'>End Date</label>
                        <input value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} className='form-input' id='end-date' type='month'></input>
                    </div>
                </div>

                <div className='form-item'>
                    <label htmlFor='grade'>Grade Achieved</label>
                    <input value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className='form-input' id='grade'></input>
                </div>

                <div className='form-item'>
                    <label htmlFor='location-degree'>Location</label>
                    <input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className='form-input' id='location-degree'></input>
                </div>

                <div className='education-button-container'>
                    <button type="button" className='close-button' onClick={() => setShowForm(false)}>Close</button>
                    <button type="button" className='submit-button' onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>)}
            
            

            {!showForm && (
                <button type="button" className='add-button'
                onClick={() => {
                setFormData({
                    school: "",
                    degree: "",
                    startDate: "",
                    endDate: "",
                    grade: "",
                    location: "",
                });
                setEditIndex(null); 
                setShowForm(true);
                }}
                >+ Add Education</button>
            )}
            
        </div>
    )
}


export default Education;