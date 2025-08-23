import React, { useState, useEffect } from 'react'
import { FaChartLine, FaEnvelope, FaBlog, FaEye, FaCalendarAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const [visitData, setVisitData] = useState([])
  const [stats, setStats] = useState({
    todayVisits: 0,
    weeklyVisits: 0,
    totalMessages: 0,
    totalBlogs: 0,
    weeklyChange: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken')
        const res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        setStats(data.stats)
        const transformed = data.visits.map((v) => {
          const localDate = new Date(v.date) // v.date is UTC from backend
          return {
            ...v,
            day: localDate.toLocaleDateString('en-US', { weekday: 'short' }),
            date: localDate.toLocaleDateString('en-CA'), // YYYY-MM-DD in user’s timezone
          }
        })
        setVisitData(transformed)
      } catch (err) {
        console.error('Failed to load stats:', err)
      }
    }
    fetchStats()
  }, [])

  const StatCard = ({ icon: Icon, title, value, subtitle, trend }) => (
    <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 rounded-xl flex items-center justify-center">
          <Icon className="text-lg text-black" />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center space-x-1 text-sm ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-zinc-400 text-sm">{title}</p>
      {subtitle && <p className="text-zinc-500 text-xs mt-1">{subtitle}</p>}
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={FaEye} title="Today's Visits" value={stats.todayVisits} subtitle="Real-time tracking" />
        <StatCard
          icon={FaChartLine}
          title="Weekly Visits"
          value={stats.weeklyVisits}
          subtitle="Last 7 days"
          trend={stats.weeklyChange}
        />
        <StatCard icon={FaEnvelope} title="Messages" value={stats.totalMessages} subtitle="Pending responses" />
        <StatCard icon={FaBlog} title="Blog Posts" value={stats.totalBlogs} subtitle="Published articles" />
      </div>

      {/* Visits Chart */}
      <div className="bg-black/50 rounded-2xl p-6 border border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Weekly Visits Overview</h3>
            <p className="text-zinc-400 text-sm">Daily visitor count for this week</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-zinc-400">
            <FaCalendarAlt />
            <span>Last 7 days</span>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#F9FAFB',
                }}
                labelStyle={{ color: '#D1D5DB' }}
              />
              <Line
                type="monotone"
                dataKey="visits"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2 }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="50%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
