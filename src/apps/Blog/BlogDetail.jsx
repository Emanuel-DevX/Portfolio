import { useParams } from 'react-router-dom'

const BlogDetail = ({ slug: propSlug }) => {
  const params = useParams()
  const slug = propSlug || params.slug

  return (
    <div className="text-white text-lg">
      Blog Detail: <strong>{slug}</strong>
    </div>
  )
}

export default BlogDetail
