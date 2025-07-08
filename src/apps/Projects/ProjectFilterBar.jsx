import React, { useState } from 'react'
import { Search, Filter, SortAsc, ChevronDown, Code, Database, Globe, Zap } from 'lucide-react'

const ProjectFilterBar = function ({ searchInput, setSearchInput, filters, setFilters }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const techOptions = [
    { value: '', label: 'All Tech', icon: Globe },
    { value: 'React', label: 'React', icon: Code },
    { value: 'Node', label: 'Node.js', icon: Zap },
    { value: 'MongoDB', label: 'MongoDB', icon: Database },
    { value: 'Python', label: 'Python', icon: Code },
    { value: 'JavaScript', label: 'JavaScript', icon: Code },
  ]

  const sortOptions = [
    { value: '', label: 'Sort by' },
    { value: 'latest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'a-z', label: 'Title A-Z' },
    { value: 'z-a', label: 'Title Z-A' },
  ]

  const selectedTech = techOptions.find((tech) => tech.value === filters.tech) || techOptions[0]
  const selectedSort = sortOptions.find((sort) => sort.value === filters.sort) || sortOptions[0]

  return (
    <div className="w-full max-w-6xl sticky top-0 z-10">
      <div className="flex items-center justify-center  gap-1 p-2 ">
        {/* Tech Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center lg:gap-2 px-2 lg:px-4 py-3 lg:min-w-32 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200 text-white"
          >
            <Filter size={18} className="text-yellow-400" />
            <span className="text-sm font-medium hidden lg:block">{selectedTech.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-2 w-36 rounded-xl bg-zinc-800/95 backdrop-blur-sm border border-white/10 shadow-xl z-50">
              {techOptions.map((tech) => {
                const IconComponent = tech.icon
                return (
                  <button
                    key={tech.value}
                    onClick={() => {
                      setFilters({ ...filters, tech: tech.value })
                      setIsFilterOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    <IconComponent size={16} className="text-yellow-400" />
                    <span className="text-sm text-white">{tech.label}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Search Input - Centered */}
        <div className="lg:min-w-md max-w-md">
          <div className="relative backdrop-blur-sm">
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center lg:gap-2 px-2 lg:min-w-32 lg:px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200 text-white "
          >
            <SortAsc size={18} className="text-orange-400" />
            <span className="text-sm font-medium hidden lg:block">{selectedSort.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 w-36 rounded-xl bg-zinc-800/95 backdrop-blur-sm border border-white/10 shadow-xl z-50">
              {sortOptions.map((sort) => (
                <button
                  key={sort.value}
                  onClick={() => {
                    setFilters({ ...filters, sort: sort.value })
                    setIsSortOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors first:rounded-t-xl last:rounded-b-xl"
                >
                  <span className="text-sm text-white">{sort.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectFilterBar
