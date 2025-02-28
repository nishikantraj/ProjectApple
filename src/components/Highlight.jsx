import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
const Highlight = () => {
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0
    })
    gsap.to('.link',{opacity:1, y:0, duration:1, stagger:0.25})
  },[])
  return (
    <section className='w-screen h-full common-padding bg-zinc overflow-hidden'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt="watcImage" className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt="right"  className='ml-2 mt-1'/>
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlight