
import './App.css'
import Sidebar from "./components/sidebar/sidebar"
import Preview from "./components/live-preview/preview"
import { useState } from 'react'

function App() {
  const [cvData, setCvData] = useState({
    fullName: "",
    phone: "",
    email: ""
  });

  const [educationList, setEducationList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [employmentList, setEmploymentList] = useState([]);


  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar 
          cvData={cvData} 
          setCvData={setCvData} 
          educationList={educationList} 
          setEducationList={setEducationList}
          projectsList={projectsList}
          setProjectsList={setProjectsList}
          employmentList={employmentList}
          setEmploymentList={setEmploymentList}
        />
      </aside>

      <main className="live-preview">
        <Preview 
          cvData={cvData} 
          educationList={educationList} 
          projectsList={projectsList} 
          employmentList={employmentList} 
        />
      </main>
    </div>
  )
}
export default App;