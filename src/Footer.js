import React from 'react'
import PB from './component/pics/P&B.png'
import './Footer.css'

function Footer() {

    const Address = "Vadavalli, Coimbatore-641041, TamilNadu"
  return (
    <div className='Footer'>
        <div className='Footer-start'>

        <div className='container-fluid' id='Footer-full'>
        </div>

            <div className='row'>

            <div className='col-sm'>
                    <div className='Footer-Bar'>
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='Footer-logo'>

                    <div className='Footer-logo-margin-gap'>
                    </div>

                        <img id='Footer-img' src={PB} alt='Company_logo' width={100} height={100} />
                    </div>
                    <div className='Footer-logo-1margin-gap'>
                    </div>

                    <div className='Footer-Description'>
                    </div>
                    <div className='Footer-des'>
                    <div className='Hor-line-right'>
                    </div>
                    <hr className="hr hr-blurry" />
                        <p id='Footer-pg'>
                            We are Coimbatore Start-Up Company from Vadavalli
                        </p>
                    </div>
                </div>

                    <div className='col-sm'>
                    <h4>ADDRESS</h4>
                       <ul className='list-group list-group'>
                           <li className='list-group-item'><i className='bi bi-geo-alt'></i>{Address}</li>
                           <li className='list-group-item'><i className='bi bi-envelope-at'> email</i></li>
                           <li className='list-group-item'><i className='bi bi-phone'></i>phone</li>
                       </ul>
                    </div>

                    <div className='col-sm'>
                        <h4>COMPANY</h4>
                        <ul className='list-group list-group'>
                            <li className='list-group-item'><i className='bi bi-building'></i>Home</li>
                            <li className='list-group-item'><i className='bi bi-building'></i>Our Company</li>
                            <li className='list-group-item'><i className='bi bi-building'></i>FAQS</li>
                            <li className='list-group-item'><i className='bi bi-building'></i>Contact Us</li>
                            <li className='list-group-item'><i className='bi bi-building'></i>Career</li>
                        </ul>
                    </div>

                    <div className='col-sm'>
                        <h4>FOLLOW US</h4>
                        <ul className='list-group list-group'>
                            <li className='list-group-item'><a href='https://www.facebook.com/prasanth.bujji.18' target='blank' id='aheff'><i className='bi bi-facebook'></i>Facebook</a></li>
                            <li className='list-group-item'><a href='https://web.whatsapp.com/' target='blank' id='aheff'><i className='bi bi-whatsapp'></i> Whatsapp</a></li>
                            <li className='list-group-item'><a href='https://www.instagram.com/prasanth__1_0/' target='blank' id='aheff'><i className='bi bi-instagram'></i> Instagram</a></li>
                            <li className='list-group-item'><a href='https://twitter.com/i/flow/login' target='blank' id='aheff'><i className='bi bi-twitter'></i> Twitter</a></li>
                        </ul>
                        <div className='Footer-gap-bw-1st-rw'>
                        </div>
                    </div>

                    <div className='col-sm'>
                        <div className='Footer-bar-last'>
                        </div>
                    </div>
                
            </div>

            <div className='row'>
                {/** pic abou partner */}
            </div>

            <div className='container-fluid' id='Footer-full-bottom'>
        </div>

        </div>
    </div>
  )
}

export default Footer
