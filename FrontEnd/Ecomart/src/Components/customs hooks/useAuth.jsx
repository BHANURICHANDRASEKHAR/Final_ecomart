import React,{useState,useEffect} from 'react'
import { AuthActions } from '../../../Redux-store/Centralstore/reduers'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
export default function useAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userauth = useSelector(state => state.userslice.userauth);
    console.log("userauth is ", userauth);
    
    const [auth, setauth] = useState(userauth);
  
    useEffect(() => {
      setauth(userauth);
    }, [userauth]); 
    function logout()
    {
    Cookies.remove('user')
    dispatch(AuthActions.logout())
    navigate('/')
    }
  return [auth,logout]
}
