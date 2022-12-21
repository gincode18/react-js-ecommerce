import React from 'react'
import './Checkout.css'
import doodel from "./animedoodle3.gif"
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
<div className='checkout_left'>
    <img className='checkout_add' src={doodel}></img>

<div>
<h2 className='checkout_title'>Shopping List</h2>
</div>
    </div>
    <div className='checkout_right'>
<Subtotal></Subtotal>
    </div>
    </div>
  )
}

export default Checkout