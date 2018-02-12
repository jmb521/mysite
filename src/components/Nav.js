import React, { Component } from 'react'
import { Menu, Segment, Grid } from 'semantic-ui-react'

class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
      <Grid>
      <Grid.Column width={2} />
      <Grid.Column width={12} >
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu>
      </Grid.Column>
      <Grid.Column width={2} />
      </Grid>
      </Segment>
    )
  }
} export default Nav
