import React, { Component } from 'react'
import Typical from 'react-typical'

//emoji dictionary from 
//https://www.npmjs.com/package/emoji-dictionary

const emoji = require("emoji-dictionary");

class CoolText extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hey there!', 1000, 'Welcome to our social media site!', 1000, 'We are glad you are here!', 1000, '-Jeff and Eddie, devs ' + emoji.getUnicode("heart_eyes"), 1000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

//inspired by:
//https://reactjsexample.com/react-animated-typing-in-400-bytes-of-javascript/

export default CoolText;