import React from "react"
import SquareImages from "../components/squareImages"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "antd"

const Opening = () => (
  <Layout>
    <SEO title="Öppettider yalla yalla restaurang andralånggatan" />
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
