import React, { Component, PropTypes } from 'react'
import { RefreshIndicator } from 'material-ui'

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
    this.state = {
      imageLoaded: false,
      imageError: false
    }
  }

  render() {
    const { src } = this.props
    const loadingSize = this.props.loadingSize || 40

    return (
      <div style={{ ...styles.root, ...this.props.style }}>
        {!this.state.imageLoaded && !this.state.imageError ?
          <RefreshIndicator
            size={loadingSize}
            left={this.props.style && this.props.style.width ? (this.props.style.width / 2) - (loadingSize) : styles.root.width / 2 - (loadingSize / 2)}
            top={this.props.style && this.props.style.height ? (this.props.style.height / 2) - (loadingSize) : styles.root.height / 2 - (loadingSize / 2)}
            status="loading"
            style={{ ...styles.loading, ...this.props.loadingStyle }}
          /> : null
        }
        {src ?
          <img
            {...this.props}
            onClick={this.props.onTouchTap}
            style={{ ...styles.img, ...this.props.imageStyle }}
            onLoad={() => this.setState({ imageLoaded: true })}
            onError={() => this.setState({ imageError: true })}
          /> : null
        }
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onTouchTap: PropTypes.func,
  style: PropTypes.object,
  imageStyle: PropTypes.object,
  loadingSize: PropTypes.number,
  loadingStyle: PropTypes.object
}