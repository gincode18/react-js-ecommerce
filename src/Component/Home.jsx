import React from 'react'
import './../Style/Homes.css'
import home from './../Images/animedoodle2.gif'
import Product from './Product';
import shirt1 from "./../Images/animeshirt1.webp"
import shirt3 from "./../Images/animeshirt2.webp"

import shirt2 from "./../Images/animeshirt3.webp"
import shirt4 from "./../Images/animeshirt4.webp"
import shirt5 from "./../Images/animeshirt5.webp"
import shirt6 from "./../Images/animeshirt6.webp"

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
        <img className='home_image' src={home} alt='banner'></img>

   
    <div className='home_row'><Product title="Game Of Deaths Hoodie (Oversize Drop-Shoulder)" image={shirt1} price={29.9}  rating={5}></Product><Product title="One Piece Lamp Skull" image={shirt2} price={29.9}  rating={4}></Product></div>
    <div className='home_row'><Product title="
Ultimate Susanoo: Kamui Shuriken Hoodie (Oversize Drop-Shoulder)" image={shirt3} price={29.9}  rating={3}></Product><Product title="Yuta Cosplay Bomber Jacket" image={shirt4} price={29.9}  rating={5}></Product><Product title="7th Hokage Hoodie (Orange)" image={shirt5} price={29.9}  rating={4}></Product></div>
    <div className='home_row'><Product title="Itadori Jujutsu Uniform" price={12.9} image={shirt6}  rating={5}></Product></div>

    </div>
    </div>
  )
}

export default Home ;
