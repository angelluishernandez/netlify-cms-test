import React, { useState, useEffect } from "react"
import { Carousel, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"

const CarouselItem = () => {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // Graphql query

  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/carousel/" } }) {
        edges {
          node {
            frontmatter {
              titulo
              subtitulo
              imagen {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const images = query.allMarkdownRemark.edges

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex)

  return (
    <Carousel
      activeIndex={index}
      controls={true}
      interval={3000}
      onSelect={handleSelect}
      indicators={true}
      style={{ marginTop: "1em" }}
    >
      {images.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <Img
              fluid={item.node.frontmatter.imagen.childImageSharp.fluid}
              alt="..."
            />
            <Carousel.Caption>
              <h3>{item.node.frontmatter.titulo}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default CarouselItem
