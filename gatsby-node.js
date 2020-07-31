const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create pages

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const noticiasTemplate = path.resolve(`./src/templates/noticias-item.js`)
  const response = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                titulo
                subtitulo
                cuerpo
              }
            }
          }
        }
      }
    `
  )

  if (response.errors) {
    throw response.errors
  }

  // Create blog newsItem pages.
  const news = response.data.allMarkdownRemark.edges

  news.forEach((newsItem, index) => {
    const previous = index === news.length - 1 ? null : news[index + 1].node
    const next = index === 0 ? null : news[index - 1].node

    createPage({
      path: `noticias/${newsItem.node.fields.slug}`,
      component: noticiasTemplate,
      context: {
        slug: newsItem.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

// Create node pagess

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
