import React from 'react';
import'./App.css'
import {Blog,Header,Possibility,WhatGPT3, Features, Footer} from "./containers";
import { Cta,Brand,Navbar } from './components';

const app = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default app
