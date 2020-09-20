Normal:
```
const { Button } = require('@material-ui/core');

const [state, setState] = React.useState({
  count: 0,
  show: true
});

reload = () => {
  setState(state => ({ ...state, show: false }))
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
  src="http://brokenimage"
  onClick={() => console.log('onClick')}
  aspectRatio={(16/9)}
/>
```
