import { SiCplusplus } from 'react-icons/si'
const JourneySection = () => {
  return (
    <section className="py-20 bg-zinc-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
          My Journey Into Tech
        </h2>

        <div className="space-y-8">
          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800 relative">
            <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">The Foundation</h3>
            <p className="text-zinc-300 leading-relaxed">
              I've always been drawn to <strong>problem-solving and mathematics</strong>. There's something beautiful
              about breaking down complex problems into manageable pieces and finding elegant solutions.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800 relative">
            <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">First Spark</h3>
            <p className="text-zinc-300 leading-relaxed">
              In high school, I got my first taste of technology through <strong>ICT classes</strong> - working with
              Excel, HTML/CSS, and basic computer skills. It was fascinating, but I didn't know how deep this rabbit
              hole would go.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800 relative">
            <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">The Turning Point</h3>
            <div className="flex items-start gap-4">
              <SiCplusplus className="text-3xl text-blue-400 mt-1" />
              <div>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  In grade 11, I decided to learn <strong>C++</strong> outside of class. I honestly didn't know what
                  programming really was at first.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  But once I understood its logic and problem-solving nature, everything clicked. I knew I wanted to
                  pursue this path and turn my love for logical thinking into a career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default JourneySection
