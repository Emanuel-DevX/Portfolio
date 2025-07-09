import { FaHeart, FaCalendarAlt, FaLightbulb, FaCode } from 'react-icons/fa'
import { techIcons } from './iconMap'

const TechCard = function ({ tech }) {
  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Advanced':
        return 'text-green-400'
      case 'Intermediate':
        return 'text-yellow-400'
      case 'Beginner':
        return 'text-orange-400'
      case 'Learning':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }
  
  return (
    <div
      
      className="bg-black/50 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        {techIcons[tech.name]}
        <div>
          <h3 className="text-lg font-bold text-yellow-400">{tech.name}</h3>
          <p className="text-xs text-zinc-400">{tech.category}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">Proficiency:</span>
          <span className={`font-semibold ${getProficiencyColor(tech.proficiency)}`}>{tech.proficiency}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-zinc-400" />
          <span className="text-zinc-300">Since {tech.firstEncounter}</span>
        </div>

        <div>
          <p className="text-zinc-400 mb-1">Learned at:</p>
          <p className="text-zinc-300">{tech.learnedAt}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <FaLightbulb className="text-yellow-400" />
            <span className="text-zinc-400">What I love:</span>
          </div>
          <p className="text-zinc-300 text-xs">{tech.interestingFact}</p>
        </div>

        <div>
          <p className="text-zinc-400 mb-1">Current use:</p>
          <p className="text-zinc-300 text-xs">{tech.currentUse}</p>
        </div>
      </div>
    </div>
  )
}

const FavTechCard = function ({ tech }) {
  return (
    <div className="bg-black/50 rounded-2xl p-6 relative border border-zinc-800">
      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-red-600 text-black text-sm font-bold px-3 py-1 rounded-full">
        #{tech.rank}
      </div>
      <div className="flex items-center gap-4 mb-4">
        {techIcons[tech.name]}
        <div>
          <h3 className="text-xl font-bold text-yellow-400">{tech.name}</h3>
          <p className="text-sm text-zinc-400">{tech.proficiency}</p>
        </div>
      </div>
      <p className="text-sm text-zinc-300 mb-4">{tech.reason}</p>
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <FaCalendarAlt />
        <span>Since {tech.firstEncounter}</span>
      </div>
    </div>
  )
}

export  { TechCard, FavTechCard }
