import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Profile from './Componets/Profile/Profile'
import SingIn from './Componets/SingIn/SingIn'
import SingUp from './Componets/SingUp/SingUp'
import Home from './Componets/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Singup' element={<SingUp />}></Route>
          <Route path='/Singin' element={<SingIn />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
