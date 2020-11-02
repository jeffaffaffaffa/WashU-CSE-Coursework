import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class FunBackground extends Component {
  render () {
    return (
        <div>
            <ParticlesBg type="circle" bg={true} />
        </div>
    )
  }
}

//this is getting out of hand...
//https://reactjsexample.com/react-particles-animation-background-component/

export default FunBackground;