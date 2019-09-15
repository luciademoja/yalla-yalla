import { Menu } from 'antd';
import React, { Component } from "react"

export class Navbar extends Component {

  state = {
    current: ''
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ background: 'rebeccapurple', fontSize: '30px' }}>
        <Menu.Item key="bar" style={{ color: 'white' }}>
          Bar
        </Menu.Item>
        <Menu.Item key="booking">
          <a href="https://www.thefork.com/restaurant/yalla-yalla-meze/464557" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            Boka bord
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;