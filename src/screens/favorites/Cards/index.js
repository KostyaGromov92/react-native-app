/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components';

// COMPONENTS
import {GrayscaledImage} from '../../../components/GrayscaledImage';

// TODO Need check and move avatar url to dynamic url from api
const cardAvatar = require('../../../resources/images/card-user-avatar.svg');
const star = require('../../../resources/images/star.svg');
const time = require('../../../resources/images/sand-time.svg');

// STYLES
import styles from './styles';

type Props = {
  cardsList: Array<Object>,
};

// TODO Use styled component only for test style
const Card = styled.View`
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
  border-radius: 7px;
  background-color: #ffffff;
  padding: 17px 16px 18px 16px;
  margin-bottom: 8px;
`;

export const Cards = ({cardsList}: Props) => {
  return (
    <View style={styles.cardsList}>
      {cardsList.map(card => {
        const inActiveTextStyle = !card.isActive && styles.cardOpacity;
        const inActiveIconStyle = !card.isActive && styles.iconOpacity;

        return (
          <Card key={card.id}>
            <View style={styles.cardContent}>
              {card.isActive ? (
                <Image source={cardAvatar} />
              ) : (
                <GrayscaledImage source={cardAvatar} />
              )}
              <View style={styles.cardInfo}>
                <View style={styles.cardTitleBlock}>
                  <Text style={[styles.cardTitle, inActiveTextStyle]}>
                    {card.title}
                  </Text>
                  <Image source={star} />
                </View>
                <Text style={[styles.cardWorkExperience, inActiveTextStyle]}>
                  {card.workExperienceText}
                </Text>
                <View style={styles.cardLocationBlock}>
                  <View style={[styles.cardLocationIcon, inActiveIconStyle]} />
                  <Text style={[styles.cardLocation, inActiveTextStyle]}>
                    {card.locationText}
                  </Text>
                </View>
                <View style={styles.cardSearchBlock}>
                  {card.isActive ? (
                    <Image style={styles.cardSearchIcon} source={time} />
                  ) : (
                    <GrayscaledImage
                      source={time}
                      style={styles.cardSearchIcon}
                    />
                  )}

                  <Text style={[styles.cardSearch, inActiveTextStyle]}>
                    {card.searchDescription}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={[styles.cardDescription, inActiveTextStyle]}>
              {card.description}
            </Text>
          </Card>
        );
      })}
    </View>
  );
};
