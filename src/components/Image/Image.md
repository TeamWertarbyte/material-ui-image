Normal:
```
const { Button } = require('material-ui');
initialState = {
  foo: false
};

<div>
  <Image
    src={state.foo ? "http://lorempixel.com/1600/900/people/" : "http://lorempixel.com/1600/900/nature/"}
    onClick={() => console.log('onClick')}
    aspectRatio={(16/9)}
  />
  <Button raised onClick={() => setState({foo: !state.foo})}>
    Reload
  </Button>
</div>
```

Loading:
```
<Image
  onClick={() => console.log('onClick')}
  aspectRatio={(16/9)}
/>
```

Error:
```
<Image
  src="http://lorempixels.com/1600/900/nature/"
  onClick={() => console.log('onClick')}
  aspectRatio={(16/9)}
/>
```
