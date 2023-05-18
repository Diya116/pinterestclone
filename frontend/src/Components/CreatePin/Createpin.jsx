import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./createpin.scss"
function Createpin({data,setData}) {
  
    const[title,setTitle]=useState("");
    const[about,setAbout]=useState('');
    const[destination,Setdestination]=useState('');
    const[category,setCategory]=useState("");
    const[field,setField]=useState("");
    const[imageAsset,setImageAsset]=useState();
    const[wrongimg,setWrongimg]=useState(false);
    const navigate=useNavigate();
    const uploadImage=(e)=>{
        const selectedFile=e.target.files[0];
        if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff'|| selectedFile.type === 'image/htm') { 
            setWrongimg(false)
            setImageAsset(selectedFile.name);
        } 
        else
        {
         setWrongimg(true);
        
         
        }
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
        console.log("title",title);
        console.log("about",about);
        console.log("destination",destination);
        console.log("category",category);
        console.log("field",field);
        console.log("image",imageAsset);
        setData([...data,{
            id:13,
            img:"https://i.pinimg.com/236x/68/34/ca/6834ca4eeea1d2f81865569126bdbdf9.jpg",
            heading:about,
            description:category
        }])
       
    }
    
  return (
    <div className="createpin">
    {
        field&&(
            <p className="message">fill all fiels</p>
        )
       

    }
    <form onSubmit={handlesubmit} >
     <div className="wrapper">
        <div className='main'>
           
            <div className='uploadimg'>
              {wrongimg&&<p>wrong image type</p>}
              {!imageAsset?(
                <label>
                    <div className='content'>
                        <CloudUploadIcon/>
                        <div>Click to upload</div>
                        
                    </div>
                    <p>Recommendation:Use high-quality.jpg files less than 20MB</p>
                    <input type="file"name="upload-image" onChange={uploadImage} className='fileupload'/>

                </label>
              ):(
                <div className='imgcontainer'>
                
                    <img src={imageAsset.name}alt="image"/>
                    <h1>{imageAsset.name}</h1>
                    <button type="button">
                       
                    </button>
                    </div>

              )}
            
           </div>
           <div className='description'>
          
              <button className='save' onClick={handlesubmit}>save</button>
              <div className='inputfield'>
                <input className='input title'type="text" placeholder='Add your title ' onChange={(e)=>setTitle(e.target.value)}/>
                <input className='input info'type="text" placeholder='Tell everyone what your Pin is about ' onChange={(e)=>setAbout(e.target.value)}/>
                <input className='input info'type="text" placeholder='what people can see in your pin' onChange={(e)=>setCategory(e.target.value)}/>
             
                </div>
                
             </div>
        </div>
     </div>
     </form>
    </div>
  )
}

export default Createpin
