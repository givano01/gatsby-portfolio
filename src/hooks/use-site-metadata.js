import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                social {
                    linkedIn
                    github
                }
            }
        }
    }
  `)

  return data.site.siteMetadata
}