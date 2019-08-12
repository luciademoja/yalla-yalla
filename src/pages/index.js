import React from "react"
import { Carousel, Tabs } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Image from "../components/image"
import Dessert from "../components/dessert"
import { starters, mainCourses, fish, vegetarian, kids, desserts } from "../utils/constants"

const IndexPage = () => {

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return(
    <Layout>
      <SEO title="Home"/>
      <h1>Meze kök och bar</h1>
      <p>Välkommen!</p>
      <p>
        Vi serverar medelhavets godaste maträtter.
        Vår specialitet är bland annat Grekiska, Turkiska och Libanesiska maträtter.
        Vi finns på tredje Långgatan 29.
      </p>
      <div style={{ minWidth: '0', minHeight: '0'}}>
        <Carousel autoplay>
          <div>
            <Image />
          </div>
          <div>
            <Dessert />
          </div>
        </Carousel>
      </div>
      <p>
        Vi serverar medelhavets godaste maträtter.
        Vår specialitet är bland annat Grekiska, Turkiska och Libanesiska maträtter.
        Vi finns på tredje Långgatan 29.
      </p>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Förrätter" key="1">
          <Menu menu={starters}/>
        </TabPane>
        <TabPane tab="Huvudrätter" key="2">
          <Menu menu={mainCourses}/>
        </TabPane>
        <TabPane tab="Fiskrätter" key="3">
          <Menu menu={fish}/>
        </TabPane>
        <TabPane tab="Vegetariska rätter" key="4">
          <Menu menu={vegetarian}/>
        </TabPane>
        <TabPane tab="Barnmeny" key="5">
          <Menu menu={kids}/>
        </TabPane>
        <TabPane tab="Medelhavs dessert" key="6">
          <Menu menu={desserts}/>
        </TabPane>
      </Tabs>
      <div style={{ fontSize: `12px` }}>Icons made by
        <a href="https://www.freepik.com/" title="Freepik">Freepik </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0
          BY</a>
      </div>
    </Layout>
  )}

export default IndexPage
