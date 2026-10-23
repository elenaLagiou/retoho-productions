import { StyleSheet, Text } from 'react-native';

import theme from '../theme';
import Pushable from './Pushable';

// One colored 3D tile on the home screen, a little tilted like a
// sticker on a wall. It gets everything it shows from the parent.
// sideColor is the darker side under the tile, tilt is e.g. '-3deg'.
export default function GameTile({ title, color, sideColor, tilt, onPress }) {
  return (
    <Pushable
      onPress={onPress}
      color={color}
      sideColor={sideColor}
      depth={theme.depth.tile}
      radius={theme.radius.tile}
      style={{ transform: [{ rotate: tilt }] }}
      faceStyle={styles.face}
    >
      <Text style={styles.text}>{title}</Text>
    </Pushable>
  );
}

const styles = StyleSheet.create({
  face: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  text: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    textAlign: 'center',
    color: theme.colors.tileText,
  },
});
