import React from 'react';
function Header(){
    return(
        
    <div className='Header'>
        
    <div className='left_side'>
    <img src="https://flowbite.com/docs/images/logo.svg"/>
    <h1>GeekFood</h1>
    </div>
    <div className='write_side'>
    <ul>
        <li>Home</li>
        <li>Quote</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>

    </ul>
    </div>
    <div>
        <button id='button'>Get Started</button>
    </div>
    </div>
    );
}

export default Header;