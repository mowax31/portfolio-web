import React from 'react'
import { Route, Link } from 'react-router-dom'
import Head from '../../Head'
import Maps from './Maps'
import Footer from '../../Footer'


function Location() {
  return (
    <div className='Location'>
        <header>
            <Head />
        </header>


        <main>
        <Route>
        <div className='location-gap'>
        </div>
            <div className='Loc-Heading'>
                <h1>LOCATION</h1>
            </div>
            <div className='Location-1gap'>
            </div>
            <div className='loc-gap-left'>
            </div>
            <div className='Loac-info-wrap'>
                <div className='loc-info'>
                    <h1>P & B Assocaties and Construction</h1>
                </div>
                <div className='loac-comp-info'>
                    <div className='loc-cal'>
                    <i className='bi bi-calendar3'></i>
                    <span>
                        All Day
                    </span>
                    <p>
                        From <span>8:00 am</span> to <span>9:00pm</span>
                    </p>
                    </div>
                    <div className='loc-location'>
                    <i className='bi bi-pin-map'></i>
                    <span>
                        <p>
                            Vadavalli, Coimbatore, Tamil Nadu
                        </p>
                    </span>
                    </div>
                    <div className='loc-phno'>
                    <i className='bi bi-phone'></i>
                    <span>
                        <p>
                            +91 9047877777
                        </p>
                        <p>
                            Prasanth Rajan
                        </p>
                    </span>
                    </div>
                </div>
            </div>

            <div className='Loac-google-map-iframe'>
            <div className='i1fr'>      
            </div>
            <Maps />
            <div className='i2fr'>
            </div>
            </div>


        </Route>
        </main>

        <footer>
            <Footer />
        </footer>

        </div>
  )
}

export default Location