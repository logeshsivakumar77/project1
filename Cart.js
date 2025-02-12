import React from 'react'
import './prot.css'
import b from'../Asset/b.jpeg'


const Cart = (props) => {
 const {image,name, dispeic,actuall_p,discrip} =props
  return (
    <div className='prot'>
        <img src={image}alt="" />
        <div className='discrip'>
            <h1>{name}</h1>
            <p className='price'>{dispeic}<span>{props.actuall_p}</span></p>
            <p className='para'>{discrip }</p>
             <button className='btn'>vist</button>
        </div>
        
    </div>
    
  )
}
export default Cart;