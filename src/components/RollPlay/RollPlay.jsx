// 效果 - 滚动播放

import React, { useState } from 'react';
import './RollPlay.scss';

// import GptDark from '@/assets/images/chatgpt.svg';

const TAGS = [
  'GPT-3.x',
  'GPT-4o',
  'Gemini 1.5',
  'Claude 3.5',
  'Coze',
  '通义千问',
  '星火大模型',
  '文心一言',
  '豆包',
  '智谱清言',
  '混元',
  '盘古',
  'Kimi',
];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 20;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    {/* <img src={GptDark} style={{ height: '18px' }} alt="" /> */}
    <span>#</span> {text}
  </div>
);

const TagList = () => {
  const [tags, setTags] = useState(shuffle(TAGS));

  return (
    <div className="tag-list" style={{ position: 'relative' }}>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {tags.slice(0, TAGS_PER_ROW).map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </InfiniteLoopSlider>
      ))}
      {/* <div className="fade" /> */}
    </div>
  );
};

const RollPlay = () => (
  <div className="roll-play-container">
    <TagList />
  </div>
);

export default RollPlay;
