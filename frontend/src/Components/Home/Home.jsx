import React from 'react'
import data from "../../data"
import "./Home.scss";
import MasonryLayout from '../Feed/PinterestLayout/MasonryLayout'

function Home({data}) {
 
  return (
  
    <div className='home'>
      
      {/* {
         data.map((src)=>{
           <h1>{src.id}</h1>
         })
        }   */}
        {/* <div className='data'>
        {
        data.map((user)=>(
          <div className='img'>
          <img src={user.img}/>
          </div>
        ))
      }
        </div> */}
        <MasonryLayout  data={data}/>
   
    </div>
  )
}

export default Home
