import React from 'react'
import {useState} from "react"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"


const Navbar = () => {
  const [toggleMenu, SetToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
         <img src={logo} alt="logo" />
        </div>
      <div className='gpt3__navbar-links__container'>
      <p> <a href="#home">Home</a> </p>
       <p> <a href="#wgpt3">What is GPT3?</a> </p>
       <p> <a href="#possibility">Open AI</a> </p>
       <p> <a href="#features">Case studies</a> </p>
       <p> <a href="#blog">LIbrary</a> </p>
      </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
       {
        toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => SetToggleMenu(false)}/>
        :<RiMenu3Line color='#fff' size={27} onClick={() => SetToggleMenu(true)}/>
       }
        {toggleMenu &&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links '>
            <p> <a href="#home">Home</a> </p>
       <p> <a href="#wgpt3">What is GPT3?</a> </p>
       <p> <a href="#possibility">Open AI</a> </p>
       <p> <a href="#features">Case studies</a> </p>
       <p> <a href="#blog">LIbrary</a> </p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
      </div>
          </div>

        )}

      </div>
     

    </div>
  )
} 

export default Navbar
