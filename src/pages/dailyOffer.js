import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { day } from "../utils/constants"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const dailyOffer = () => (
  <Layout>
    <SEO title="Menu yalla yalla" />
    <div className="daily-offer">
      <p>Dagens erbjudande serveras Onsdag till Fredag mellan kl 16:00 - 21:00 och Lördag mellan kl 13:00 - 22:00</p>
      <p>Gäller ej Enjoy kupong</p>
    </div>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Dagens" key="1">
        <SingleMenu menu={day}/>
      </TabPane>
    </Tabs>
  </Layout>
)

export default dailyOffer
