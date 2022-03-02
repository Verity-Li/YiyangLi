import React, { useEffect }  from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical'
import './Profile.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


export default function Profile(){
    useEffect(()=>{
        gsap
        .to('.profile-arrow',
        {
            opacity:0,
            y:50,
            ease:'power3.out',
            duration:0.75,
            scrollTrigger:{
                trigger:'#take-me-out',
                start:'-90% center',
                end:'40% 60%',
                // scrub:true,
                once:true,
                toggleActions:'play complete none none',
                // markers:true,
            }},
        )

    },[])

    return(
        <div className='all-profile-container'>
            
            <div className='profile-container'>
                    <div className='profile-details'>
                        <div className='colz'>
                            <span className='colz-icon'>
                                <a href='https://www.instagram.com/verity_laufey/'>
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href='https://www.behance.net/veritylaufada1'>
                                <i class="fa fa-behance"></i>
                                </a>
                            </span>
                        </div>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                Hi👋<br/>I’m Yiyang Li 
                            </span>
                        </div>
                        <div className='profile-details-role'>
                                <span className='primary-text'>
                                    <Typical 
                                    loop={Infinity} 
                                    steps={[
                                        "a UI/UX Designer",
                                        2200,
                                        "a Part-Time Illustator",
                                        2200,
                                        "a Proud Feminist",
                                        2200,
                                        "a Rookie FrontEnd Developer",
                                        2200,
                                        ]}/>
                                </span>
                            <span className='profile-short-introduction'>
                                    Extract the best of technology to enhance human-experience
                            </span>
                            
                        </div>
                        <div className='profile-options'>
                            <span className='profile-options-button'>
                                <a href='YiyangLi Resume.pdf' download='Yiyang Li Resume.pdf'>
                                    <button className='highlighted-btn'> My Resume</button>
                                </a>
                            </span>
                        </div>

                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
                    
            </div>
            <div className='profile-arrow'>
                <div className='profile-arrow-asset'></div>
            </div>

        </div>
        
    )

}