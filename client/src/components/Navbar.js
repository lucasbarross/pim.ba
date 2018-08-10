import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary id="menu">
        <Menu.Item 
        active={activeItem === 'home'} 
        onClick={this.handleItemClick}>
        <img id="logo" src="https://i.imgur.com/ysaO2wd.png"/>
        </Menu.Item>
      <Menu.Menu  id="bar" position = 'right'>
      <Menu.Item  id="bar">
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
      </Menu.Menu>  

        
        <Menu.Menu position='right'>
          
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}