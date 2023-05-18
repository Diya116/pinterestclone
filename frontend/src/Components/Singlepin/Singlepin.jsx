import React, { useContext,useState } from 'react'
import "./single.scss"
import MasonryLayout from '../Feed/PinterestLayout/MasonryLayout'
import {useParams} from "react-router-dom";
import { Save } from '../Contextapi/Contextapi';

function Singlepin({data}) {
  const { id } = useParams();
  const {save,setSave}=useContext(Save);
  const[savebtn,Setsavebtn]=useState(true);
  console.log(id);
  const newdata=data.filter((item)=>item.id==id); 
  console.log(newdata);
  console.log(useContext(Save));
  const handleSave=(e)=>{
   
    if(savebtn)
    { 
    setSave([...save,newdata[0]]) 
    Setsavebtn(!save)
 } 
 else{
    const remove=save.filter((item)=>{
       
        return(item.id!=data.id);
       
    })
    setSave(remove)
    Setsavebtn(save)
 }
  };
   
    console.log(save);
  return (
    <div>  
    <div className='wrapperr'>
     <div className='mainn'>
      <div className='imgcontainer'>
        <img src={newdata[0].img} alt="img"/>
        </div>  
    
    <div className='infocontainer'>
        <div className='maininfo'>
            <div >
            <h1>{newdata[0].heading}</h1>
            <p>{newdata[0].description}</p> 
            </div>
            <div>
            <button className={`${savebtn?"btn":"savedbtn"}`} onClick={handleSave}>
              <span>
              {
                `${savebtn?"save":"saved"}`
              }
              </span>
              </button>
            </div>
        </div>
 
    <div className='userinfo'>
        <div className='userimg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" alt="img"/>
        </div>
        <div>
            vraj shah
        </div>
        <button className='followbtn'>
            follow
        </button>
    </div>
  <div className='comments'>
    comments:
  </div>
  <div className='commentinput'>
     <input type="text" placeholder='Add a comment..' className='search'/>
  </div>

    </div>
    
    </div>
   
    </div>
    <div className='heading'>More Like this</div>
    <MasonryLayout data={data}/>
    
    </div>
  )
}

export default Singlepin;
