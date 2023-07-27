import React from 'react'
import AboutUs from './AboutUs'
import './pics/pppp.jpg'
import './Home.css'


function Home() {
  return (
    <div className='Home'> 
    <header>
      <div className='imro'>
        <div className='mkmmkmk kikiki'>
        <div className='Content'>
        <div className='homjs-hd'>
        <h1 id='jill'>P&B Assocaties</h1>
        </div>
        <div className='homjs-cnt'>
        <div className='homjsser'>
        <a href='#' id='a-href-ik'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          Our Services
        </a>
        </div>
        <div className='homjs-ord'>
          <a href='#' id='abcd-href'>
            Order
          </a>
        </div>
        </div>
          
        </div>

        </div>
      </div>
    </header>
    <main>
      <AboutUs />
    </main>
    <footer>

    </footer>   
    </div>
  )
}

export default Home
