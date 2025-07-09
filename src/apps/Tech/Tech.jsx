import { TechCard, FavTechCard } from './TechCard'
import { topTechnologies, fullTechStack } from '../../data/techstack'
import { FaHeart, FaCode } from 'react-icons/fa'

const Tech = function () {
  return (
    <>
      <div>
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
            My Tech Stack
          </h1>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
            The tools and technologies I use to build scalable web applications. Always learning, always growing.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <FaHeart className="text-red-600" />
            Current Favorites
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topTechnologies.map((tech) => (
              <FavTechCard key={`top-${tech.name}`} tech={tech} />
            ))}
          </div>
        </div>
     <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            Complete Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullTechStack.map((tech) => ( <TechCard key={`stack-${tech.name}`} tech={tech} />
            
            ))}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Tech
