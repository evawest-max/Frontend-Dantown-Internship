import ChatBox from '@/components/chatbox/ChatBox'
import Navbar from '@/components/Navbar/Navbar'
// import Navbar from '@/components/Navbar'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function App() {
  return (
    <Box>
      <aside style={{
        width: "240px",
        height: "900px",
        float: "left",
        backgroundColor: "white",
      }}
      >
        <Navbar/>
      </aside>

      <aside style={{
        width: "400px",
        height: "900px",
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
