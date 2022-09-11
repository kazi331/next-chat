import React from 'react'
import ChatBody from './ChatBody'
import ChatNav from './ChatNav'
import InputBox from './InputBox'


function Chat() {
  return (
    <div className='chat'>
      <ChatNav />
      <ChatBody />
      <InputBox />
    </div>
  )
}

export default Chat