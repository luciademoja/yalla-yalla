import React from "react"
import { Card } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeImages from "../components/landscapeImages"
import { Link } from "gatsby"

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Menu Yalla Yalla"/>
      <div>
        <Card title="Meny" className='foodora'>
          <div className="card-content-menu">
            <Link className="menu-link" to="/aLaCarte">
              À la carte
            </Link>
            <Link className="menu-link" to="/sunday">
              Söndagsmiddag
            </Link>
            <Link className="menu-link" to="/kids">
              Barnmeny
            </Link>
            <Link className="menu-link" to="/bar">
              Bar
            </Link>
          </div>
        </Card>
        <br/>
        <LandscapeImages />
      </div>
    </Layout>
  )}

export default IndexPage
