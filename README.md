# Material UI Image

Images are ugly until they're loaded. Materialize it with material image! It will show a random material color as background and a loading animation until it's fully loaded.

## Installation
```shell
npm i --save material-ui-image
```

## Usage

Use this component just like a regular img tag.

```js
import { Image } from 'material-ui-image'

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
|disableSpinner  | `bool`     | false                                    | Disables the loading spinner if set to `true`.
|imageStyle      | `object`   | { width: 'inherit', height: 'inherit' }  | Override the inline-styles of the image.
|loadingSize     | `integer`  | 40                                       | Set the size of the refresh indicator.
|loadingStyle    | `object`   | { position: 'relative' }                 | Override the inline-styles of the refresh indicator.
|onTouchTap      | `func`     |                                          | Fired when the user clicks on the image happened.
|style           | `object`   | { width: 300, height: 200 }              | Override the inline-styles of the root element.

\* required property

## License

The files included in this repository are licensed under the MIT license.
