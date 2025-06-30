
import React from 'react'
import NavbarComp from './Components/Navbar/NavbarComp'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Rooms from './Pages/Rooms/Rooms'
import Contact from './Pages/Contact/Contact'
import About from "./Pages/About/About"
import Login from './Pages/LoginPage/Login'
import SignupPage from './Pages/SignupPage/SignupPage'
import OwnerDashBoard from './Components/Dashboards/OwnerDashBoard/OwnerDashBoard'
import UserDashBoard from './Components/Dashboards/UserDashBoard/UserDashBoard'
import Footer from './Components/Footer/Footer'
import AddRoom from './Components/Dashboards/OwnerDashBoard/AddRoom/AddRoom'
import UpdateMess from './Components/Dashboards/OwnerDashBoard/UpdateMess/UpdateMess'
import PostNotice from './Components/Dashboards/OwnerDashBoard/PostNotice/PostNotice'
import ViewRooms from './Components/Dashboards/OwnerDashBoard/ViewRooms/ViewRooms'
import ViewMess from './Components/Dashboards/OwnerDashBoard/UpdateMess/ViewMess/ViewMess'
import UserViewRooms from './Components/Dashboards/UserDashBoard/UserViewRooms/UserViewRooms'
import UserViewNotices from './Components/Dashboards/UserDashBoard/UserViewNotices/UserViewNotices'
import UserViewMessMenu from './Components/Dashboards/UserDashBoard/UserViewMessMenu/UserViewMessMenu'
import OwnerBooking from './Components/Dashboards/OwnerDashBoard/OwnerBookings/OwnerBooking'


const App = () => {
  return (
    <div>
      
    <NavbarComp/>
    <Routes>
       <Route path="/" element={<Home />} />
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
      <Route path='owner_booking' element={<OwnerBooking/>}/>
      </Route>
      <Route path='/userDashboard' element={<UserDashBoard/>}>
       <Route path='user_view_rooms' element={<UserViewRooms/>}/>
      <Route path='user_view_messmenu' element={<UserViewMessMenu/>}/>
      <Route path='user_view_notice' element={<UserViewNotices/>}/>
      <Route path='user_view_notice' element={<UserViewNotices/>}/>
      
      {/* <Route path='view_rooms' element={<ViewRooms/>}/> */}

      </Route>

      
    </Routes>
    {/* <Footer/> */}

    </div>
  )
}

export default App
