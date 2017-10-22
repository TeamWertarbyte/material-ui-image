import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui'
import common from 'material-ui/colors/common'
import grey from 'material-ui/colors/grey'
import { BrokenImage } from 'material-ui-icons'

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will fade in like the material image loading pattern suggests.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */
export default class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageError: false,
      imageLoaded: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        imageError: false,
        imageLoaded: false
      })
    }
  }

  getStyles () {
    const {
      aspectRatio,
      color,
      imageStyle,
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
        filterBrightness: !this.state.imageLoaded ? 0 : 100,
        filterSaturate: !this.state.imageLoaded ? 20 : 20,
        transition: 'filterBrightness 2.5s cubic-bezier(0.4, 0.0, 0.2, 1), filterSaturate 3s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 2s cubic-bezier(0.4, 0.0, 0.2, 1)',
        position: 'absolute',
        top: 0,
        left: 0,
        ...imageStyle
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
      loading,
      onClick,
      ...image
    } = this.props

    return (
      <div
        style={styles.root}
        onClick={onClick}
      >
        {image.src && <img
          {...image}
          style={styles.image}
          onLoad={() => this.setState({imageLoaded: true})}
          onError={() => this.setState({imageError: true})}
        />}
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {!disableSpinner && !this.state.imageLoaded && !this.state.imageError && loading}
          {!disableError && this.state.imageError && errorIcon}
        </div>
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
  loading: <CircularProgress size={48} />
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
  /** Override the loading component. */
  loading: PropTypes.node,
  /** Fired when the user clicks on the image happened. */
  onClick: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
