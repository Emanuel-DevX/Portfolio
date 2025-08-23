import { useState, useEffect, useRef } from 'react'

const API_URL = import.meta.env.VITE_API_URL

import ChatBubble from './ChatBubble'

const Contact = () => {
  const [conversation, setConversation] = useState([])
  const [step, setStep] = useState('intro')
  const [formData, setFormData] = useState({ name: '', email: '', message: '', consent: '' })
  const [input, setInput] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    // start conversation on mount if new
    if (conversation.length === 0) {
      addMessage('kiya', "Hey 👋 I'm Kiya. Let’s get to know each other.")
      addMessage('kiya', 'What’s your name?')
      setStep('name')
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversation])

  const addMessage = (from, text) => {
    setConversation((prev) => [...prev, { from, text }])
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        if (formData.consent === 'yes') {
          addMessage('kiya', '✅ Your message has reached me. I’ll get back to you soon.')
        } else {
          addMessage('kiya', '✅ Your message has reached me. Thanks for reaching out!')
        }
        setIsSubmitted(true)
      } else {
        addMessage('kiya', '⚠️ Oops! Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      addMessage('kiya', '⚠️ Network error, please try again later.')
    }
  }

  const handleUserInput = () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    addMessage('user', userMessage)

    if (step === 'name') {
      setFormData((f) => ({ ...f, name: userMessage }))
      addMessage('kiya', `Nice to meet you, ${userMessage}! What’s your email?`)
      setStep('email')
    } else if (step === 'email') {
      setFormData((f) => ({ ...f, email: userMessage }))
      addMessage('kiya', 'Got it. What message would you like to send me?')
      setStep('message')
    } else if (step === 'message') {
      setFormData((f) => ({ ...f, message: userMessage }))
      addMessage('kiya', 'Thanks! Do you want me to contact you back? (yes/no)')
      setStep('consent')
    } else if (step === 'consent') {
      setFormData((f) => ({ ...f, consent: userMessage.toLowerCase() }))
      handleSubmit()
      setStep('done')
    }

    setInput('')
  }

  return (
    <div className="flex flex-col h-full w-full p-4">
      {/* Conversation */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {conversation.map((msg, i) => (
          <ChatBubble key={i} from={msg.from} text={msg.text} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input box */}
      {!isSubmitted && step !== 'done' && (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUserInput()}
            className="flex-1 px-3 py-2 rounded-lg bg-black/50 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Type here..."
          />
          <button
            onClick={handleUserInput}
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black rounded-lg font-semibold"
          >
            Send
          </button>
        </div>
      )}
    </div>
  )
}

export default Contact
