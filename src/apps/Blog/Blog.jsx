import BlogCard from "./BlogCard"
const Blog = function () {
  const blogs = []

  return (
    <>
      <div>
        {blogs.length === 0 ? (
          <div className="text-center mt-16 bg-black/20 border border-zinc-800 rounded-xl px-6 py-10 max-w-md mx-auto">
            <h3 className="text-xl font-light text-amber-400 mb-2">No Blogs Yet</h3>
            <p className="text-sm text-zinc-400">I'm still writing my first post. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Blog
