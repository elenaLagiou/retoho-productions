import { StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

// Paint drips hanging under the title: where (in % of the width)
// and how long each one is.
const DRIPS = [
  { left: '14%', length: 26 },
  { left: '33%', length: 14 },
  { left: '58%', length: 34 },
  { left: '82%', length: 18 },
];

// The "GAME NIGHT" logo, painted like graffiti on a wall.
// The same text is drawn three times on top of each other:
// a dark copy and a cyan copy a bit lower, then the pink one on top.
// That makes the letters look thick, like 3D spray paint.
export default function GraffitiTitle({ text }) {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={[styles.title, styles.layer, styles.dark]}>{text}</Text>
        <Text style={[styles.title, styles.layer, styles.cyan]}>{text}</Text>
        <Text style={[styles.title, styles.top]}>{text}</Text>
      </View>

      <View style={styles.drips}>
        {DRIPS.map((drip) => (
          <View key={drip.left} style={[styles.drip, { left: drip.left, height: drip.length }]}>
            <View style={styles.drop} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    // Tilted, like it was painted in a hurry
    transform: [{ rotate: '-4deg' }],
  },
  title: {
    fontFamily: theme.fonts.logo,
    fontSize: theme.fontSizes.logo,
    lineHeight: theme.fontSizes.logo * 1.05,
    textAlign: 'center',
  },
  // The copies behind sit on top of the pink text, then move down-right
  layer: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  dark: {
    color: theme.colors.outline,
    transform: [{ translateX: 8 }, { translateY: 8 }],
  },
  cyan: {
    color: theme.colors.titleShadow,
    transform: [{ translateX: 4 }, { translateY: 4 }],
  },
  top: {
    color: theme.colors.title,
    // The neon glow: a soft shadow behind the letters
    textShadowColor: theme.colors.titleGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
  drips: {
    width: '100%',
    height: 40,
    // Start a bit inside the letters, so the drips come out of them
    marginTop: -18,
  },
  drip: {
    position: 'absolute',
    top: 0,
    width: 7,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: theme.colors.title,
  },
  // The round drop at the end of a drip
  drop: {
    position: 'absolute',
    bottom: -5,
    left: -2.5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.title,
  },
});
