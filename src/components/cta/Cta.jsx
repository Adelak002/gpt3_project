import React from 'react'
import "./cta.css"



const Cta = () => {
  return (
    <div className='gpt3__cta section__padding'>
      <div className='gpt3__cta-content'>
        <p> Request Early Access to Get Started</p>
        <h3> Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='.gpt3__cta-but'>
        <button type='button'style={{color: "white" , minWidth:"150px", padding: "0.5rem 1rem", cursor: "pointer", border:"none", outline: "none", lineHeight: "30px",background: "black", fontSize:"18px", fontFamily: "var(--font-family)", fontWeight: "700", borderRadius: "40px"}}>Get Started</button>
      </div>
      
    </div>
  )
}

export default Cta
