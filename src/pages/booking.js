import React from "react"
import SquareImages from "../components/squareImages"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "antd"

const FindUs = () => (
  <Layout>
    <SEO title="Boka yalla yalla restaurang andralånggatan" />
    <div className="welcome">
      <iframe src="https://module.lafourchette.com/sv_SE/module/464557-2f2d0" width="600" height="600" className="the-fork"/>
    </div>
  </Layout>
)

export default FindUs;
