import React from "react"
import { Button, Card } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/images"

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home"/>
      <div>
        <Card title="Beställ online!" className='paidit'>
          <div className="card-content">
            <div>
              Psst..! Visste du att du kan beställa de godaste maträtterna från medelhavet SNABBT, ENKELT och betala med SWISH?
              Tryck på en av knapparna nedan för att beställa nu! &#127844;
            </div>
            <div className="paidit-buttons">
              <Button
                className="paidit-button"
                target="_blank"
                type="primary"
                shape="round"
                size="large"
                href={'https://secure.paidit.se/yallayalla?takeaway=false'}
              >Ät här!
              </Button>
              <Button
                className="paidit-button"
                target="_blank"
                type="primary"
                shape="round"
                size="large"
                href={'https://secure.paidit.se/yallayalla?takeaway=true'}
              >Takeaway!
              </Button>
            </div>
          </div>
        </Card>
        <br/>
        <Images />
      </div>
    </Layout>
  )}

export default IndexPage
