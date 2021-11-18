import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Nav.css';

const Nav = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="nav">
           <div className="container">
               <div className="menu">
                   <NavLink activeClassName="selected" to="/Shop">Shop</NavLink>
                   <NavLink activeClassName="selected" to="/order">Order Review</NavLink>
                   <NavLink activeClassName="selected" to="/Inventory">Manage Inventory</NavLink>
                   {user.email ? <NavLink activeClassName="selected" to="/Login">
                       <button className="btn btn-primary btn-sm" onClick={logOut}>Logout ({user.email})</button>
                       </NavLink> :
                   <NavLink activeClassName="selected" to="/Login">Login</NavLink>}
                   
               </div>
           </div>
        </div>
    );
};

export default Nav;