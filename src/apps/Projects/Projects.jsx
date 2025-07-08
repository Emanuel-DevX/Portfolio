import { useState } from 'react'
import ProjectFilterBar from './ProjectFilterBar'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
const Projects = function () {
  const [filters, setFilters] = useState([])
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <ProjectFilterBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="flex flex-wrap gap-5 mt-2">
        {projects && projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </>
  )
}
export default Projects
