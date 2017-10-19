Normal:
```
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Salzburg_from_Gaisberg_big_version.jpg"
      onClick={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```
Loading:
```
    <Image
      onClick={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```
Error:
```
    <Image
      src="http://loremflickrs.com/300/200"
      onClick={() => console.log('onTouchTap')}
      aspectRatio={(3/2)}
    />
```
