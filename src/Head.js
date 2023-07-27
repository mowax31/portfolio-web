import React from 'react'
import pb from './component/pics/pb.png'
import './Head.css'
import { NavbarBrand } from 'react-bootstrap'

function Head() {


  return (
    <div className='Head'>
    <nav className='Head-nav'>
      <div className='head-brand'>
      <NavbarBrand>
        <img src={pb} alt='' height={30} width={30}/><span id='span-head'>P&B Construction and Assocaties </span> 
      </NavbarBrand>
      </div>
      <div className='uli-hed cos'>
      <ul className='uil-Head'>
        <li id='liui'><i className="bi bi-envelope-at-fill" />PandBAssociates2020@gmail.com
        </li>
        <li id='liui'><i className="bi bi-person-rolodex" />+91 958-268-1234</li>
      </ul>
      </div>
      <div className='recaction-cmp'>
        <ul className='iocoko'>
          <li id='recuili'><i className="bi bi-house" />Home</li>
          <li id='recuili'><i className="bi bi-buildings-fill" />Company</li>
          <li id='recuili'><i className="bi bi-person-lines-fill" />About Us</li>
          <li id='recuili'><i className="bi bi-geo" />Location</li>
          <li id='recuili'><i className="bi bi-telephone" />Contact</li>
        </ul>
      </div>
    </nav>

    </div>
  )
}

export default Head