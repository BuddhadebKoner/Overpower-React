import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import FeedSection from '../../Components/FeedSection/FeedSection'
import AboutCard from '../../Components/Aboutcard/Aboutcard'
import Feedback from '../../Components/Feedback/Feedback'
import Mypost from '../../Components/Mypost/Mypost'
import Newsfeed from '../../Components/Newsfeed/Newsfeed'
import Currentprojectpage from '../Currentprojectpage/Currentprojectpage'

export default function Home() {
  return (
    <>
      <Hero />
      <Currentprojectpage/>
    </>
  )
}
