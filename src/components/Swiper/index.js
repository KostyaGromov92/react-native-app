// @flow

import React from 'react';

import Swiper from 'react-native-swiper';

type Props = {
  children: React.ReactNode,
  activeDotColor: string,
  showsButtons: boolean,
  loop: boolean,
  refSlider: any,
  onIndexChanged: activeIndex => void,
  onTouchStartCapture: state => void,
};

export const SwiperComponent = ({
  activeDotColor,
  showsButtons,
  loop,
  refSlider,
  children,
  onIndexChanged,
  onTouchStartCapture,
}: Props) => {
  return (
    <Swiper
      showsButtons={showsButtons}
      activeDotColor={activeDotColor}
      loop={loop}
      ref={refSlider}
      onTouchStartCapture={(e, state, context) => onTouchStartCapture(state)}
      onIndexChanged={idxActive => onIndexChanged({idxActive})}>
      {children}
    </Swiper>
  );
};
