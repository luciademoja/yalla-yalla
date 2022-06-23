import { Menu } from 'antd';
import React, { Component } from "react"
import { Link } from "gatsby"

export class Navbar extends Component {

  state = {
    current: ''
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ background: 'transparent', fontSize: '30px' }}>
        <Menu.Item key="menu" style={{ color: 'white', fontFamily: 'monospace' }}>
          <Link to="/menu">
            Meny
          </Link>
        </Menu.Item>
        <Menu.Item key="booking" style={{ color: 'white', fontFamily: 'monospace' }}>
          <Link to="/booking">
            Boka
          </Link>
        </Menu.Item>
        <Menu.Item key="opening" style={{ color: 'white', fontFamily: 'monospace' }}>
          <Link to="/opening">
            Öppettider
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;