import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Header, BodyText} from '../../components/textBlocks';
import {
  scale,
  HEADER_COLOR,
  verticalScale,
  GREY_COLOR,
  BACKGROUND_COLOR,
} from '../../style/constant';
import {GradientButton, LinkButton, TextArea} from '../../components/UI';

export const Step5 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBlock}>
        <Header>Расскажите о своем{'\n'}опыте работы</Header>
      </View>
      <Text style={styles.label}>Общий трудовой стаж</Text>
      <View style={styles.pickerWrapper}>
        <Picker style={styles.picker}>
          <Picker.Item label="Выберите срок стажа" value="-1" />
          <Picker.Item label="1 год" value="1" />
          <Picker.Item label="5 лет" value="5" />
          <Picker.Item label="10 лет" value="10" />
        </Picker>
      </View>
      <View style={styles.bodyBlock}>
        <BodyText>Опишите чем занимались на предыдущих местах работы.</BodyText>
      </View>
      <TextInput style={styles.input} placeholder={'Должность'} />
      <TextInput style={styles.input} placeholder={'Название компании'} />
      <TextInput style={styles.input} placeholder={'Сайт компании'} />
      <Text style={styles.label}>Период</Text>
      <View style={styles.periodBlock}>
        <TextInput
          style={[styles.input, styles.periodBlockInput]}
          placeholder={'Дата начала '}
        />
        <TextInput
          style={[styles.input, styles.periodBlockInput]}
          placeholder={'Дата окончания'}
        />
      </View>
      <TextArea placeholder={'Кратко опишите Ваши должностные обязанности'} />
      <TouchableOpacity style={styles.addJob}>
        <Text style={styles.addJobText}>+</Text>
        <Text style={styles.addJobText}>Добавить место работы</Text>
      </TouchableOpacity>
      <View style={styles.buttonBlock}>
        <GradientButton title={'Сохранить'} onClick={() => {}} />
        <LinkButton onClick={() => {}}>У меня нет опыта работы</LinkButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    backgroundColor: BACKGROUND_COLOR,
  },
  headerBlock: {
    marginTop: verticalScale(30),
  },
  periodBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  periodBlockInput: {
    width: '48%',
    marginTop: verticalScale(0),
  },
  bodyBlock: {
    marginTop: verticalScale(20),
  },
  bodyImage: {
    marginTop: scale(27),
    alignItems: 'center',
  },
  pickerWrapper: {
    borderBottomColor: GREY_COLOR,
    borderBottomWidth: 1,
  },
  picker: {
    fontFamily: 'Google Sans',
    fontSize: scale(16),
    lineHeight: scale(12),
    letterSpacing: 0.03,
    opacity: 0.87,
  },
  label: {
    marginTop: verticalScale(25),
    marginBottom: verticalScale(10),
    fontFamily: 'Google Sans',
    fontWeight: '500',
    fontSize: scale(14),
    lineHeight: scale(18),
    letterSpacing: 0.03,
    opacity: 0.54,
    color: '#000000',
  },
  input: {
    fontFamily: 'Google Sans',
    fontSize: scale(16),
    lineHeight: scale(12),
    letterSpacing: 0.03,
    opacity: 0.87,
    borderBottomColor: GREY_COLOR,
    borderBottomWidth: 1,
    marginTop: verticalScale(20),
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
  addJob: {
    flexDirection: 'row',
  },
  addJobText: {
    fontFamily: 'Google Sans',
    fontSize: scale(16),
    lineHeight: scale(24),
    opacity: 0.54,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(25),
    marginRight: scale(20),
  },
});
