import React from 'react';

const StarRingPage = {
  backgroundColor: '#0a0a0a',
  borderRadius: '100%',
  bottom: '-908px',
  boxShadow: 'inset 0 2px 20px #fff, 0 -10px 50px 1px #ffffff7d',
  height: '1058px',
  position: 'absolute',
  left: '-521px',
  right: '-521px',
  zIndex: '-10',
};
const StarRingPageCircle = {
  WebkitFilter: 'blur(57px)',
  background:
    'radial-gradient( 50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(10, 10, 10, 0) 100% )',
  bottom: '65px',
  filter: 'blur(57px)',
  flex: 'none',
  height: '120px',
  left: '0',
  overflow: 'hidden',
  position: 'absolute',
  right: '0',
  zIndex: '-20',
};
const StarRingPageMark = {
  display: 'flex',
  flex: 'none',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '0px',
  justifyContent: 'center',
  inset: '0',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  zIndex: '-1',
};
const StarRingPageMarkLeft = {
  background: 'linear-gradient( 90deg, #0a0a0a 0%, rgba(10, 10, 10, 0) 100% )',
  flex: '1 0 0px',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: '1px',
};
const StarRingPageMarkRight = {
  background:
    'linear-gradient( 270deg, #0a0a0a 0%,  rgba(10, 10, 10, 0) 100% )',
  flex: '1 0 0px',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: '1px',
};

const StarRing = () => {
  return (
    <>
      <div style={StarRingPage}></div>
      <div style={StarRingPageCircle}></div>
      <div style={StarRingPageMark}>
        <div style={StarRingPageMarkLeft}></div>
        <div style={StarRingPageMarkRight}></div>
      </div>
    </>
  );
};

export default StarRing;
