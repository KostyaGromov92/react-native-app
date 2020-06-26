// @flow

import React from 'react';
import {Image} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';

// TYPES
import {StyleObject} from '../../types/propsHelpers';

type Props = {
  source: string,
  style: StyleObject,
};

export const GrayscaledImage = ({source, style}: Props) => (
  <Grayscale>
    <Image source={source} style={style} />
  </Grayscale>
);
