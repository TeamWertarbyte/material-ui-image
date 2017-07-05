import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RefreshIndicator } from 'material-ui'
import { ImageBrokenImage } from 'material-ui/svg-icons'
import * as colors from 'material-ui/styles/colors'

function getRandomColor () {
  const colorNames = Object.keys(colors)
  return colors[colorNames[Math.floor(colorNames.length * Math.random())]]
}

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will show a random material color as background and a loading animation until it's fully loaded.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */
export default class Image extends Component {
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

  getStyles () {
    const {
      color,
      errorSize,
      style
    } = this.props

    const styles = {
      root: {
        width: 300,
        height: 200,
        backgroundColor: color || this.state.color,
      },
      loading: {
        position: 'relative'
      },
      img: {
        width: 'inherit',
        height: 'inherit',
        opacity: !this.state.imageLoaded ? 0 : 1,
        animation: !this.state.imageLoaded ? '' : 'filter-animation 1s',
      },
      errorContainer: {
        position: 'relative',
        left: (style && style.width ? (style.width / 2) - (errorSize) : 300 / 2 - (errorSize / 2)),
        top: (style && style.height ? (style.height / 2) - (errorSize) : 200 / 2 - (errorSize / 2))
      },
      errorIcon: {
        width: errorSize,
        height: errorSize
      }
    }

    return styles
  }

  render () {
    const styles = this.getStyles()

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
        {!disableError && this.state.imageError && <div style={styles.errorContainer}>
          <ImageBrokenImage
            color={colors.grey300}
            style={styles.errorIcon}
          />
        </div>}
        {image.src && !this.state.imageError && <img
          {...image}
          style={{
            ...styles.img,
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
  /** Specifies the URL of an image. */
  src: PropTypes.string.isRequired,
  /** Override the background color. */
  color: PropTypes.string,
  /** Disables the error icon if set to true. */
  disableError: PropTypes.bool,
  /** Disables the loading spinner if set to true. */
  disableSpinner: PropTypes.bool,
  /** Set the size of the error icon. */
  errorSize: PropTypes.number,
  /** Override the inline-styles of the image. */
  imageStyle: PropTypes.object,
  /** Set the size of the refresh indicator. */
  loadingSize: PropTypes.number,
  /** Override the inline-styles of the refresh indicator. */
  loadingStyle: PropTypes.object,
  /** Fired when the user clicks on the image happened. */
  onTouchTap: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
