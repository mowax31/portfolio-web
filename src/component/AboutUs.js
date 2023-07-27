import React from 'react'
import './AboutUs.css'
import iconpic from './pics/home-ban.jpg'

function AboutUs() {
  return (
    <div className='AboutUs'>
    <div className='glz glx'>
        <div className='Abtu'>
            <h1 className='Abtusa'>About Us</h1>
            </div>
            <div className='row'>
            <div className='col-sm'>
            <h3 id='h1-ico-baco'>  Welcome To P&B Assocaties and Construction </h3>
            </div>
            <div className='row'>
            <div className='col-sm'>
            <p className='pageman'>
            The Brand “Sree Daksha” has become the talk of the Town in Coimbatore and its surroundings in recent years.
            The reality has not come overnight.
            The evolution dates back to 2007, the year in which Daksha was born.
            Like any child, it had to face the initial hurdles to become a recognized builder in real estate sector.
            To attain a remarkable success, it had to toil like anything.
            Becoming a promoter is not that easy.
            Commendable construction experience paved the way to launch in the beginning projects with limited dwelling units. 
            The staunch support of our technical, sales and marketing personnel made us to launch bigger projects coupled with the trust extended even now by our loyal customers.
            </p>
            </div>
            <div className='col-sm'>
            <img id='iconpic' src={iconpic} alt='company-alt-logo' width={450} height={450} />
            </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs