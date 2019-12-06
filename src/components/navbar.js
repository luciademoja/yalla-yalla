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
          <a href="https://www.thefork.com/restaurant/yalla-yalla-meze/464557" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            Boka
          </a>
        </Menu.Item>
        <Menu.Item key="contact" style={{ color: 'white', fontFamily: 'monospace' }}>
          <Link to="/contacts">
            Kontakt
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;