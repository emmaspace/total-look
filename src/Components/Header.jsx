import React from 'react';
import LogoLet from '../assets/Logo-totallook.png';
import ShoppingCart from '../assets/shop.png';
import Logout from '../assets/logout.png'
import '../Styles/header.css'



const Header = () => {
    return (
        <section id = 'header'>
            <img src = {LogoLet} alt  = 'Total-Look-Logo' id='logo'/>
            <button className='btn-login'>Login / Welcome "user name"</button>
            <button className='btn-shopping-cart'> <img className='bag-cart' src={ShoppingCart} alt= 'cart'/></button>
            <button className='btn-logout' > <img className='img-logout' src={Logout}  alt= 'logout'/></button>

            
        </section>
    )
}

export default Header
