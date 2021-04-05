import Sidebar from "./Sidebar";
import './App.css';
import {React,useEffect,useState} from "react";
import Chat from "./Chat"
import Pusher from "pusher-js"
import axios from "./axios";

function App() {
const [messages,setMessages]=useState([]);
  useEffect(() => {
   axios.get("/messages/sync").then((res)=>{
     
     setMessages(res.data);
   });
  }, [])

useEffect(() => {
  var pusher = new Pusher('466c9bfd96a08ebc7e13', {
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('messages');
  channel.bind('inserted', function(newMessage) {
    
    setMessages([...messages,newMessage]);
  });
  return ()=>{
    channel.unbind_all();
    channel.unsubscribe();
  };
  
}, [messages]);
console.log(messages);

  return (
    <div className="app">
     <div className="appbody">
     <Sidebar />
     <Chat  
     messages={messages}
     />
     </div>
     
    </div>
  );
}

export default App;
