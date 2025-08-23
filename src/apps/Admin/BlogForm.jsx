import React, { useState, useEffect } from 'react'

const BlogForm = ({ blog, onSuccess, onCancel }) => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [content, setContent] = useState([''])
  const [image, setImage] = useState('')
  const [published, setPublished] = useState(false)
  useEffect(() => {
    if (blog) {
      setTitle(blog.title || '')
      setSlug(blog.slug || '')
      setContent(blog.content && blog.content.length ? blog.content : [''])

      setImage(blog.image || '')
      setPublished(blog.published || false)
    }
  }, [blog])

  const handleContentChange = (index, value) => {
    const newContent = [...content]
    newContent[index] = value
    setContent(newContent)
  }

  const addParagraph = () => {
    setContent([...content, ''])
  }

  const removeParagraph = (index) => {
    setContent(content.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('adminToken')
      const method = blog ? 'PUT' : 'POST'
      const url = blog ? `${import.meta.env.VITE_API_URL}/blogs/${blog._id}` : `${import.meta.env.VITE_API_URL}/blogs`

      const cleanedContent = content.map((p) => p.trim()).filter((p) => p.length > 0)
      if (!(title && cleanedContent.length && image && published !== undefined)) {
        alert('Title, content, image, and published status are required')
        return
      }
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, slug, content: cleanedContent, image, published }),
      })

      if (!res.ok) {
        throw new Error('Failed to save blog')
      }

      const data = await res.json()
      if (onSuccess) onSuccess(data)
    } catch (err) {
      console.error('Error saving blog:', err)
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 bg-black/95 h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-black/50 p-6 rounded-xl border border-zinc-800 overflow-y-scroll custom-scrollbar max-h-[90vh] w-3xl relative"
      >
        {/* Published Toggle */}
        <div className="flex items-center space-x-3 absolute right-2 top-2">
          <label className="text-sm text-zinc-300">Published</label>
          <button
            type="button"
            onClick={() => setPublished(!published)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
              published ? 'bg-gradient-to-r from-yellow-400 to-red-500' : 'bg-zinc-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
                published ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        {/* Title */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="my-first-blog"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-700 text-white"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Content (Paragraphs)</label>
          <div className="space-y-4">
            {content.map((para, i) => (
              <div key={i} className="flex items-start  relative">
                <textarea
                  value={para}
                  onChange={(e) => handleContentChange(i, e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 custom-scrollbar"
                  placeholder={`Paragraph ${i + 1}`}
                  rows={5}
                  required
                />
                {content.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(i)}
                    className="text-sm absolute right-2 top-2 bg-zinc-800 px-2 p-1 rounded-full text-zinc-500 hover:text-red-500"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addParagraph}
            className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
          >
            + Add Paragraph
          </button>
        </div>
        <div className="flex justify-between gap-2">
          <button onClick={onCancel} className="w-full bg-zinc-800 rounded-lg font-bold cursor-pointer">
            Cancel
          </button>

          {/* Submit */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {blog ? 'Update Blog' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm
