import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen'
const API_URL = import.meta.env.VITE_API_URL

const BlogDetail = ({ slug: propSlug }) => {
  const params = useParams()
  const slug = propSlug || params.slug
  const [blog, setBlog] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/Blogs/${slug}`)
        const data = await response.json()

        setBlog(data)
        setIsLoaded(true)
      } catch (err) {
        console.log(err)
      }
    }

    fetchDetails()
  }, [])

  if (!blog) return null

  return isLoaded ? (
    <div className="text-white text-lg max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 text-base"
      >
        <FaArrowLeft />
        Back to Blogs
      </Link>

      <div className="w-full">
        <img src={blog.image} alt={blog.title} className="w-full h-80 object-left object-cover rounded-xl" />
      </div>

      {/* Metadata + Content */}
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{blog.title}</h1>

        <div className="text-zinc-400 text-sm flex items-center gap-4">
          <span>{new Date(blog.date || blog.createdAt).toLocaleDateString()}</span>

          {/* Interactive Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? 'text-red-500' : 'text-zinc-400 hover:text-red-500'
            }`}
          >
            <FaHeart className={isLiked ? 'text-red-500' : ''} />
            {likes}
          </button>

          <span className="flex items-center gap-1">
            <FaEye />
            {blog.views || 0}
          </span>
        </div>

        {/* Content Paragraphs */}
        <div className="text-zinc-200 leading-relaxed space-y-4">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: parseContent(paragraph) }} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <LoadingScreen />
  )
}

export default BlogDetail
