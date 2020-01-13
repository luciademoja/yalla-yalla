import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleMenu from "../components/singleMenu"
import { sundayPrecourse, sundayMainCourse, sundayDessert } from "../utils/constants"
import { Tabs } from "antd"

const { TabPane } = Tabs;

const Menu = () => (
  <Layout>
    <SEO title="Söndagsmiddag yalla yalla" />
    <div className="welcome">
      <h2>Söndagsmiddag serveras varje söndag från kl 13:00 till kl 21:00 för bara 189:-. Välkomna!</h2>
      <h4>
        Välj en förrätt, en huvudrätt och en efterrätt från menyn.
      </h4>
      <br/>
      <h2>Vill du boka bord?</h2>
      <h4>Ring: <a className='contact' href="tel:031140084">031 14 00 84</a></h4>
      <h4>Eller maila: <a className='contact' href="mailto:yalla_yalla@hotmail.se">yalla_yalla@hotmail.se</a></h4>
    </div>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Förrätt" key="1">
        <SingleMenu menu={sundayPrecourse}/>
      </TabPane>
      <TabPane tab="Huvudrätt" key="2">
        <SingleMenu menu={sundayMainCourse}/>
      </TabPane>
      <TabPane tab="Efterrätt" key="3">
        <SingleMenu menu={sundayDessert}/>
      </TabPane>
    </Tabs>
  </Layout>
)

export default Menu
