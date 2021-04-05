import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
       <Avatar />  
       <div className="sidebarChat-info">
        <h2>name</h2>
        <p>last message</p>
       </div>   
        </div>
    )
}

export default SidebarChat
