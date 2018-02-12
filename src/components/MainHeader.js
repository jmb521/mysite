import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
class MainHeader extends Component {

  render() {
    return (

        <Grid className="background">
        <Grid.Row />
        
          <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} textAlign={"center"}>

              <h1 className="name">Jennifer Pazos</h1>
              <p className="subheader">FullStack Web Developer</p>
            </Grid.Column>

            <Grid.Column width={4} />
          </Grid.Row>
          <Grid.Row />

        </Grid>

    )
  }
} export default MainHeader
