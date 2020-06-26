import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, BodyText} from '../../components/textBlocks';
import {scale, verticalScale, BACKGROUND_COLOR} from '../../style/constant';
import {GradientButton, LinkButton, TextArea} from '../../components/UI';

export const Step3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Header>Расскажите о себе будущему работодателю</Header>
      </View>
      <TextArea />
      <View style={styles.bodyBlock}>
        <BodyText>
          Вы всегда сможете отредактировать информацию о себе в вашем профиле
        </BodyText>
      </View>
      <View style={styles.buttonBlock}>
        <GradientButton title={'Далее'} onClick={() => {}} />
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
    marginTop: verticalScale(27),
    marginBottom: verticalScale(40),
  },
  buttonBlock: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
