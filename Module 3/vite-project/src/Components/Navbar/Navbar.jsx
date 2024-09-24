import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul style={{display:'flex', listStyle:'none', width:'100%', justifyContent:'space-around'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>


        <li>
          
          <Link to='products'>Products</Link>
        </li>
      </ul>
    </div>
  );
};
