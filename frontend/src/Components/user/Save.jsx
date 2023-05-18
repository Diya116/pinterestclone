import React, { useContext } from 'react'
import Pin from '../Feed/Pin/Pin'
import { Save } from '../Contextapi/Contextapi.jsx'
import MasonryLayout from '../Feed/PinterestLayout/MasonryLayout';

function Saved() 
{
  const {save,setSave}=useContext(Save);
    console.log( "saved",save)
  return (

    <div>
        
    {/* {
        
     save.map((item)=>(
        <Pin pin={item} />
     ))
    
    } */}
   < MasonryLayout data={save}/>
    </div>

  )
}

export default Saved;
