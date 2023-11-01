import './App.css'
import IndexPage from './pages/indexPages'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './components/loginPage'
import Layout from './components/layout';
import RegisterPage from './components/register';
import axios from "axios";
import { UserContextProvider } from './components/userContext';


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
      {/* < IndexPage /> */}
    <UserContextProvider>
    <Routes>
      <Route path="" element={<Layout />}>

      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      </Route>

    </Routes>
    </UserContextProvider>
    </div>

  )
}

export default App
