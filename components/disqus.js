import {DiscussionEmbed} from "disqus-react"

const Disqus = ({blog}) => {
  const disqusShortname = "nekonako"  
  const disqusConfig = {
    url: blog.slug,
    identifier: blog.id, // Single post id
    title: blog.title // Single post title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default Disqus;
