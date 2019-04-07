import * as React from 'react';
import styled from 'styled-components';
import SoundBar from '../components/SoundBar';

const DemoBox = styled.div`
  font-size: 22px;
`;

class DemoSoundBar extends React.Component {
  render() {
    return (
      <DemoBox>
        <p>声音播放组件</p>
        <SoundBar url={'http://bbcsfx.acropolis.org.uk/assets/07039219.wav'} />
      </DemoBox>
    );
  }
}

export default DemoSoundBar;
