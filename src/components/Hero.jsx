import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'
const Hero = () => {
  useGSAP(()=>{
    gsap.to("#hero",{opacity:1, delay:2})

    gsap.to("#cta",{opacity:1, delay:2, y:-50})
  },[])

  const handleVideoSrc= ()=>{
    if(window.innerWidth<760)
      setVideoSrc(heroVideo)
    else
      setVideoSrc(heroVideo)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrc);

    return ()=>{
      window.removeEventListener('resize',handleVideoSrc)
    }
  },[])

  const [videoSrc, setVideoSrc]= useState(window.innerWidth <760 ? smallHeroVideo:heroVideo)
  return (
    <section className='w-full nav-height bg-black'>
      <div className='w-full h-5/6 flex-col flex-center'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        
        <div className='w-9/12 md:w-10/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>      
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='text-xl font-normal'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero