import ChatBox from '@/components/chatbox/ChatBox'
import Navbar from '@/components/Navbar'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function App() {
  return (
    <Box>
      <aside style={{
        width: "200px",
        paddingLeft: "15px",
        marginLeft: "15px",
        height: "100vh",
        float: "left",
        backgroundColor: "lightgray",
      }}
      >
        <Navbar/>
      </aside>

      <aside style={{
        width: "400px",
        paddingLeft: "15px",
        marginLeft: "15px",
        height: "100vh",
        float: "right",
        backgroundColor: "white",
        borderLeft: "1px solid background: #F7FAFC "
      }}
      >
       <ChatBox/> 
      </aside>
    </Box>
  )
}
