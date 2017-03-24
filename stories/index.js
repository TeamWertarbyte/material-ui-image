import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { Image } from '../src'
import { themed } from './storyUtil'
import * as colors from 'material-ui/styles/colors'

storiesOf('Image', module)
  .add('normal', () => themed(
    <Image
      src="http://loremflickr.com/300/200"
      onTouchTap={action('onClick')}
    />
  ))
  .add('normal custom color red', () => themed(
    <Image
      src="http://loremflickr.com/300/200"
      color={colors.red900}
      onTouchTap={action('onClick')}
    />
  ))
  .add('normal without spinner', () => themed(
    <Image
      src="http://loremflickr.com/300/200"
      disableSpinner
      onTouchTap={action('onClick')}
    />
  ))
  .add('loading', () => themed(
    <Image
      onTouchTap={action('onClick')}
    />
  ))
  .add('error', () => themed(
    <Image
      src="http://loremflickrs.com/300/200"
      onTouchTap={action('onClick')}
    />
  ))

storiesOf('ImageGrid', module)
  .add('normal', () => themed(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...Array(10)].map((x, i) =>
        <Image
          src="http://loremflickr.com/300/200"
          style={{ position: 'relative', margin: 4 }}
          onTouchTap={action('onClick')}
        />
      )}
    </div>
  ))
  .add('normal custom color red', () => themed(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...Array(10)].map((x, i) =>
        <Image
          key={i + 1}
          src="http://loremflickr.com/300/200"
          style={{ position: 'relative', margin: 4 }}
          color={colors.red900}
          onTouchTap={action('onClick')}
        />
      )}
    </div>
  ))
  .add('normal without spinner', () => themed(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...Array(10)].map((x, i) =>
        <Image
          key={i + 1}
          src="http://loremflickr.com/300/200"
          disableSpinner
          style={{ position: 'relative', margin: 4 }}
          onTouchTap={action('onClick')}
        />
      )}
    </div>
  ))
  .add('loading', () => themed(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...Array(10)].map((x, i) =>
        <Image
          key={i + 1}
          style={{ position: 'relative', margin: 4 }}
          onTouchTap={action('onClick')}
        />
      )}
    </div>
  ))
