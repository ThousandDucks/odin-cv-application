
import './App.css'
import Sidebar from "./components/sidebar/sidebar"
import Preview from "./components/live-preview/preview"

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar></Sidebar>
      </aside>

      <main className="live-preview">
        <Preview></Preview>
      </main>
    </div>
  )
}
export default App;