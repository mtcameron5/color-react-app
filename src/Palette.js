import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css'
// import ColorBox from './ColorBox'

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (

      <div className='Palette' >
        {/* Navbar goes here */}
        <div className='Palette-colors' >
          {colorBoxes}
        </div>
        {/* footer eventually */}
      </div >
    )
  }
}

