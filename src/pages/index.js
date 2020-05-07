import React from "react"
import { Button, Card } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandscapeImages from "../components/landscapeImages"

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home"/>
      <div>
        <Card title="Boka online!" className='paidit'>
          <div className="card-content">
            <div>
              Boka bord direkt via TheFork och få fantastiska erbjudande! &#127844;
            </div>
            <div className="paidit-buttons">
              <Button
                className="paidit-button"
                target="_blank"
                type="primary"
                shape="round"
                size="large"
                href={'https://www.thefork.com/restaurant/yalla-yalla-meze-r464557'}
              >Boka nu!
              </Button>
            </div>
          </div>
        </Card>
        <br/>
        <LandscapeImages />
      </div>
    </Layout>
  )}

export default IndexPage
