import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({})

export default class Wrapper extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
