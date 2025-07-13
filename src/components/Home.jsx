import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode } from 'react-icons/fa'
import EmanuelImg from '/image.jpg'

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}

function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    // Ping backend to wake it up
    fetch(`${import.meta.env.VITE_API_URL}/ping`)
      .then((res) => res.json())
      .then((data) => console.log('Ping success:', data.message))
      .catch((err) => console.error('Ping failed:', err))
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-6 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src={EmanuelImg}
                  alt="Emanuel"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 via-transparent to-red-500/20" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <FaCode className="text-black text-sm" />
            </div>
            <div
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce"
              style={{ animationDelay: '0.5s' }}
            >
              <FaLaptopCode className="text-white text-sm" />
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-extrabold">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent animate-gradient">
                  Emanuel Molla
                </span>
              </h1>
              <h2 className="text-lg md:text-2xl text-zinc-300 font-medium">
                <TypewriterText text="Backend Developer · Data Engineer" delay={80} />
              </h2>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Building robust APIs and efficient data pipelines. Passionate about solving real-world problems with{' '}
              <span className="text-yellow-400 font-semibold">clean code</span> and
              <span className="text-red-400 font-semibold"> scalable systems</span>.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-yellow-400">3+</div>
                <div className="text-xs text-zinc-400">Years Experience</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-orange-400">IBM</div>
                <div className="text-xs text-zinc-400">Certified</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-red-400">5+</div>
                <div className="text-xs text-zinc-400">Languages</div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                {
                  icon: <FaGithub />,
                  href: 'https://github.com/Emanuel-DevX',
                },
                {
                  icon: <FaLinkedin />,
                  href: 'https://www.linkedin.com/in/emanuel-molla',
                },
                {
                  icon: <FaEnvelope />,
                  href: 'mailto:emanuelmolla@outlook.com',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`text-2xl p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a
                href="/resume.pdf"
                download={'Emanuel_Molla_Resume.pdf'}
                className="px-4 py-3 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black font-semibold rounded-full hover:font-bold hover:from-yellow-300 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
