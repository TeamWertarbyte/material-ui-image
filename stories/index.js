import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import { Image } from '../src'
import { themed } from './storyUtil'

storiesOf('Image', module)
  .add('loading', () => themed(
    <Image
    />
  ))
  .add('normal', () => themed(
    <Image
      src="http://lorempixel.com/g/400/200"
    />
  ))
  .add('error', () => themed(
    <Image
      src="http://lorjjempixel.com/g/400/200"
    />
  ))