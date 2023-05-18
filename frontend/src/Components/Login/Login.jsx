import React from 'react'
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { useEffect } from 'react';
function Login() {
    function handleResponse(response){
        console.log("token"+response.credential);
        }
        useEffect(()=>{
          /*global google */
          google.accounts.id.initialize({
            client_id:"1097093950385-b8415b99uki6pdjs7f86gvjrglnntlod.apps.googleusercontent.com",
            callback:handleResponse(),
          });
          google.accounts.id.renderButton(
            document.getElementById("singleDiv"),
            {
              theme:"outline",size:"large"
            }
          )
        },[])
  return (
    <div>
      <div className='singleDiv'></div>
    </div>
  )
}

export default Login
