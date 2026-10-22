import { useEffect, useRef } from 'react';
import { Animated, Platform, StyleSheet } from 'react-native';

import theme from '../theme';

// Shows the answer with a small "pop" animation.
// While visible is false the answer is invisible (opacity 0).
export default function RevealAnswer({ text, visible }) {
  // An Animated.Value is a number that can change smoothly over time.
  // 0 = hidden, 1 = fully shown.
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // A spring bounces a little at the end, like a real object
      Animated.spring(progress, {
        toValue: 1,
        friction: 5,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    } else {
      progress.setValue(0);
    }
  }, [visible, progress]);

  return (
    <Animated.Text
      style={[
        styles.answer,
        {
          opacity: progress,
          // Grow from half size to full size
          transform: [
            {
              scale: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
          ],
        },
      ]}
    >
      {text}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  answer: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.answer,
  },
});
