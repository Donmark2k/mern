import './App.css'
import IndexPage from './components/indexPages'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      {/* < IndexPage /> */}

    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
    </div>

  )
}

export default App
