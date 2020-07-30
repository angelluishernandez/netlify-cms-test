import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const Noticias = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Noticias</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <Link to={`/noticias/${edge.node.fields.slug}`}>Leer más</Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Noticias
