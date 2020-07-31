import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CarouselItem from "../components/carousel"
import { Typography } from "@material-ui/core"

const SiteIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <CarouselItem />
      {/* <h1>{siteTitle}</h1> */}
      <Typography variant="h2">
        Centro de Educación Secundaria y Formación Profesional 1º de Mayo
      </Typography>
      <Typography variant="body1">
        En el CES y FP 1º de Mayo se imparten cursos de Educación Secundaria
        Obligatoria y Formación Profesional. Nuestro objetivo es formar mujeres
        y hombres libres, responsables y capaces, que defiendan el cuidado de la
        naturaleza y busquen el bienestar cultural, material y la justicia
        social.
      </Typography>
    </Layout>
  )
}

export default SiteIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
