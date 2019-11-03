import React from "react"
import { Button, Card } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/images"

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home"/>
      <h2>Välkommen till Yalla Yalla Meze kök och bar!</h2>
      <h4>
        Vi serverar de godaste Grekiska, Turkiska och Libanesiska maträtter.
        Vi finns på tredje Långgatan 29.
      </h4>
      <br/>
      <Card title="Beställ online!" className='paidit'>
        <div className="card-content">
          <div>
            Psst..! Visste du att du kan beställa de godaste maträtterna från medelhavet SNABBT, ENKELT och ONLINE?
            Tryck på en av knapparna nedan för att komma åt vår online beställning system!
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
      <br />
      <div style={{ fontSize: `12px` }}>Icons made by
        <a href="https://www.freepik.com/" title="Freepik">Freepik </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank"> CC 3.0
          BY</a>
      </div>
    </Layout>
  )}

export default IndexPage
