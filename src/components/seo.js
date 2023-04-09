import * as React from 'react'
import  useSiteMetadata  from "../hooks/use-site-metadata"

 const SEO = ({ title, description }) => {
    const { title: defaultTitle, description: defaultDescription} = useSiteMetadata()
  
    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
    }
  
    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </>
    )
  }

  export default SEO