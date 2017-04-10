import React, { Component, PropTypes } from 'react'
import { RefreshIndicator } from 'material-ui'
import { ImageBrokenImage } from 'material-ui/svg-icons'
import * as colors from 'material-ui/styles/colors'

function getRandomColor () {
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
  constructor (props) {
    super(props)
    this.state = {
      color: getRandomColor()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        color: getRandomColor()
      })
    }
  }

  render () {
    const {
      color,
      disableError,
      disableSpinner,
      errorSize,
      imageStyle,
      style,
      loadingSize,
      loadingStyle,
      onTouchTap,
      ...image
    } = this.props

    return (
      <div
        style={{
          ...styles.root,
          backgroundColor: color || this.state.color,
          ...style
        }}
        onTouchTap={onTouchTap}
      >
        {!disableSpinner && !this.state.imageLoaded && !this.state.imageError && <RefreshIndicator
          size={loadingSize}
          left={style && style.width ? (style.width / 2) - (loadingSize) : styles.root.width / 2 - (loadingSize / 2)}
          top={style && style.height ? (style.height / 2) - (loadingSize) : styles.root.height / 2 - (loadingSize / 2)}
          status="loading"
          style={{
            ...styles.loading,
            ...loadingStyle
          }}
        />}
        {!disableError && this.state.imageError && <div style={{
          position: 'relative',
          left: (style && style.width ? (style.width / 2) - (errorSize) : styles.root.width / 2 - (errorSize / 2)),
          top: (style && style.height ? (style.height / 2) - (errorSize) : styles.root.height / 2 - (errorSize / 2))
        }}>
          <ImageBrokenImage
            color={colors.grey300}
            style={{
              width: errorSize,
              height: errorSize
            }}
          />
        </div>}
        {image.src && !this.state.imageError && <img
          {...image}
          style={{
            ...styles.img,
            opacity: !this.state.imageLoaded ? 0 : 1,
            animation: !this.state.imageLoaded ? '' : 'filter-animation 1s',
            ...imageStyle
          }}
          onLoad={() => this.setState({imageLoaded: true})}
          onError={() => this.setState({imageError: true})}
        />}
      </div>
    )
  }
}

Image.defaultProps = {
  disableError: false,
  disableSpinner: false,
  errorSize: 48,
  loadingSize: 40
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  disableError: PropTypes.bool,
  color: PropTypes.string,
  disableSpinner: PropTypes.bool,
  errorSize: PropTypes.number,
  imageStyle: PropTypes.object,
  loadingSize: PropTypes.number,
  loadingStyle: PropTypes.object,
  onTouchTap: PropTypes.func,
  style: PropTypes.object
}
