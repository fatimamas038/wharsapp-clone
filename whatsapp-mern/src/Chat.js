import {React,useState} from 'react'
import "./Chat.css"
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import profile from "./images/profile.jpg";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import axios from "./axios";

function Chat(props) {
    const [input,setInput]=useState("");
      const sendMessage=async (e)=>{
          e.preventDefault();
         await axios.post("/messages/new",{
              message:input,
              name:"app",
              time:"curr time",
              received:false,
          });
          setInput("");
      };

    return (
        <div className="chat">
        <div className="chat-header">
         <Avatar src={profile} />
         <div className="chat-headerInfo">
         <h3>name</h3>   
         <p>Last seen at</p>
         </div>
         <div className="chat-headerRight">
         <IconButton>
         <SearchIcon />
             </IconButton>
             <IconButton>
             <AttachFileIcon />
             </IconButton>
             
             <IconButton>
             <MoreVertIcon />
             </IconButton>
         </div>
         </div>
         <div className="chat-body">


       {props.messages.map(message=>(
        <p className={`message ${message.received && "chat-receiver"}`}>
    <span className="chatName">{message.name}</span>
    {message.message}
    <span className="chatTime">{message.time}</span>
     </p>
       ))
       } 

      

 </div>
<div className="chat-footer">
<EmojiEmotionsIcon />
<form>
    <input value={input}
    onChange={e=>setInput(e.target.value)}
        placeholder="Type a message"
        type="text"
    ></input>
    <button onClick={sendMessage}
    type="submit">
        send</button>
    

</form>
<MicIcon />
</div>
            
         
        </div>

    )
}

export default Chat
