import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

// Import the scenes that this scene can jump to.
import first from './first';
import third from './third';

// Renders a view with two text links in it.
const Scene = ({ navigator }) => (
  <View style={styles.container}>
    <Text
      style={styles.item}
      onPress={() => navigator.jumpTo(first)}
    >
      First
    </Text>
    <Text
      style={styles.item}
      onPress={() => navigator.jumpTo(third)}
    >
      Third
    </Text>
  </View>
);

Scene.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default {
  Scene,
};
