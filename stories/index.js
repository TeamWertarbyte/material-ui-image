import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Image } from '../src'
import { themed } from './storyUtil'

storiesOf('Image', module)
  .add('normal', () => themed(
    <Image
      src="http://loremflickr.com/300/200"
    />
  ))
  .add('normal without spinner', () => themed(
    <Image
      src="http://loremflickr.com/300/200"
      disableSpinner
    />
  ))
  .add('loading', () => themed(
    <Image
    />
  ))
  .add('error', () => themed(
    <Image
      src="http://loremflickrs.com/300/200"
    />
  ))

storiesOf('ImageGrid', module)
  .add('normal', () => themed(
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...Array(10)].map((x, i) =>
        <Image
          key={i + 1}
          src="http://loremflickr.com/300/200"
          style={{ position: 'relative', margin: 4 }}
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
        />
      )}
    </div>
  ))
