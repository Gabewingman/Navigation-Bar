import React from "react"
import './Header.css'
import Logo from '../assets/2.png'

const Header = () => {
  return (
    <div>
      <header class="header">
        <a href="/" class="logo">
          <img src={Logo} width="100px" alt="Logo" />
        </a>
        <nav class="navbar">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
