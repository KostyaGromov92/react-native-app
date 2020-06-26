/**
 *
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Image, TouchableOpacity, Text} from 'react-native';

// STYLES
import styles from './styles';

// COMPONENTS
import {Header} from '../../components/textBlocks/Header';
import {Input} from '../../components/Input';
import {SwiperComponent} from '../../components/Swiper';
import {GradientButton} from '../../components/UI/GradientButton';
import {TextArea} from '../../components/UI/TextArea';
import {LinkButton} from '../../components/UI/LinkButton';

// CONSTANTS
import {SWIPER_ACTIVE_DOT_COLOR} from './../../constants/swiper';

const arrowBack = require('../../resources/images/arrow-left.svg');

export const About = () => {
  const [companyName, setCompanyName] = useState('');
  const [currentSliderIndex, setSliderIndex] = useState({idxActive: 0});

  const sliderRef = useRef(null);

  const handleChangeCompanyName = text => {
    setCompanyName(text);
  };

  const goToNextSlide = () => {
    sliderRef && sliderRef.current.scrollBy(currentSliderIndex.idxActive + 1);
  };

  const handleChangeSliderIndex = sliderIndex => {
    setSliderIndex({idxActive: sliderIndex});
  };

  const handleOnTouchStartCapture = state => {
    setSliderIndex({idxActive: state.index});
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.topBlock}>
          <Image source={arrowBack} />
        </TouchableOpacity>
        <SwiperComponent
          activeDotColor={SWIPER_ACTIVE_DOT_COLOR}
          refSlider={sliderRef}
          showsButtons={false}
          onTouchStartCapture={handleOnTouchStartCapture}
          loop={false}
          onIndexChanged={handleChangeSliderIndex}>
          <View style={styles.content}>
            <Header>Название компании</Header>
            <Input
              additionalStyles={styles.input}
              onChangeText={handleChangeCompanyName}
              value={companyName}
            />
            <GradientButton
              additionalStyles={styles.button}
              onClick={() => goToNextSlide()}
              title="Далее"
            />
            <View style={styles.emptyBlock} />
          </View>
          <View style={styles.content}>
            <Header>Расскажите немного о вашей компании</Header>
            <TextArea additionalStyles={styles.textArea} />
            <GradientButton
              additionalStyles={styles.button}
              title="Далее"
              onClick={() => goToNextSlide()}
            />
            <LinkButton>Пропустить</LinkButton>
            <View style={styles.emptyBlock} />
          </View>
        </SwiperComponent>
      </SafeAreaView>
    </>
  );
};
