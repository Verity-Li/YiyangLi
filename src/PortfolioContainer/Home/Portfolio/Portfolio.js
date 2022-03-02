import React, { useEffect } from 'react';
import './Portfolio.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


export default function Portfolio(){
    useEffect(()=>{
        gsap
        .from('#take-me-out',
        {
            opacity:0,
            y:60,
            ease:'power3.out',
            duration:1.5,
            delay:0.1,
            scrollTrigger:{
                trigger:'#take-me-out',
                start:'top 65%',
                end:'40% 60%',
                // scrub:true,
                once:true,
                toggleActions:'play none none none',
                // markers:true
            }},
        )

        gsap.
        from('#cili',
        {
            opacity:0,
            y:60,
            ease:'power3.out',
            duration:1.5,
            delay:0.1,
            scrollTrigger:{
                trigger:'#take-me-out',
                start:'center 65%',
                end:'100% 60%',
                // scrub:true,
                once:true,
                toggleActions:'play none none none',
                // markers:true
            }},
        )

        gsap.from('.title-img',
        {
            opacity:0,
            x:-400,
            y:-60,
            rotate:-20,
            ease:'power3.out',
            duration:0.1,
            scrollTrigger:{
                trigger:'#take-me-out',
                start:'-60% center',
                end:'40% 60%',
                // scrub:true,
                once:true,
                toggleActions:'play none none none',
                // markers:true
            }
            

        })
        gsap.to('.title-img',
        {
            opacity:1,
            x:0,
            y:-60,
            rotate:0,
            ease:'power3.out',
            duration:1.5,
            scrollTrigger:{
                trigger:'#take-me-out',
                start:'-60% center',
                end:'40% 60%',
                // scrub:true,
                once:true,
                toggleActions:'play none none none',
                // markers:true
            }},
        )

        
    },[])


    return(
        <div className='all-work-container'>
            <div className='title'>
                <div className='title-img'></div>
            </div>
            <div className='work-container'>
                        <div className='work-card' id='take-me-out'>
                            <div className='take-me-out'>
                                <img></img>
                            </div>
                            <div className='work-card-text'>
                                <div className='work-time-stamp'>
                                    June 2021 - Nov 2021
                                </div>
                                <div className='work-title'>
                                TAKE ME OUT
                                </div>
                                <div className='work-client'>
                                    Individual Project
                                </div>
                                <div className='work-explaination'>
                                Created a generative-art driven installation,
                                where queer language are used as an approach to expressing themselves as well as forming relationship with queer communities.
                                </div>
                                <ul className='work-tags'>
                                    <li>
                                        INSTALLATION
                                    </li>
                                    <li>
                                        LGBTQ+
                                    </li>
                                    <li>
                                        CREATIVE CODING
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>

                        <div className='work-card' id='cili'>
                            <div className='work-card-text'>
                                <div className='work-time-stamp'>
                                    June 2021 - Nov 2021
                                </div>
                                <div className='work-title'>
                                TAKE ME OUT
                                </div>
                                <div className='work-client'>
                                    Individual Project
                                </div>
                                <div className='work-explaination'>
                                Created a generative-art driven installation,
                                where queer language are used as an approach to expressing themselves as well as forming relationship with queer communities.
                                </div>
                            </div>
                            <div className='cili'>
                                <img></img>
                            </div>
                        </div>

            </div>

        </div>
        
    )
}