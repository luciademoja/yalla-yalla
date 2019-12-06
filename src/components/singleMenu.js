import React from "react";
import { List } from 'antd';

const SingleMenu = ({ menu }) => {
  const otherPrice = (dish) => dish.otherPrice ? '(4cl) | ' + dish.otherPrice + ' (6cl)' : '';
  const price = (dish) => ' | ' + dish.price + otherPrice(dish);

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={menu}
        renderItem={dish => (
          <List.Item>
            <List.Item.Meta
              title={dish.name + (dish.price ? price(dish) : '')}
              description={dish.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default SingleMenu;