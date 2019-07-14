import React from "react";
import { List } from 'antd';

const Menu = ({ menu }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={menu}
        renderItem={dish => (
          <List.Item>
            <List.Item.Meta
              title={dish.name +  ' | ' + dish.price}
              description={dish.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Menu;