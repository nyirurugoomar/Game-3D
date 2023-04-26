import React from 'react'
import CurrentGame from './CurrentGame'
import Hero from './Hero'
import NewsLetter from './NewsLetter'
import Projects from './Projects'
import Tools from './Tools'
import VideoCapture from './VideoCapture'

function Home() {
  return (
    <>
    <Hero/>
    <CurrentGame/>
    <VideoCapture/>
    <Tools/>
    <Projects/>
    <NewsLetter/>
    
    
    </>
  )
}

export default Home