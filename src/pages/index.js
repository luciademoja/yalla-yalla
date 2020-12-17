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
        <Card title="Beställ online!" className='foodora'>
          <div className="card-content">
            <div>
              Beställ online på Foodora och få våra godaste maträtter hemlevererade! <span role='img' aria-label='emoji shrimp'>&#127844;</span>
            </div>
            <div className="foodora-buttons">
              <Button
                className="foodora-button"
                target="_blank"
                type="primary"
                shape="round"
                size="large"
                href={'https://www.foodora.se/en/restaurant/fz3h/yalla-yalla-meze-kok-och-bar?r=1'}
              >Beställ nu!
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
