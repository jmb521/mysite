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
          <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
          <Menu.Item name='github' active={activeItem === 'github'} onClick={this.handleItemClick} href="http://www.github.com/jmb521" />
          <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick} href="http://aurorarubydev.blogspot.com" />
        </Menu>
      </Grid.Column>
      <Grid.Column width={2} />
      </Grid>
      </Segment>
    )
  }
} export default Nav
