import { FaChess, FaBook, FaDumbbell, FaGuitar, FaFutbol } from 'react-icons/fa'
const HobbiesSection = () => {
  const hobbies = [
    {
      name: 'Chess',
      icon: <FaChess className="text-3xl text-[#879289]" />,
      status: 'Current main hobby',
      description: "My strategic thinking playground. Always up for a game - it's like coding but with pieces!",
      level: 'Intermediate',
    },
    {
      name: 'Reading',
      icon: <FaBook className="text-3xl text-[#854c2c]" />,
      status: 'Considering starting',
      description: 'Want to dive deeper into both technical books and fiction. Knowledge is power!',
      level: 'Goal',
    },
    {
      name: 'Exercise',
      icon: <FaDumbbell className="text-3xl text-[#dda271]" />,
      status: 'Goal to start',
      description: 'Time to get back into physical fitness. A healthy body supports a healthy mind.',
      level: 'Goal',
    },
    {
      name: 'Guitar',
      icon: <FaGuitar className="text-3xl text-orange-300" />,
      status: 'Dream to learn',
      description: "Music has always fascinated me. One day I'll make time for this creative outlet.",
      level: 'Dream',
    },
    {
      name: 'Football (Soccer)',
      icon: <FaFutbol className="text-3xl text-wite" />,
      status: 'Childhood favorite',
      description: 'Growing up, I loved both watching (especially World Cups) and playing. The beautiful game!',
      level: 'Nostalgic',
    },
  ]

  return (
    <section className="py-20  text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
          Hobbies & Interests
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-black/50 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {hobby.icon}
                <div>
                  <h3 className="text-lg font-bold text-yellow-300/90">{hobby.name}</h3>
                  <p className="text-xs text-zinc-400">{hobby.status}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 mb-3">{hobby.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-400">{hobby.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HobbiesSection
