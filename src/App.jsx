
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

  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar cvData={cvData} setCvData={setCvData} />
      </aside>

      <main className="live-preview">
        <Preview cvData={cvData} />
      </main>
    </div>
  )
}
export default App;