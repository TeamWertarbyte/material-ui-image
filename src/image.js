import React, { Component, PropTypes } from 'react'
import { RefreshIndicator } from 'material-ui'
import * as colors from 'material-ui/styles/colors'

function getRandomColor() {
  const colorNames = Object.keys(colors)
  return colors[colorNames[Math.floor(colorNames.length * Math.random())]]
}

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
      color: getRandomColor()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        color: getRandomColor()
      })
    }
  }

  render() {
    const { color, disableSpinner, imageStyle, src, style, loadingSize, loadingStyle } = this.props

    return (
      <div style={{ ...styles.root, backgroundColor: color || this.state.color, ...style }}>
        {!disableSpinner && !this.state.imageLoaded && !this.state.imageError ?
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
            style={{ ...styles.img, opacity: !this.state.imageLoaded ? 0 : 1, transition: 'opacity 300ms ease-in-out', ...imageStyle }}
            onLoad={() => this.setState({ imageLoaded: true })}
            onError={() => this.setState({ imageError: true })}
          /> : null
        }
      </div>
    )
  }
}

Image.defaultProps = {
  disableSpinner: false,
  loadingSize: 40
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  disableSpinner: PropTypes.bool,
  onTouchTap: PropTypes.func,
  style: PropTypes.object,
  imageStyle: PropTypes.object,
  loadingSize: PropTypes.number,
  loadingStyle: PropTypes.object
}