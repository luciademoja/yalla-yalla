import React from "react"
import Images from "../components/images"
import Layout from "../components/layout"

const Contacts = () => (
  <Layout>
    <div className="welcome">
      <h2>Välkommen till Yalla Yalla Meze kök och bar!</h2>
      <h4>
        Vi serverar de godaste Grekiska, Turkiska och Libanesiska maträtter.
        Vi finns på tredje Långgatan 29, 413 28 Göteborg.
      </h4>
      <ul className="openings">Öppettider:
        <li>Mån-tors 11:00 - 22:00</li>
        <li>Fredag 11:00 - 23:00</li>
        <li>Lördag 13:00 - 23:00</li>
        <li>Söndag 13:00- 21:00</li>
      </ul>
      <h4>Ring: <a href="tel:031140084">031 14 00 84</a></h4>
      <h4>Eller maila: <a href="mailto:yalla_yalla@hotmail.se">yalla_yalla@hotmail.se</a></h4>
      <br/>
      <Images />
      <br />
    </div>
  </Layout>
)

export default Contacts;
