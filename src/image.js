import React, { Component, PropTypes } from 'react'
import _ from 'underscore'
import { RefreshIndicator } from 'material-ui'
import * as colors from 'material-ui/styles/colors'

const styles = {
  root: {
    width: 300,
    height: 200
  },
  loading: {
    position: 'relative'
  },
  img: {
    width: 'inherit',
    height: 'inherit'
  }
}

export class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getRandomColor() {
    return _.sample(colors)
  }

  render() {
    const { imageStyle, src, style, loadingSize, loadingStyle } = this.props

    return (
      <div style={{ ...styles.root, ...style, backgroundColor: this.getRandomColor() }}>
        {!this.state.imageLoaded && !this.state.imageError ?
          <RefreshIndicator
            size={loadingSize}
            left={style && style.width ? (style.width / 2) - (loadingSize) : styles.root.width / 2 - (loadingSize / 2)}
            top={style && style.height ? (style.height / 2) - (loadingSize) : styles.root.height / 2 - (loadingSize / 2)}
            status="loading"
            style={{ ...styles.loading, ...loadingStyle }}
          /> : null
        }
        {src ?
          <img
            {...this.props}
            onClick={this.props.onTouchTap}
            style={{ ...styles.img, ...imageStyle }}
            onLoad={() => this.setState({ imageLoaded: true })}
            onError={() => this.setState({ imageError: true })}
          /> : null
        }
      </div>
    )
  }
}

Image.defaultProps = {
  loadingSize: 40
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onTouchTap: PropTypes.func,
  style: PropTypes.object,
  imageStyle: PropTypes.object,
  loadingSize: PropTypes.number,
  loadingStyle: PropTypes.object
}