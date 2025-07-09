import React from 'react'

const FilterResetComponent = ({
  setFilters,
  setSearchInput,

}) => {
  const handleResetFilters = () => {
    setFilters({ sort: 'latest' })
    setSearchInput('')

  }

  const handleResetSearch = () => {
    setSearchInput('')
  }

  return (
      <div className="flex flex-col items-center py-16 px-6 w-full">
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>

          {/* Icon container */}
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-full p-6 border border-slate-700/50">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 text-center max-w-md">
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We couldn't find any projects matching your current filters or search criteria. Try adjusting your
            search or clearing some filters.
          </p>
        </div>

    <div className="flex flex-wrap gap-3 p-4 max-h-20">
      {/* Clear Filters Button */}
      <button
        onClick={handleResetFilters}
        className="px-4 py-3 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black font-semibold rounded-full hover:font-bold hover:from-yellow-300 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Clear Filters
      </button>

      {/* Clear Search Button */}
      <button
        onClick={handleResetSearch}
        className="px-4 py-3 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 text-black font-semibold rounded-full hover:font-bold hover:from-yellow-300 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Clear Search
      </button>
    </div>

    </div>
  )
}

export default FilterResetComponent
