Normal:
```
const { Button } = require('@material-ui/core');
initialState = {
  count: 0,
  show: true
};

reload = () => {
  setState({ show: false })
  setTimeout(() => setState(state => ({ count: state.count + 1, show: true })), 500)
}

<div>
  <Image
    src={state.show ? `https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg?_=${state.count}` : ''}
    onClick={() => console.log('onClick')}
    aspectRatio={(16/9)}
    disableSpinner
  />
  <Button variant='raised' onClick={reload}>
    Reload
  </Button>
</div>
```

Loading:
```
<Image
  onClick={() => console.log('onClick')}
  src=''
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
