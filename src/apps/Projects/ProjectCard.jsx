import { Link } from 'lucide-react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { PiPersonSimple, PiUsersThree } from 'react-icons/pi'

const ProjectCard = function ({ project }) {
  return (
    <>
      <div className="md:w-[32%] bg-black/50 rounded-2xl flex flex-col relative ">
        <div className="absolute text-lg top-2 left-2 p-1 rounded-md bg-zinc-900 font-bold">
          {project.isGroup ? (
            <span title="Group Project" className="flex items-center gap-1">
              <PiUsersThree /> <span className="text-xs">Group</span>
            </span>
          ) : (
            <span title="Personal Project" className="flex items-center gap-1">
              <PiPersonSimple /> <span className="text-xs">Personal</span>
            </span>
          )}
        </div>
        {project.isGroup && (
          <div className="absolute top-2 right-2 font-bold bg-zinc-900 p-1 px-2 rounded-full text-zinc-200">
            {project.role && (
              <span title={`Role: ${project.role}`} className="block text-xs ">
                {project.role}
              </span>
            )}
          </div>
        )}
        <img
          className="rounded-t-2xl md:max-h-44 lg:max-h-48 w-full object-cover"
          src={project.image}
          alt={project.title}
        />
        <div className="w-full px-2 flex flex-col flex-grow justify-between pb-4">
          <div>
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
          </div>
          <div className="mt-3 flex  gap-4 self-end">
            {project.github && (
              <a
                className="text-2xl"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </a>
            )}

            {project.url && (
              <a
                className="flex text-sm"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Demo"
                aria-label="Live Demo"
              >
                <Link />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
