import BlogCard from './BlogCard'
import LoadingScreen from '../../components/LoadingScreen'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogDetail from './BlogDetail'

const API_URL = import.meta.env.VITE_API_URL

const Blog = function () {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/blogs`)
        const data = await res.json()
        setBlogs(data)
      } catch (err) {
        console.error('Failed to fetch blogs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (slug) return <BlogDetail slug={slug} />

  return (
    <>
      <div>
        {loading ? (
          <LoadingScreen />
        ) : blogs.length === 0 ? (
          <div className="text-center mt-16 bg-black/20 border border-zinc-800 rounded-xl px-6 py-10 max-w-md mx-auto">
            <h3 className="text-xl font-light text-amber-400 mb-2">No Blogs Yet</h3>
            <p className="text-sm text-zinc-400">I'm still writing my first post. Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 ">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Blog
