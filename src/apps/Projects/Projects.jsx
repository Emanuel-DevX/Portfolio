import { useState } from 'react'
import ProjectFilterBar from './ProjectFilterBar'
const Projects = function () {
  const [filters, setFilters] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
   
     return (<>
 
   
           <ProjectFilterBar
             searchInput={searchInput}
             setSearchInput={setSearchInput}
             filters={filters}
             setFilters={setFilters}
           />
   
  
      <div className='h-800'></div>
    </>
  )
}
export default Projects
