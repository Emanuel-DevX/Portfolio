import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaTrash } from 'react-icons/fa'

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminToken')
        const res = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        setMessages(data.messages || [])
      } catch (err) {
        console.error('Error fetching messages:', err)
      }
    }
    fetchMessages()
  }, [])

  const deleteMessage = async (id) => {
    try {
      const token = localStorage.getItem('adminToken')
      await fetch(`${import.meta.env.VITE_API_URL}/messages/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      setMessages((prev) => prev.filter((m) => m._id !== id))
    } catch (err) {
      console.error('Error deleting message:', err)
    }
  }

  return (
    <div className="bg-black/50 rounded-2xl md:p-8 p-2  overflow-auto h-full">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
        <FaEnvelope className="text-yellow-400" /> <span>Messages</span>
      </h3>
      {messages.length === 0 ? (
        <p className="text-zinc-400">No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg._id}
              className="md:p-4 p-2 relative bg-black/40 border border-zinc-700 rounded-lg flex justify-between items-start"
            >
              <div className="flex-1 w-full ">
                <p className="font-extrabold text-xl ">
                  {msg.name} ({msg.email})
                </p>
                <div className='flex gap-2 text-xs'>

                <p>
                  {new Date(msg.createdAt).toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p>|</p>
                <p>
                  Contact back ?{' '}
                  <span className="font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
                    {msg.contactConsent ? 'Yes' : 'No'}
                  </span>
                </p>
                  </div>
                  <p className="text-zinc-400 mt-1 break-words whitespace-pre-wrap   ">{msg.message}</p>
              </div>
              <button
                onClick={() => deleteMessage(msg._id)}
                className="text-red-400 hover:text-red-300 ml-4 absolute right-2"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Messages
