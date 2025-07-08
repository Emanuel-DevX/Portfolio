import { useState } from 'react'
import ProjectFilterBar from './ProjectFilterBar'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
const Projects = function () {
  const [filters, setFilters] = useState({ sort: 'latest' })
  const [searchInput, setSearchInput] = useState('')

  const sortedProjects = [...projects]
    .filter((p) => {
      const searchContent = (p.title + ' ' + p.description + ' ' + p.techStack.join(' ')).toLowerCase()
      const matchesSearch = searchContent.includes(searchInput.toLowerCase())

      const matchesTech = !filters.tech || p.techStack.map((t) => t.toLowerCase()).includes(filters.tech.toLowerCase())

      return matchesSearch && matchesTech
    })
    .sort((a, b) => {
      if (filters.sort === 'a-z') return a.title.localeCompare(b.title)
      if (filters.sort === 'latest') return new Date(b.date) - new Date(a.date)
      if (filters.sort === 'oldest') return new Date(a.date) - new Date(b.date)
      return 0
    })

  return (
    <>
      <ProjectFilterBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="flex flex-wrap gap-5 mt-2">
        {sortedProjects && sortedProjects.map((project) => <ProjectCard project={project} />)}
      </div>
    </>
  )
}
export default Projects
