import './App.css'
import IndexPage from './pages/indexPages'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './components/loginPage'
import Layout from './components/layout';


function App() {

  return (
    <div className="App">
      {/* < IndexPage /> */}

    <Routes>
      <Route path="" element={<Layout />}>

      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      </Route>

    </Routes>
    </div>

  )
}

export default App
