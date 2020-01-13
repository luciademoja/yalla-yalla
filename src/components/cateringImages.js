import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "antd"

const CateringImages = () => (
  <StaticQuery
    query={graphql`
      query cateringImgQuery {
        source: allFile(filter: { absolutePath: { regex: "/catering/" } }) {
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

export default CateringImages
