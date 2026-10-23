import { StyleSheet, Text } from 'react-native';

import theme from '../theme';
import Pushable from './Pushable';

// The chunky 3D bubble button (ΕΝΑΡΞΗ, ΑΠΑΝΤΗΣΗ, ...).
export default function RoundButton({ label, onPress }) {
  return (
    <Pushable
      onPress={onPress}
      color={theme.colors.button}
      sideColor={theme.colors.buttonSide}
      depth={theme.depth.button}
      radius={theme.radius.button}
      faceStyle={styles.face}
    >
      <Text style={styles.label}>{label}</Text>
    </Pushable>
  );
}

const styles = StyleSheet.create({
  face: {
    paddingVertical: theme.spacing.md - 2,
    paddingHorizontal: theme.spacing.lg,
    minWidth: 200,
    alignItems: 'center',
  },
  label: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    color: theme.colors.buttonText,
    letterSpacing: 1,
    // A hard dark shadow under the letters, like a sticker
    textShadowColor: theme.colors.outline,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
});
