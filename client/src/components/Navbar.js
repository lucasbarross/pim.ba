import React, { Component } from 'react'
import { Input, Menu, Modal, Button, Header, Icon, Form } from 'semantic-ui-react'
import CheckboxInfo from './CheckBoxInfo'
import Chips, { Chip } from 'react-chips';
import * as api from '../util/api.js'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home', checkboxes: [],  chips: [] }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  async componentDidMount() {
    let categories = await api.getCategories();
    categories = categories.data.foundCategories;
    this.setState({ chips:[categories]})
  }

  onChange = chips => {
    this.setState({chips});
  }

  addCheckboxItem = (e) => {
    this.setState({ checkboxes: [...this.state.checkboxes, <CheckboxInfo key={this.state.checkboxes.length + 1} />] })
  }
  render() {
    const { activeItem, checkboxes } = this.state
    return (

      <Menu secondary id="menu">

        <Menu.Item
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <img id="logo" src="https://i.imgur.com/ysaO2wd.png" />
        </Menu.Item>

        <Menu.Menu id="bar" position='right'>

          <Menu.Item id="bar">
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>

          <Modal trigger={<Menu.Item id="button"
            name='contribua!'
            onClick={this.handleItemClick}
          />}>
            <Modal.Header>Criação de projeto</Modal.Header>

            <Modal.Content image>
              <Modal.Description>

                <Form>
                  <Form.Field>
                    <label>Nome do Projeto</label>
                    <input placeholder='Nome do Projeto' />
                  </Form.Field>

                  <Form.Field>
                    <label>Descrição do Projeto</label>
                    <input placeholder='Descrição do Projeto' />
                  </Form.Field>

                  <Button secondary id="button" onClick={this.addCheckboxItem}>
                    Adicionar Checkbox
                  </Button>

                  {checkboxes}

                  <Form.Field>
                    <label>Links Úteis</label>
                    <input placeholder='Links Úteis' />
                  </Form.Field>

                    <label>Tags</label>
                    <Chips
                      value={this.state.chips}
                      onChange={this.onChange}
                      suggestions={[]}
                    />
                </Form>
              </Modal.Description>
            </Modal.Content>

            <Modal.Actions>

              <Button primary id="button">
                Proceder
              </Button>
            </Modal.Actions>
          </Modal>

          <Menu.Item id="button"
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.props.auth.logout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}