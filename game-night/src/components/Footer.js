import { StyleSheet, Text } from 'react-native';

import theme from '../theme';

// The "Powered by" line at the bottom of the screens.
export default function Footer() {
  return <Text style={styles.footer}>Powered by Retoho Productions</Text>;
}

const styles = StyleSheet.create({
  footer: {
    fontFamily: theme.fonts.body,
    fontStyle: 'italic',
    color: theme.colors.textMuted,
  },
});
