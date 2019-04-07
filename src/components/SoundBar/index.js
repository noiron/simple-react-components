/**
 * 播放声音组件，样式类似于微信内的语音
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import useInterval from '../../hooks/useInterval';


const sound_bar_icon = require('../../assets/images/sound-bar.png');
const playingIcons = [
  require('../../assets/images/wifi-1.png'),
  require('../../assets/images/wifi-2.png'),
  require('../../assets/images/wifi-3.png'),
];

const SoundBarBox = styled.div`
  position: relative;
`;

const BubbleIcon = styled.img`
  width: 125px;
  &:active {
    opacity: 0.8;
  }
`;

const PlayingIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 24px;
  width: 11px;
`; 

export default function SoundBar(props) {
  const audio = new Audio(props.url);
  audio.onended = initStatus;

  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState(2);
  const imgSrc = playingIcons[status];

  function initStatus() {
    setPlaying(false);
    setStatus(2);
  }

  useInterval(() => {
    setStatus((status + 1) % 3);
  }, playing ? 500 : null)

  async function handlePlaySound(e) {
    e.stopPropagation();
    try {
      if (!playing) {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SoundBarBox onClick={e => handlePlaySound(e)}>
      <BubbleIcon src={sound_bar_icon} />
      <PlayingIcon className="wifi" src={imgSrc}></PlayingIcon>
    </SoundBarBox>
  )
}
