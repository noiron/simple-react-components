# Toast 组件的实现

每个弹出的通知都是一个 Notice 组件，而 Notification 是承载这些通知的容器组件。Notification 还有一个 reWrite 方法，在这里创建了一个 Notification 的实例，并暴露出了操纵这个实例的方法给 Toast。

```js
Notification.reWrite = (properties) => {

  const props = properties || {};

  const div = document.createElement('div');
  document.body.appendChild(div);

  // 将 notification 渲染到 div 上去
  const notification = ReactDOM.render(
    <Notification {...props} />, div
  );

  return {
    notice: (noticeProps) => {
      notification.addNotice(noticeProps);
    },

    destroy: () => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  }
}
```

---

## 参考

> https://segmentfault.com/a/1190000009863702