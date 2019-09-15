import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { desserts, fish, kids, mainCourses, starters, vegetarian } from "../utils/constants"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const Menu = () => (
  <Layout>
    <SEO title="Menu yalla yalla" />
    <Tabs defaultActiveKey="1">
      <TabPane tab="Förrätter" key="1">
        <SingleMenu menu={starters}/>
      </TabPane>
      <TabPane tab="Huvudrätter" key="2">
        <SingleMenu menu={mainCourses}/>
      </TabPane>
      <TabPane tab="Fiskrätter" key="3">
        <SingleMenu menu={fish}/>
      </TabPane>
      <TabPane tab="Vegetariska rätter" key="4">
        <SingleMenu menu={vegetarian}/>
      </TabPane>
      <TabPane tab="Barnmeny" key="5">
        <SingleMenu menu={kids}/>
      </TabPane>
      <TabPane tab="Medelhavs dessert" key="6">
        <SingleMenu menu={desserts}/>
      </TabPane>
    </Tabs>
  </Layout>
)

export default Menu
