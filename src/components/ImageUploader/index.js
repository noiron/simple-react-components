/**
 * 图片上传组件，点击图标后选择图片进行上传
 */
import React from 'react';
import Toast from 'light-toast';
import styled from 'styled-components';

const image_icon = require('../../assets/images/add-img.png');

const UploaderBox = styled.div`
  img.upload-icon {
    width: 20px;
    height: 20px;
  }
  input {
    display: none;
  }
`;

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
    const files = this.input.files || [];

    if (files.length > 0) {
      const file = files[0];  
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target.result;
        this.props.insertImage(src);
      }
      reader.readAsDataURL(file);
    }
  }


  render() {
    return (
      <UploaderBox className="image-uploader">
        <img src={image_icon} onClick={this.handleIconClick} className="upload-icon" alt="上传图片" />
        <input
          ref={e => this.input = e}
          type="file"
          accept="image/*"
          onClick={this.handleInputClick}
          onChange={this.handleInputChange}
          multiple={false}
        />
      </UploaderBox>
    )
  }
}


export default ImageUploader;



