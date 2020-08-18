import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { kids } from "../utils/constants"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const Menu = () => (
  <Layout>
    <SEO title="Barnmeny yalla yalla" />
    <Tabs defaultActiveKey="1">
      <TabPane tab="Barnmeny" key="1">
        <SingleMenu menu={kids}/>
      </TabPane>
    </Tabs>
  </Layout>
)

export default Menu
