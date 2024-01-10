import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'
import reacticons,{images} from '../icons';
export default function Footer() {
  return (
    <React.Fragment>
  
 <footer class="footer-distributed container">
 
       <div class="footer-left">
 
       
         <img src={images.logo} style={{width:'200px',height:'130px',margin:'0'}}/>
         <p class="footer-links">
         <Link to='/'>Home</Link>
         <Link to='/account'>Account</Link>
         <Link to='/shop'>Shop</Link>
         <Link to='/cart'>Cart</Link>
         </p>
 
         <p class="footer-company-name">Ecomart © 2023</p>
       </div>
 
       <div class="footer-center">
 
         <div>
           <i class="fa fa-map-marker"></i>
           <p><span>dhiwancheruvu</span>rajahmundry,ap</p>
         </div>
 
         <div>
           <i class="fa fa-phone"></i>
           <p>+91939988487</p>
         </div>
 
         <div>
           <i class="fa fa-envelope"></i>
           <p><a href="mailto:support@company.com">bhanurichandu@gmail.com</a></p>
         </div>
 
       </div>
 
       <div class="footer-right">
 
         <p class="footer-company-about">
           <span>About the company</span>
           Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
         </p>
 
         <div class="footer-icons">
 
           <a href="#"><reacticons.facebook/></a>
           <a href="#"><reacticons.facebook/></a>
           <a href="#"><reacticons.linkedin/></a>
           <a href="#"><reacticons.github/></a>
 
         </div>
 
       </div>
 <div className='paymentlogos'>
 <img src={images.payp}></img>
 <img src={images.pp}></img>
 <img src={images.sc}></img>
 
 
 </div>
     </footer>
    </React.Fragment>
   )
}
