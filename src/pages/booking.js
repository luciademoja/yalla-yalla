import React from "react"
import SquareImages from "../components/squareImages"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "antd"

const FindUs = () => (
  <Layout>
    <SEO title="Boka yalla yalla restaurang andralånggatan" />
    <div className="welcome">
      <br/>
      <h4>Ring: <a className='contact' href="tel:031140084">031 14 00 84</a></h4>
      <h4>Maila: <a className='contact' href="mailto:yalla_yalla@hotmail.se">yalla_yalla@hotmail.se</a></h4>
      <h4>Eller besök oss på: <a className="contact" href="https://www.google.com/maps/place/Yalla/@57.6984096,11.9449591,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff5bc9165e315:0xb9b0a990bbde26cc!8m2!3d57.6984068!4d11.9471531">Tredje Långgatan 29, 413 28 Göteborg</a></h4>
      <h2>Välkommna!</h2>
      <br/>
      <SquareImages />
    </div>
  </Layout>
)

export default FindUs;
