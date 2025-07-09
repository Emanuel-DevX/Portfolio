const AboutSection = () => {
  return (
    <section className="py-20 bg-black/30 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I grew up in the beautiful country of Ethiopia, where I developed my love for learning and
              problem-solving. At 21, I made the life-changing decision to move to Canada, and I couldn't be more
              grateful for this journey.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Canada has given me incredible opportunities and exposed me to amazing cultural diversity. Every day, I'm
              inspired by the people I meet and the stories they share.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed">
              My faith through the <strong className="text-yellow-400">Ethiopian Orthodox Church</strong> plays a huge
              role in shaping who I am. It guides my values, keeps me grounded, and reminds me to approach life with
              gratitude and purpose.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Core Values</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-center gap-3">
                <FaHeart className="text-red-400" />
                <span>Authenticity & genuine connections</span>
              </li>
              <li className="flex items-center gap-3">
                <FaLightbulb className="text-yellow-400" />
                <span>Continuous learning & growth</span>
              </li>
              <li className="flex items-center gap-3">
                <FaStar className="text-blue-400" />
                <span>Excellence in everything I do</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection