# Material UI Image
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-image.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-image)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-image.svg)](https://greenkeeper.io/)

Images are ugly until they're loaded. Materialize it with material image! It will show a random material color as background and a loading animation until it's fully loaded.

See this component in [action](https://teamwertarbyte.github.io/material-ui-image)

## Installation
```shell
npm i --save material-ui-image
```

## Usage

Use this component just like a regular img tag.

```js
import Image from 'material-ui-image'

// ...

render() {
  return (
    <div>
      <Image
        src="http://loremflickr.com/300/200"
      />
    </div>
  )
}
```

### Material UI Image Properties

|Name            |Type        |Default                                   |Description
|----------------|------------|------------------------------------------|--------------------------------
|src*            | `string`   |                                          | Specifies the URL of an image.
|color           | `string`   | random color                             | Override the background color.
|disableError    | `bool`     | false                                    | Disables the error icon if set to `true`.
|disableSpinner  | `bool`     | false                                    | Disables the loading spinner if set to `true`.
|errorSize       | `integer`  | 48                                       | Set the size of the error icon.
|imageStyle      | `object`   | { width: 'inherit', height: 'inherit' }  | Override the inline-styles of the image.
|loadingSize     | `integer`  | 40                                       | Set the size of the refresh indicator.
|loadingStyle    | `object`   | { position: 'relative' }                 | Override the inline-styles of the refresh indicator.
|onTouchTap      | `func`     |                                          | Fired when the user clicks on the image happened.
|style           | `object`   | { width: 300, height: 200 }              | Override the inline-styles of the root element.

\* required property

## License

The files included in this repository are licensed under the MIT license.
