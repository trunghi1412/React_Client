import React from 'react'
import { NavLink } from 'react-router-dom'
import imgFig1  from './images/imageFig1'
import imgFig2 from './images/imageFig2'
import imgFig3 from './images/imageFig3'
import './cart.css'


const Cart = () => {
    return (
        <div className='shopping-cart'>
          <div className='box'>
            {
              imgFig1.map(img => (<img style={{height: '300px', width: '300px'}} src={img} alt=''></img>))
            }
              
              <div className='content'>
                <h3>
                  Shaman King - Wonder Statue
                </h3>
                <span className='price'>5.550.000</span>
                <span className='quantity'>qty : 2</span>

              </div>
          </div>

          <div className='box'>
            {
                imgFig2.map(img => (<img style={{height: '350px', width: '350px'}} src={img} alt=''></img>))
            }   
              
              <div className='content'>
                <h3>
                 JoJo - Kakyoin Noriaki
                </h3>
                <span className='price'>4.150.000</span>
                <span className='quantity'>qty : 1</span>

              </div>
          </div>

          <div className='box'>
          {
                imgFig3.map(img => (<img style={{height: '300px', width: '300px'}} src={img} alt=''></img>))
            }   
              
              <div className='content'>
                <h3>
                  Falslander - Hemet Nethel
                </h3>
                <span className='price'>8.650.000</span>
                <span className='quantity'>qty : 1</span>

              </div>
          </div>
          <div className='total'></div>
        </div>
    )
}

export default Cart