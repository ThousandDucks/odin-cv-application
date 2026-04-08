
import { useState } from "react";

function ListFormSection({ list, setList, title, fields }) {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const initialFormData = fields.reduce((acc, field) => {
    acc[field.key] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit() {
    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = formData;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, formData]);
    }

    setFormData(initialFormData);
    setShowForm(false);
  }

  function handleEdit(index) {
    setFormData(list[index]);
    setEditIndex(index);
    setShowForm(true);
  }

  function handleDelete(index) {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);

    if (editIndex === index) {
      setEditIndex(null);
      setShowForm(false);
    }
  }

  return (
    <div className='button-form-container'>
      {list.length === 0 ? (
        <div className='empty-education'>Enter {title} Information</div>
      ) : (
        <div className='education-summary'>
        {list.map((item, index) => (
          <div key={index} className='education-card'>
            <div className='education-card-info'>
              {title === "Experience" ? (
                <>
                  <p><strong>{item.role}</strong></p>
                  <p>{item.company}</p>
                  <p>{item.startDate || ''} {item.endDate ? `- ${item.endDate}` : ''}</p>
                </>
              ) : title === "Projects" ? (
                <>
                  <p><strong>{item.projectName}</strong></p>
                  <p>{item.startDate || ''} {item.endDate ? `- ${item.endDate}` : ''}</p>
                </>
              ) : (
                <>
                  <p><strong>{item.school}</strong></p>
                  <p className='education-card-info-summary'>
                    {item.degree}, {item.startDate} - {item.endDate}
                  </p>
                </>
              )}
            </div>

            <div className='section-card-actions'>
              <svg onClick={() => handleEdit(index)} className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Edit</title>
                <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
              </svg>
              <svg onClick={() => handleDelete(index)} className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Delete</title>
                <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      )}

      {showForm && (
      <div className='education-form-container'>
        {fields.map(f => {
          if (f.key === "startDate" || f.key === "endDate") return null;

          return (
            <div className='form-item' key={f.key}>
              <label htmlFor={f.key}>{f.label}</label>

              {f.type === "textarea" ? (
                <textarea
                  id={f.key}
                  className='form-input'
                  value={formData[f.key]}
                  onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                />
              ) : (
                <input
                  type={f.type || 'text'}
                  id={f.key}
                  className='form-input'
                  value={formData[f.key]}
                  onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                />
              )}
            </div>
          );
        })}

        {fields.some(f => f.key === "startDate" || f.key === "endDate") && (
          <div className='date-container'>
            <div className='form-item'>
              <label htmlFor='startDate'>Start Date</label>
              <input
                type='month'
                id='startDate'
                className='form-input'
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>
            <div className='form-item'>
              <label htmlFor='endDate'>End Date</label>
              <input
                type='month'
                id='endDate'
                className='form-input'
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </div>
          </div>
        )}

        <div className='education-button-container'>
          <button type="button" className='close-button' onClick={() => setShowForm(false)}>Close</button>
          <button type="button" className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )}

      {!showForm && (
        <button
          type="button"
          className='add-button'
          onClick={() => {
            setFormData(initialFormData);
            setEditIndex(null);
            setShowForm(true);
          }}
        >
          + Add {title}
        </button>
      )}
    </div>
  );
}

export default ListFormSection;