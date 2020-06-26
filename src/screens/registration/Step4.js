import React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import {Header, BodyText} from '../../components/textBlocks';
import {
  scale,
  HEADER_COLOR,
  verticalScale,
  BACKGROUND_COLOR,
} from '../../style/constant';
import {GradientButton, LinkButton} from '../../components/UI';
import {img_spot, img_cinema} from '../../style/images';

export const Step4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Header>Запишите{'\n'}видеорезюме</Header>
      </View>
      <View style={styles.bodyBlock}>
        <BodyText>
          Расскажите о себе, своем опыте и навыках. Поверьте, это сделает вас
          действительно{'\n'}заметным на фоне других кандидатов!
        </BodyText>
        <View style={styles.bodyImage}>
          <ImageBackground style={styles.backgroundImage} source={img_spot}>
            <Image style={styles.image} source={img_cinema} />
          </ImageBackground>
        </View>
      </View>
      <View style={styles.buttonBlock}>
        <GradientButton title={'Записать видеорезюме'} onClick={() => {}} />
        <LinkButton onClick={() => {}}>Пропустить</LinkButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    backgroundColor: BACKGROUND_COLOR,
  },
  headerBlock: {
    marginTop: verticalScale(70),
  },
  bodyBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyImage: {
    marginTop: scale(27),
    alignItems: 'center',
  },
  backgroundImage: {
    width: scale(155),
    height: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scale(84),
    height: scale(84),
  },
  textArea: {
    fontFamily: 'Google Sans',
    fontSize: scale(16),
    lineHeight: scale(20),
    letterSpacing: 0.03,
    opacity: 0.87,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: scale(2),
    textAlignVertical: 'bottom',
  },
  countColoredText: {
    fontFamily: 'Google Sans',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: '#B93B88',
  },
  countText: {
    fontFamily: 'Google Sans',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: HEADER_COLOR,
    opacity: 0.54,
  },
});
