import React from "react"
import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { name, summary } = data.site.siteMetadata.author

  return (
    <div>
      THis is the footer
      <div>
        {summary} by {name}
      </div>
    </div>
  )
}

export default Footer
