const EducationSection = () => {
  return (
    <section className="py-20 bg-black/30 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
          Education Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-2xl text-blue-400" />
              <h3 className="text-xl font-bold text-yellow-400">Bahir Dar University</h3>
            </div>
            <div className="space-y-3 text-zinc-300">
              <p>
                <strong>Program:</strong> Information Systems
              </p>
              <p>
                <strong>Duration:</strong> 3 out of 4 years completed
              </p>
              <p>
                <strong>GPA:</strong> <span className="text-green-400 font-semibold">3.63</span>
              </p>
              <p className="text-sm text-zinc-400 italic">
                Had to pause when I moved to Canada, but the foundation was solid.
              </p>
            </div>
          </div>

          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-2xl text-green-400" />
              <h3 className="text-xl font-bold text-yellow-400">BCIT</h3>
            </div>
            <div className="space-y-3 text-zinc-300">
              <p>
                <strong>Program:</strong> Computer Systems Technology
              </p>
              <p>
                <strong>Current Average:</strong> <span className="text-green-400 font-semibold">93%+</span>
              </p>
              <p>
                <strong>Status:</strong> Thriving and loving it!
              </p>
              <p className="text-sm text-zinc-400 italic">
                Chose BCIT for its practical, industry-focused curriculum over memorization-heavy exams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-300 max-w-2xl mx-auto">
            The transition from theoretical learning to hands-on, practical education at BCIT has been incredible. I'm
            finally in an environment where I can apply what I learn immediately.
          </p>
        </div>
      </div>
    </section>
  )
}
export default EducationSection
