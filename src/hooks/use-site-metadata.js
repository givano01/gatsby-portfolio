import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          social {
            github
            linkedIn
          }
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}