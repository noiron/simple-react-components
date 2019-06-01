# 图片上传组件的实现

首先需要一个接收 `image/*` 类型的 input 组件，这里添加了一个 ref，所以可以通过 `this.input` 来引用它
```jsx
<input
  ref={e => this.input = e}
  type="file"
  accept="image/*"
  onClick={this.handleInputClick}
  onChange={this.handleInputChange}
  multiple={false}
/>
```

然后需要一个上传按钮，可以用一张图片来代替
```jsx 
<img src={image_icon} onClick={this.handleIconClick} className=“upload-icon” alt=“上传图片” />
```

因为不同平台的 input 元素的样式不统一，所以通过 css 样式来隐藏 input 元素，然后在上传按钮被点击时，触发 input 的点击事件来进行上传操作。
```js
if (this.input.files) {
  this.input.click();
}
```

如果不需要将图片上传到服务器，可以利用 `FileReader` 这个 API 来将选择的图片转换成 base64 的地址，直接将其显示出来。

`File​Reader​.readAsDataURL` 用于读取 `Blob` 或 `File` 类型，在读取文件之后，监听 `load` 事件，可以获取 `result` 属性。这里将文件数据经过 base64 编码得到的字符串，利用 `data:URL` 形式保存在`result` 属性中。

```js
const reader = new FileReader();
reader.onload = (e) => {
  const src = e.target.result;
  this.props.insertImage(src);
}
reader.readAsDataURL(file);
```


> [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) 
> [FileReader.readAsDataURL() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)
