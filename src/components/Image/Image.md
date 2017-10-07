Normal:
```
    <Image
      src="http://loremflickr.com/300/200"
      onTouchTap={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```
Loading:
```
    <Image
      onTouchTap={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```
Error:
```
    <Image
      src="http://loremflickrs.com/300/200"
      onTouchTap={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```