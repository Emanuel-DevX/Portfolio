import React, { useEffect, useState } from 'react'
import { FaBlog } from 'react-icons/fa'
import BlogForm from './BlogForm'
import { PlusCircle } from 'lucide-react'
const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('adminToken')
        const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        setBlogs(data || [])
      } catch (err) {
        console.error('Error fetching blogs:', err)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <>
      <div className="bg-black/50 rounded-2xl p-8 border border-zinc-800">
        <div className="flex items-center justify-between text-white mb-6 ">
          <h3 className="text-2xl font-bold flex items-center space-x-2">
            <FaBlog className="text-yellow-400" /> <span>Blogs</span>
          </h3>
          <button
            onClick={() => {
              setSelectedBlog(null)
              setShowBlogForm(true)
            }}
            className="flex gap-1  font-bold cursor-pointer"
          >
            <PlusCircle className="w-5 text-yellow-400" />
            Post
          </button>
        </div>
        {blogs.length === 0 ? (
          <p className="text-zinc-400">No blog posts found.</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.slug} className="p-4 bg-black/40 border border-zinc-700 rounded-lg">
                <h4 className="text-white font-semibold">{blog.title}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showBlogForm && <BlogForm blog={selectedBlog} onSuccess={(data) => console.log('Blog updated:', data)} onCancel={()=>setShowBlogForm(false)}/>}
    </>
  )
}

export default Blogs
