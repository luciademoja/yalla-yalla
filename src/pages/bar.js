import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { cans, beer, redWine, whiteWine, roseWine, sparklingWine, drinks, coffeeDrinks, coffee } from "../utils/constants"
import { Tabs } from "antd"
import PortraitImages from "../components/portraitImages"

const { TabPane } = Tabs;

const Menu = () => (
  <Layout>
    <SEO title="Menu yalla yalla" />
    <Tabs defaultActiveKey="1">
      <TabPane tab="Drycker" key="1">
        <SingleMenu menu={cans}/>
      </TabPane>
      <TabPane tab="Öl och Cider" key="2">
        <SingleMenu menu={beer}/>
      </TabPane>
      <TabPane tab="Rött vin" key="3">
        <SingleMenu menu={redWine}/>
      </TabPane>
      <TabPane tab="Vitt vin" key="4">
        <SingleMenu menu={whiteWine}/>
      </TabPane>
      <TabPane tab="Rosé vin" key="5">
        <SingleMenu menu={roseWine}/>
      </TabPane>
      <TabPane tab="Mousserande vin" key="6">
        <SingleMenu menu={sparklingWine}/>
      </TabPane>
      <TabPane tab="Drinkar" key="7">
        <SingleMenu menu={drinks}/>
      </TabPane>
      <TabPane tab="Kaffedrinkar" key="8">
        <SingleMenu menu={coffeeDrinks}/>
      </TabPane>
      <TabPane tab="Kaffe och te" key="9">
        <SingleMenu menu={coffee}/>
      </TabPane>
    </Tabs>
    <PortraitImages/>
  </Layout>
)

export default Menu
