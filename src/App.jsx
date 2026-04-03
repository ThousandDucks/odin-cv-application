
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

  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar 
        cvData={cvData} 
        setCvData={setCvData} 
        educationList={educationList} 
        setEducationList={setEducationList} 
        />
      </aside>

      <main className="live-preview">
        <Preview cvData={cvData} educationList={educationList} />
      </main>
    </div>
  )
}
export default App;