import React from 'react';
import '../../Styles/header.css';



const Header = () => {
    return (
        <section id = 'header'>
            <img src = "/Logo-totallook.png" alt  = 'Total-Look-Logo' id='logo'/>
            <button className='btn-login'>Login / Welcome "user name"</button>
            <button className='btn-shopping-cart'> <img className='bag-cart' src="/shop.png" alt= 'cart'/></button>
            <button className='btn-logout' > <img className='img-logout' src="/logout.png" alt= 'logout'/></button>

            
        </section>
    )
}

export default Header
