import InnerHTML from 'dangerously-set-html-content'

const BlogDescription = ({ description }: {description: string}) => {
  return (
    <InnerHTML html={description} className="mb-10" /> 
  )
}

export default BlogDescription
