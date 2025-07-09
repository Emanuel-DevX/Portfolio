const TechCard = function({tech}){
    return (
      <div
        key={tech.name}
        className="bg-black/50 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          {tech.icon}
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
export default TechCard