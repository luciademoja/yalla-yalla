import React from "react"
import SquareImages from "../components/squareImages"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "antd"

const Opening = () => (
  <Layout>
    <SEO title="Öppettider yalla yalla restaurang andralånggatan" />
      <div className="welcome">
        <br/>
        <h4>Ring: <a className='contact' href="tel:031140084">031 14 00 84</a></h4>
        <h4>Maila: <a className='contact' href="mailto:yalla_yalla@hotmail.se">yalla_yalla@hotmail.se</a></h4>
        <h4>Eller besök oss på: <a className="contact" href="https://www.google.com/maps/place/Yalla/@57.6984096,11.9449591,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff5bc9165e315:0xb9b0a990bbde26cc!8m2!3d57.6984068!4d11.9471531">Tredje Långgatan 29, 413 28 Göteborg</a></h4>
        <h2>Välkommna!</h2>
        <br/>
      </div>
      <Card title="Öppettider" className='foodora'>
        <ul className="openings">
          <li>Mån/Tis Stängt</li>
          <li>Ons 16:00 - 21:00</li>
          <li>Tor 16:00 - 21:00</li>
          <li>Fre 16:00 - 23:00</li>
          <li>Lör 13:00 - 23:00</li>
          <li>Sön 13:00 - 21:00</li>
        </ul>
      </Card>
      <br/>
      <SquareImages />
  </Layout>
)

export default Opening;
