import React from 'react'

const ChatBubble = ({ from, text }) => (
  <div
    className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl mb-3 break-words whitespace-pre-wrap  ${
      from === 'kiya'
        ? 'bg-zinc-800 text-white self-start rounded-bl-none'
        : 'bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 text-black self-end rounded-br-none'
    }`}
  >
    {text}
  </div>
)

export default ChatBubble
