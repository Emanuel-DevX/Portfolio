import React, { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL

const VisitsList = () => {
  const [visits, setVisits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch visits from API
  const fetchVisits = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/dashboard/visits`)
      if (!res.ok) throw new Error('Failed to fetch visits')
      const data = await res.json()
      setVisits(data.visits || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Delete a visit
  const handleDelete = async (id) => {
    // if (!window.confirm('Are you sure you want to delete this visit?')) return
    try {
      const res = await fetch(`${API_URL}/dashboard/visits/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete visit')
      // Remove from state
      setVisits(visits.filter((v) => v._id !== id))
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    fetchVisits()
  }, [])

  if (loading) return <p className="text-zinc-400">Loading visits...</p>
  if (error) return <p className="text-red-400">Error: {error}</p>

  return (
    <div className="mt-8 bg-black/20 backdrop-blur rounded-xl p-4 border border-zinc-800">
      <h2 className="text-lg font-semibold mb-4 text-white">Recent Visits</h2>
      {visits.length === 0 ? (
        <p className="text-zinc-400">No visits recorded yet.</p>
      ) : (
        <ul className="divide-y divide-zinc-800">
          {visits.map((visit) => (
            <li key={visit._id} className="py-3 flex justify-between items-center">
              <div>
                <p className="text-white text-sm">
                  <p className="text-white text-sm">
                    {new Date(visit.date).toLocaleString(undefined, {
                      weekday: 'long', // Monday, Tuesday...
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </p>
                <p className="text-zinc-400 text-sm">
                  {visit.country || 'Unknown'}
                  {visit.city ? `, ${visit.city}` : ''}
                </p>
              </div>
              <button
                onClick={() => handleDelete(visit._id)}
                className="px-3 py-1 text-sm bg-red-500/10 hover:bg-red-500/20 
                  text-red-400 rounded-md border border-red-500/30 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default VisitsList
