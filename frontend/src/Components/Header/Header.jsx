import React from 'react'
import logo from "../../assets/logo.png"
import "./Header.scss"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Userinfo from "../user/User.jsx"
function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='navbar'>
                <div className='left-navbar'>
                    <div className='logo'>
                        <img src={logo} onClick={()=>navigate("/")}/>
                    </div>
                    <div className='option'>
                        <div className='Home' onClick={()=>navigate("/")}>
                            Home
                        </div>
                        <div className='create'>
                            <div className='dropdown'>
                                <span>create</span>
                                <div className='dropdown'>
                                    <ArrowDropDownIcon />
                                </div>
                            </div> 
                            <div class="dropdown-content">
                                <span   onClick={()=>navigate("/createpin")}>Create pin</span>
                                <span>Create idea pin</span>
                                
                            </div> 
                        </div>
                    </div>
                </div>
                <div className='search'>
                    <SearchIcon />
                    <input type="text" class="searchterm" placeholder="search...." />

                </div>
                <div className='right-navbar'>
                    <div className='notification'>
                        <NotificationsIcon />
                    </div>
                    <div className='message'>
                        <MessageIcon />
                    </div>
                    <div className='userr'onClick={()=>navigate("/userinfo")} >
                        <AccountCircleIcon/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
