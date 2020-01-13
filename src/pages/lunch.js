import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { monday, tuesday, wednesday, thursday, friday } from "../utils/constants"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const Lunch = () => (
  <Layout>
    <SEO title="Menu yalla yalla" />
    <div>Lunchmenyn serveras alla vardagar mellan kl 12:00 till 15:00 för bara 100:-</div>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Måndag" key="1">
        <SingleMenu menu={monday}/>
      </TabPane>
      <TabPane tab="Tisdag" key="2">
        <SingleMenu menu={tuesday}/>
      </TabPane>
      <TabPane tab="Onsdag" key="3">
        <SingleMenu menu={wednesday}/>
      </TabPane>
      <TabPane tab="Torsdag" key="4">
        <SingleMenu menu={thursday}/>
      </TabPane>
      <TabPane tab="Fredag" key="5">
        <SingleMenu menu={friday}/>
      </TabPane>
    </Tabs>
  </Layout>
)

export default Lunch
