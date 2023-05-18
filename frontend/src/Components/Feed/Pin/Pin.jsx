import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pin.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import { Save } from '../../Contextapi/Contextapi';
function Pin({pin}) {
  const {save,setSave}=useContext(Save);
  const navigate=useNavigate();
  const[savebtn,Setsavebtn]=useState(true);
  const handleSave=()=>{
    console.log(savebtn);
    if(savebtn)
     { 
     setSave([...save,pin]) 
     Setsavebtn(!save)
  } 
  else{
     const remove=save.filter((item)=>{
        
         return(item.id!=pin.id);
        
     })
     setSave(remove)
     Setsavebtn(save)
  }
  console.log(savebtn);
  }
  
  return (
    <div className='pin' >
       <img src={pin.img} onClick={()=>navigate(`/pin/${pin.id}`)}/>
        <div className='option'>
          <div className='save'>
            <button className={`${savebtn?"btn":"savedbtn"}`} onClick={handleSave}>
              <span>
              {
                `${savebtn?"save":"saved"}`
              }
              </span>
              </button>
             {/* <div className='icons'>
              <ShareIcon className='icon'/>
              <MoreHorizIcon className='icon'/>
            </div>  */}
          </div>
        </div>
    </div>
  )
}

export default Pin
