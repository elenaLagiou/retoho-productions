import { useEffect, useRef } from 'react';
import { Animated, Easing, Platform, StyleSheet, View } from 'react-native';

import theme from '../theme';

// Where each bubble sits (in % of the screen), how big it is, which
// color from theme.colors.bubbles it uses and how slowly it floats.
const BUBBLES = [
  { left: '6%', top: '8%', size: 46, color: 0, duration: 3200 },
  { left: '80%', top: '5%', size: 30, color: 1, duration: 2600 },
  { left: '88%', top: '30%', size: 60, color: 2, duration: 3800 },
  { left: '2%', top: '42%', size: 24, color: 3, duration: 2400 },
  { left: '12%', top: '72%', size: 54, color: 1, duration: 3500 },
  { left: '78%', top: '64%', size: 36, color: 4, duration: 2900 },
  { left: '50%', top: '88%', size: 28, color: 0, duration: 3100 },
  { left: '40%', top: '2%', size: 18, color: 2, duration: 2200 },
];

// Glossy bubbles floating up and down behind a screen.
// Put it as the first child of the screen, it fills it from behind.
export default function Bubbles() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {BUBBLES.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}
    </View>
  );
}

function Bubble({ left, top, size, color, duration }) {
  // 0 = at its place, 1 = 12 pixels higher
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: 1,
          duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(float, {
          toValue: 0,
          duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]),
    );
    animation.start();
    // Stop the animation when the screen closes
    return () => animation.stop();
  }, [float, duration]);

  const bubbleColor = theme.colors.bubbles[color];

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          left,
          top,
          width: size,
          height: size,
          borderColor: bubbleColor,
          transform: [
            { translateY: float.interpolate({ inputRange: [0, 1], outputRange: [0, -12] }) },
          ],
        },
      ]}
    >
      <View style={[styles.shine, { width: size / 4, height: size / 4 }]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 2,
    // A soft white tint inside, like soap
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  shine: {
    position: 'absolute',
    top: '18%',
    left: '20%',
    borderRadius: 999,
    backgroundColor: theme.colors.shine,
  },
});
