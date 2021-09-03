import React from 'react'
import Navbar from '../Components/Navbar'
import { Slider } from '../Components/Slider'
import TopBanner from '../Components/TopBanner'
 

function Home() {
    return (
        <div>
            <TopBanner/>
            <Navbar/>
          <Slider/>
        </div>
    )
}

export default Home
