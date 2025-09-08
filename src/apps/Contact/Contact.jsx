import { useState, useEffect, useRef } from 'react'

const API_URL = import.meta.env.VITE_API_URL

import ChatBubble from './ChatBubble'
import { FaPaperPlane } from 'react-icons/fa'
import ContactCard from './ContactCard'

const Contact = () => {
  const [conversation, setConversation] = useState(() => {
    const saved = localStorage.getItem('contactConversation')
    return saved ? JSON.parse(saved).conversation : []
  })

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('contactConversation')
    return saved ? JSON.parse(saved).formData : { name: '', email: '', message: '', consent: '' }
  })

  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem('contactConversation')
    return saved ? JSON.parse(saved).step : 'intro'
  })

  const [isSubmitted, setIsSubmitted] = useState(() => {
    const saved = localStorage.getItem('contactConversation')
    return saved ? JSON.parse(saved).isSubmitted : false
  })

  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  // Load on mount
  useEffect(() => {
    if (conversation.length === 0 && step === 'intro') {
      addKiyaMessage("Hey 👋 I'm Emanuel. Let's get to know each other.", 1000)
      setTimeout(() => addKiyaMessage("What's your name?", 1200), 2000)
      setStep('name')
    }
  }, [])

  // Save on change
  useEffect(() => {
    localStorage.setItem('contactConversation', JSON.stringify({ conversation, formData, step, isSubmitted }))
  }, [conversation, formData, step, isSubmitted])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversation])

  const addMessage = (from, text) => {
    setConversation((prev) => [...prev, { from, text }])
  }
  const addKiyaMessage = (text, delay = 500) => {
    setConversation((prev) => [...prev, { from: 'kiya', text: '...' }]) // typing indicator
    setTimeout(() => {
      setConversation((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { from: 'kiya', text } // replace "..." with real msg
        return copy
      })
    }, delay)
  }

  const handleSubmit = async (payload) => {
    try {
      const res = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload ?? formData),
      })
      if (res.ok) {
        const yes = new Set(['y', 'yes', 'yeah', 'yep', 'true', '1'])
        const msg = yes.has((payload?.consent ?? formData.consent).trim().toLowerCase())
          ? '✅ Your message has reached me. I’ll get back to you soon.'
          : '✅ Your message has reached me. Thanks for reaching out!'
        addKiyaMessage(msg)
        setIsSubmitted(true)
      } else {
        addKiyaMessage('⚠️ Oops! Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      addKiyaMessage('⚠️ Network error, please try again later.')
    }
  }

  const handleUserInput = () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    addMessage('user', userMessage)

    if (step === 'name') {
      setFormData((f) => ({ ...f, name: userMessage }))
      addKiyaMessage(`Nice to meet you, ${userMessage}! What’s your email?`)
      setStep('email')
    } else if (step === 'email') {
      setFormData((f) => ({ ...f, email: userMessage }))
      addKiyaMessage('Got it. What message would you like to send me?')
      setStep('message')
    } else if (step === 'message') {
      setFormData((f) => ({ ...f, message: userMessage }))
      addKiyaMessage('Thanks! Do you want me to contact you back? (yes/no)')
      setStep('consent')
    } else if (step === 'consent') {
      const normalized = userMessage.trim().toLowerCase()
      const next = { ...formData, consent: normalized }
      setFormData(next)
      handleSubmit(next) // ← submit the updated data
      setStep('done')
    }


    setInput('')
  }
  const handleClearChat = () => {
    localStorage.removeItem('contactConversation')
    setConversation([])
    setFormData({ name: '', email: '', message: '', consent: '' })
    setStep('intro')
    setIsSubmitted(false)

    // Restart intro
    setTimeout(() => {
      addKiyaMessage("Hey 👋 I'm Emanuel. Let's get to know each other.")
      setTimeout(() => addKiyaMessage("What's your name?"), 800)
      setStep('name')
    }, 100)
  }

  return (
    <div className="flex h-full w-full relative">
      {/* Sidebar */}
      <div className="w-80 hidden   p-4 lg:flex flex-col transition-all duration-300 sticky top-30 self-start">
        <ContactCard />
      </div>

      <div className="flex flex-col h-full pt-2  relative w-full max-w-4xl mx-auto ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-yellow-400">Chat with Emanuel</h2>
          <button
            onClick={handleClearChat}
            className="px-2 py-1 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-md text-sm"
          >
            Clear Chat
          </button>
        </div>

        {/* Conversation */}
        <div className="flex-1 flex flex-col mb-6">
          {conversation.map((msg, i) => (
            <ChatBubble key={i} from={msg.from} text={msg.text} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input box */}

        <div className="sticky mx-auto bottom-0 md:w-[90%]  flex gap-2 mt-2">
          <input
            type="text"
            disabled={isSubmitted || step === 'done'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUserInput()}
            className="flex-1 px-3 py-2 rounded-lg bg-black/50 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Type here..."
          />
          <button
            onClick={handleUserInput}
            disabled={isSubmitted || step === 'done'}
            className="px-4 flex items-center gap-2 py-2 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black rounded-lg font-semibold disabled:opacity-80 disabled:cursor-not-allowed"
          >
            Send
            <FaPaperPlane className="rotate-12" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
