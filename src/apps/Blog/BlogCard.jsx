import { Link } from 'react-router-dom'
import { FaHeart, FaEye } from 'react-icons/fa'

const BlogCard = ({ blog }) => {
  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="bg-zinc-800/90 rounded-xl overflow-hidden hover:scale-[1.015] transition shadow-lg border border-zinc-700 block  lg:w-[32%] md:w-[48%]"
    >
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-bold text-white">{blog.title}</h2>
          <span className="text-xs text-zinc-400 ml-2 flex-shrink-0">
            {formatDate(blog.date || blog.createdAt || new Date())}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaEye className="text-yellow-400 text-base" />
              <span className="text-zinc-300 text-sm">{blog.views || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-red-500 text-base" />
              <span className="text-zinc-300 text-sm">{blog.likes || 0}</span>
            </div>
          </div>

          <span className="text-blue-400 text-sm">Read more</span>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
