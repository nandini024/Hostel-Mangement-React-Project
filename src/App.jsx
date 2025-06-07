
import React from 'react'
import NavbarComp from './Components/Navbar/NavbarComp'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Rooms from './Pages/Rooms/rooms'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/about'
import Login from './Pages/LoginPage/login'
import SignupPage from './Pages/SignupPage/SignupPage'
import OwnerDashBoard from './Components/Dashboards/OwnerDashBoard/OwnerDashBoard'
import UserDashBoard from './Components/Dashboards/UserDashBoard/UserDashBoard'
import Footer from './Components/Footer/Footer'
import AddRoom from './Components/Dashboards/OwnerDashBoard/AddRoom/AddRoom'
import UpdateMess from './Components/Dashboards/OwnerDashBoard/UpdateMess/UpdateMess'
import PostNotice from './Components/Dashboards/OwnerDashBoard/PostNotice/PostNotice'
import ViewRooms from './Components/Dashboards/OwnerDashBoard/ViewRooms/ViewRooms'
import ViewMess from './Components/Dashboards/OwnerDashBoard/UpdateMess/ViewMess/ViewMess'


const App = () => {
  return (
    <div>
      
    <NavbarComp/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/ownerDashboard' element={<OwnerDashBoard/>}>

      <Route path='add_room' element={<AddRoom/>}/>
      <Route path='update_mess' element={<UpdateMess/>}/>
      <Route path='view_messmenu' element={<ViewMess/>}/>
      <Route path='post_notice' element={<PostNotice/>}/>
      <Route path='view_rooms' element={<ViewRooms/>}/>
      </Route>
      <Route path='/userDashboard' element={<UserDashBoard/>}/>

      
    </Routes>
    <Footer/>

    </div>
  )
}

export default App
