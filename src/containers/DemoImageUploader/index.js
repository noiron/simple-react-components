import * as React from 'react';
import styled from 'styled-components';
import ImageUploader from '../../components/ImageUploader';
import ImagePreview from './ImagePreview';

const DemoBox = styled.div`
  font-size: 16px;
  margin: 20px;
`;

class DemoImageUploader extends React.Component {


  constructor() {
    super();

    this.state = {
      imageList: []
    }
  }


  insertImage = (src) => {
    this.setState({
      imageList: [...this.state.imageList, src]
    });
  }


  render() {
    const { imageList } = this.state;

    return (
      <DemoBox>
        <ImageUploader
          insertImage={this.insertImage}
          imageList={imageList}
          limit={9}
          currentCount={imageList.length}
        />

        {imageList.map((img, index) => (
          <ImagePreview src={img} alt="" key={index} />
        ))}
      </DemoBox>
    );
  }
}

export default DemoImageUploader;
