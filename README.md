# Material UI Image
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-image.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-image)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-image.svg)](https://greenkeeper.io/)

Images are ugly until they're loaded. Materialize it with material image! It will fade in like the material image loading pattern suggests.

![Example](demo.gif)

## Installation

**Stable channel**
```sh
npm install material-ui-image
```

**Pre-release channel**
```sh
npm install material-ui-image@next
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

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
|src*              | `string`   |                                          | Specifies the URL of an image.
|aspectRatio       | `float`    | (1/1)                                    | Specifies the aspect ratio of the image.
|color             | `string`   | white                                    | Override the background color.
|disableError      | `bool`     | false                                    | Disables the error icon if set to `true`.
|disableSpinner    | `bool`     | false                                    | Disables the loading spinner if set to `true`.
|disableTransition | `bool`     | false                                    | Disables the transition if set to `true`.
|errorIcon         | `node`     | <BrokenImage />                          | Override the error icon.
|imageStyle        | `object`   | { width: 'inherit', height: 'inherit' }  | Override the inline-styles of the image.
|loading           | `node`     | <CircularProgress size={48} />           | Override the loading component.
|onClick           | `func`     |                                          | Fired when the user clicks on the image happened.
|style             | `object`   |                                          | Override the inline-styles of the root element.

\* required property

## License

The files included in this repository are licensed under the MIT license.
