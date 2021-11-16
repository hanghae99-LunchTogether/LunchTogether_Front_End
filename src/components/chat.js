import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import socketIOClient from "socket.io-client";

const Chat = () => {
  const [currentSocket, setCurrentSocket] = useState();

  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost"));
  }, []);

  return (
      <div>
        {currentSocket?(<ChatInput socket = {currentSocket} />):(
            <Loading></Loading>
        ) }
        
      </div>
    
  )
};

export default Chat;