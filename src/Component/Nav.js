import React, { useState, useEffect } from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = ({onhandleSubmit}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const[search, setSearch] = useState();

 
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(search);
    onhandleSubmit(search)
  }
  

  return (
    <div>
      <div className='header'>
        <div className='top-header'>
          <div className='icon'>
            <MdLocalShipping/>
          </div>
          <div className='info'>
            <p>Free shipping when shopping up to $1000</p>
          </div>
        </div>
        <div className='mid-header'>
          <div className='logo'>
            <img src="/image/logo.webp" alt="logo" />
          </div>
          <div className='search_box'>
            <input type='text' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={handleSubmit}><AiOutlineSearch /></button>
            <>
            
            </>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <div className='icon'>
              <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className='icon'>
                <FiLogIn />
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
              
            </div>
          )}
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
                isAuthenticated ?
                <>
                <div className='icon'>
                <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <h2>{user.email}</h2>
                </div>
                
               
                </>
                :
                <>
                 <div className='icon'>
                  <CiUser />
                  </div>
                  <div className='info'>
                    <p> please login</p>
                  </div>
                </>
            }
          </div>
          <div className='nav'>
          <ul>
            <li><Link to = '/' className='link'>Home</Link></li>
            <li><Link to= '/shop' className='link'>Shop</Link></li>
            <li><Link to = '/collection' className='link'>Collection</Link></li>
            
            <li><Link to ='/contact' className='link'>Contact</Link></li>
          </ul>
          <div className='offer'>
          <p>flat 10% over all iphone</p>
        </div>
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Nav;
