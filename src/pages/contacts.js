import React from "react"
import SquareImages from "../components/squareImages"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacts = () => (
  <Layout>
    <SEO title="Kontakt yalla yalla" />
    <div className="welcome">
      <h2>Välkommen till Yalla Yalla Meze kök och bar!</h2>
      <h4>
        Vi serverar de godaste Grekiska, Turkiska och Libanesiska maträtter.
      </h4>
      <br/>
      <h4>Ring: <a className='contact' href="tel:031140084">031 14 00 84</a></h4>
      <h4>Eller maila: <a className='contact' href="mailto:yalla_yalla@hotmail.se">yalla_yalla@hotmail.se</a></h4>
      <h4>Vi finns på tredje Långgatan 29, 413 28 Göteborg.</h4>
      <ul className="openings">Öppettider:
        <li>Mån-tors 15:00 - 21:00</li>
        <li>Fredag 15:00 - 23:00</li>
        <li>Lördag 13:00 - 23:00</li>
        <li>Söndag 13:00- 21:00</li>
      </ul>
      <br/>
      <SquareImages />
    </div>
  </Layout>
)

export default Contacts;
