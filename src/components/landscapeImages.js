import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "antd"

const LandscapeImages = () => (
  <StaticQuery
    query={graphql`
      query landscapeImgQuery {
        source: allFile(filter: { absolutePath: { regex: "/landscape/" } }) {
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

export default LandscapeImages
