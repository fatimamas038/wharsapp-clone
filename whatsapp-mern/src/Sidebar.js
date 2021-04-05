import React from 'react'
import "./Sidebar.css";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import profile from "./images/profile.jpg";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat"

function Sidebar() {
    return (
        <div className="sidebar">
          
         <div className="sidebar-header">
         <Avatar src={profile} />
         <div className="sidebar-hRight">
         <IconButton>
         <DonutLargeIcon />
             </IconButton>
             <IconButton>
             <MessageIcon />
             </IconButton>
             
             <IconButton>
             <MoreVertIcon />
             </IconButton>
             
             </div>        
         </div> 
         <div className="sidebar-search">
         <div className="searchC">
         <SearchIcon />
<input type="text" placeholder="" />
         </div>
         

         </div> 
         <div className="schats">
          <SidebarChat />   
          <SidebarChat />
          <SidebarChat />
         </div>
        </div>
    )
}

export default Sidebar


