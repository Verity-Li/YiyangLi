import React,{ useEffect } from 'react';
import Profile from './Profile';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import './Home.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function Home(){



    return(
        <div className='home-container'>
            <Header/>
            <Profile/>
            <Portfolio/>
        </div>
    )
}