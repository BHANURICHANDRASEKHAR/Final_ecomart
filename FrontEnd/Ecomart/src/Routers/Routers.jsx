import React,{useEffect,useState} from 'react'
import Home from '../Components/Home/Home'
import Login from '../Components/Home/login/Login'
import Signup from '../Components/Home/login/Signup'
import Account from '../Components/UserAccount/Account'
import Cart from '../Components/Cart/Cart'
import { Route,Routes } from 'react-router-dom'
import NavBars from './NavBars'
import Workingonit from '../Components/UserAccount/Workingonit'
import Footer from '../Components/Footer'
import NoPageFound from '../Components/NoPageFound'
import { Spin } from 'antd'
import AddUserAddress from '../Components/UserAccount/Right/AddUserAddress'
import UserInfo from '../Components/UserAccount/Right/UserInfo'
import { useSelector } from 'react-redux'
import { AuthActions } from '../../Redux-store/Centralstore/reduers'
const Shop=React.lazy(()=>import('../Components/shop/Shop'))
export default function Routers() {
  // const userauth = useSelector(state => state.userslice.userauth);
  // console.log("userauth is ", userauth);
  
  // const [auth, setauth] = useState(userauth);

  // useEffect(() => {
  //   setauth(userauth);
  // }, [userauth]); 
  return (
   <React.Fragment>
   <NavBars/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/account' element={<Account/>}>
   <Route path='personalinformation' element={<UserInfo/>}/>
   <Route path='myorders' element={<Workingonit/>}/>

   <Route path='manageaddress' element={<AddUserAddress/>}/>
   <Route path='cuppons' element={<Workingonit/>}/>
   <Route path='review' element={<Workingonit/>}/>
   <Route path='notifications' element={<Workingonit/>}/>
   <Route path='wishlist' element={<Workingonit/>}/>

   </Route>
   <Route path='/usercart' element={<Cart/>}/>
    <Route path='/shop' element={<React.Suspense fallback={<h5>...loading</h5>}><Shop/></React.Suspense>}/>
   <Route path='/login' element={<Login/>}/>
   
   <Route path='/signup' element={<Signup/>}/>
    
   <Route path='*' element={<NoPageFound status='404' title='404' subtitle="Sorry, the page you visited does not exist."/>}/>
   </Routes>
   
   </React.Fragment>
  )
}
