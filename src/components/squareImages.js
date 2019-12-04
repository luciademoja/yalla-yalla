import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "antd"

const SquareImages = () => (
  <StaticQuery
    query={graphql`
      query squareImgQuery {
        source: allFile(filter: { absolutePath: { regex: "/square/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Carousel autoplay>
        {data.source.edges.map(({ node }, i) => (
          <div key={i}  className="carousel-image">
              <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Carousel>
    )}
  />
)

export default SquareImages
