import React from 'react'
import { useLocation } from 'react-router';

import { LinkStyled, NavList } from './Nav.styled';

const Navs = () => {

    const location=useLocation();
 const Links=[{to:'/',text:'Home'},{to:'/star',text:'Starred'}];


    return (
        <div>
            <NavList>
                {
                    Links.map(item=> <li key={item.to}>
                        <LinkStyled to={item.to} className={item.to===location.pathname?'active':''}>{item.text}</LinkStyled>
                    </li>)
                }
                
            </NavList>
        </div>
    );
}




     


export default Navs
