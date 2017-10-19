import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui'
import common from 'material-ui/colors/common'
import grey from 'material-ui/colors/grey'
import { BrokenImage } from 'material-ui-icons'

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will show a random material color as background and a loading animation until it's fully loaded.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */
export default class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getStyles () {
    const {
      aspectRatio,
      color,
      errorSize,
      style
    } = this.props

    const styles = {
      root: {
        backgroundColor: color,
        paddingTop: `calc(1 / ${aspectRatio} * 100%)`,
        position: 'relative',
        ...style
      },
      image: {
        width: '100%',
        height: '100%',
        opacity: !this.state.imageLoaded ? 0 : 1,
        animation: !this.state.imageLoaded ? '' : 'filter-animation 1s',
        position: 'absolute',
        top: 0,
        left: 0
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
      aspectRatio,
      color,
      disableError,
      disableSpinner,
      errorIcon,
      imageStyle,
      style,
      loadingSize,
      loadingStyle,
      onClick,
      ...image
    } = this.props

    return (
      <div
        style={styles.root}
        onClick={onClick}
      >
        {image.src && !this.state.imageError ? <img
          {...image}
          style={{
            ...styles.image,
            ...imageStyle
          }}
          onLoad={() => this.setState({imageLoaded: true})}
          onError={() => this.setState({imageError: true})}
        /> : <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {!disableSpinner && !this.state.imageLoaded && !this.state.imageError && <CircularProgress
            size={loadingSize}
            style={{
              ...loadingStyle
            }}
          />}
          {!disableError && this.state.imageError && errorIcon}
        </div>}
      </div>
    )
  }
}

Image.defaultProps = {
  aspectRatio: 1,
  color: common.fullWhite,
  disableError: false,
  disableSpinner: false,
  errorIcon: <BrokenImage color={grey[300]} style={{width: 48, height: 48}} />,
  loadingSize: 40
}

Image.propTypes = {
  /** Specifies the URL of an image. */
  src: PropTypes.string.isRequired,
  /** Override aspect ratio. */
  aspectRatio: PropTypes.number,
  /** Override the background color. */
  color: PropTypes.string,
  /** Disables the error icon if set to true. */
  disableError: PropTypes.bool,
  /** Disables the loading spinner if set to true. */
  disableSpinner: PropTypes.bool,
  /** Override the error icon. */
  errorIcon: PropTypes.node,
  /** Override the inline-styles of the image. */
  imageStyle: PropTypes.object,
  /** Set the size of the refresh indicator. */
  loadingSize: PropTypes.number,
  /** Override the inline-styles of the refresh indicator. */
  loadingStyle: PropTypes.object,
  /** Fired when the user clicks on the image happened. */
  onClick: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
