import React, { useContext } from 'react'
import "./User.scss"
import Saved from './Save.jsx';
function User() {
    
    
  return (
    <div className='user'>
       <div className='userinfo'>
        <div className='username'>
            Diya shah
        </div>
        <div className='userimg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"/>
        </div>

        <div className='e-mail'>
        @diya21becem065
        </div>
        <div className='following'>
            0 following
        </div>
       </div>
         <div className='sharoption'>
            <button className='btn'>
                share
            </button>
            <button className='btn'>
                Edit profile
            </button>
         </div>
         <div className='options'>
            
         
            <div>
                <span>save</span>
                <Saved/>  
            </div>
         </div>
    </div>
  )
}

export default User
