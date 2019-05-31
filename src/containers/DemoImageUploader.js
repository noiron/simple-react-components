import * as React from 'react';
import styled from 'styled-components';
import ImageUploader from '../components/ImageUploader';

const DemoBox = styled.div`
  font-size: 22px;
  margin: 20px;

  .image-uploader {
    display: inline-block;
    img.upload-icon {
      width: 20px;
      height: 20px;
    }
    input {
      display: none;
    }
    .preview {
      display: flex;
    }
  }
`;

class DemoImageUploader extends React.Component {
  render() {
    return (
      <DemoBox>
        <ImageUploader></ImageUploader>
      </DemoBox>
    );
  }
}

export default DemoImageUploader;
