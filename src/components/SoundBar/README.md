
# 一个声音播放组件

## 实现

使用了 `useState` hook 来标记播放/停止的状态。

### `useState` 和 `setInterval` 的注意事项

用一个循环改变的 `status` 值来处理播放的动画。`useState` 和 `setInterval` 的组合使用有一点需要注意。

```js
const [status, setStatus] = useState(2);

setInterval(() => {
  setStatus((status + 1) % 3);
}, 500)
```

上面的写法是存在问题的，`status` 的值只会是0和2。需要做如下的一点改变。

```js
const [status, setStatus] = useState(2);

setInterval(() => {
  setStatus(status => (status + 1) % 3);
}, 500)
```

也可以使用 Dan Abramov 在[这篇文章](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)中介绍的 `useInterval` 这个 hook 来解决。


## Audio 的使用

可以使用 `new Audio()` 来创建一个 audio 对象，利用 `onended` 事件来进行播放完毕的清理工作。

注意这里的 `audio.play()` 是一个异步操作，它返回的是一个 `Promise`。

```js
const audio = new Audio(props.url);
audio.onended = initStatus;
await audio.play();
```

> https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
> 
> https://developers.google.com/web/updates/2017/06/play-request-was-interrupted


