
import React from 'react'
import { useFrame, document, Window } from 'react-frame-component';
import Iframe from 'react-iframe'
import { Component } from 'react';
import './Map.css'
import {Map, GoogleApiWrapper} from 'google-maps-react';

const Gmap = () => {
  <Iframe>
  <Map
  google ={this.props.google}
  style ={{width:"640px", height:"320px"}}
  zoom = {10}
  initialCenter={{
    lat: '11.025826',
    lng: '76.905681'
  }}
/>
</Iframe>


const { document, window } = useFrame();
  
return null

}

class Maps extends Component {

  render() {
    return (
      <div className='Map'>
      {/*
      <Iframe 
        url={<Gmap />}
        width='640px'
        height='320px'
        display='block'
        position='relative'
      />
      */}
      <Gmap />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZIi9swtMe_OZJJnaIeM8HtEywU7xVpLY"
})(Maps)


