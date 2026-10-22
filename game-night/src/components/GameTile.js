import { Pressable, StyleSheet, Text } from 'react-native';

import theme from '../theme';

// One colored square on the home screen.
// It gets its title, color and what to do when pressed from the parent.
export default function GameTile({ title, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 140,
    height: 140,
    borderRadius: theme.radius.tile,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.85,
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.body,
    fontWeight: '600',
    textAlign: 'center',
    color: theme.colors.text,
  },
});
