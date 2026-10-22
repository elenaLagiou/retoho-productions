import { Pressable, StyleSheet, Text } from 'react-native';

import theme from '../theme';

// The gray pill-shaped button from the design (ΕΝΑΡΞΗ, ΑΠΑΝΤΗΣΗ, ...).
export default function RoundButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.button,
    borderRadius: theme.radius.button,
    paddingVertical: theme.spacing.sm + 2,
    paddingHorizontal: theme.spacing.lg,
    minWidth: 140,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.buttonText,
    letterSpacing: 1,
  },
});
