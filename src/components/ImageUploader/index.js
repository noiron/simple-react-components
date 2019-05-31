/**
 * 图片上传组件，点击图标后选择图片进行上传
 */
import React from 'react';
import Toast from 'light-toast';

const image_icon = require('../../assets/images/add-img.png');

class ImageUploader extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      imageList: [],
    };
  }

  // 点击上传图片图标的时候触发上传图片
  handleIconClick = (e) => {
    if (this.isImageLimitReached()) {
      return;
    }
    if (this.input.files) {
      this.input.click();
    }
  }

  isImageLimitReached = () => {
    const { limit, currentCount } = this.props;
    if (currentCount >= limit) {
      Toast.fail(`最多上传${limit}张图片`, 1500);
      return true;
    }
    return false;
  }


  handleInputClick = (e) => {
    e.stopPropagation();
  }

  handleInputChange = async () => {
    // TODO: 插入图片的操作

  }


  render() {
    return (
      <div className="image-uploader">
        <img src={image_icon} onClick={this.handleIconClick} className="upload-icon" alt="上传图片" />
        <input
          ref={e => this.input = e}
          type="file"
          accept="image/*"
          onClick={this.handleInputClick}
          onChange={this.handleInputChange}
          multiple={false}
        />
      </div>
    )
  }
}


export default ImageUploader;

