import React from "react";
import { List } from 'antd';

const SingleMenu = ({ menu }) => {
  const otherPrice = (dish) => dish.otherPrice ? '(4cl) | ' + dish.otherPrice + ' (6cl)' : '';

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={menu}
        renderItem={dish => (
          <List.Item>
            <List.Item.Meta
              title={dish.name +  ' | ' + dish.price + otherPrice(dish)}
              description={dish.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default SingleMenu;