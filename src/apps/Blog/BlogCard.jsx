const BlogCard = function ({ blog, handleLikes }) {
  return (
    <>
      <div>
        <h2>{blog.title}</h2>
        <button onClick={handleLikes(blog.id)}>Like</button>
      </div>
    </>
  )
}
export default BlogCard
