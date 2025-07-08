import { Link } from 'lucide-react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = function ({ project }) {
  return (
    <>
      <div className="md:w-[32%] bg-black/50 rounded-2xl ">
        <img className="rounded-t-2xl max-h-44 w-full object-cover" src={project.image} alt={project.title} />
        <div className="w-full px-2 flex flex-col justify-around">
          <h2 className="text-yellow-400 font-bold ">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
          <div className="flex text-sm gap-2 flex-wrap mt-2 text-zinc-200">
            {project.techStack &&
              project.techStack.map((tech) => (
                <div className="border max-h-8 text-nowrap py-[1px] px-2 rounded-xl border-amber-400/30 ">
                  {tech}
                </div>
              ))}
          </div>
          <div className='mt-3'>
            {project.github && (
              <a className='text-2xl' href={project.github}>
                <FaGithub />
              </a>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
