import { Pressable, StyleSheet, View } from 'react-native';

import theme from '../theme';

// The 3D base of every button and tile. It is made of two layers:
//   side: a darker copy, "depth" pixels lower, peeking out at the bottom
//   face: the colored top that you see and press
// When pressed, the face moves down onto the side.
export default function Pushable({
  onPress,
  color,
  sideColor,
  depth,
  radius,
  style,
  faceStyle,
  children,
}) {
  const shape = { borderRadius: radius };

  return (
    <Pressable onPress={onPress} style={[{ paddingBottom: depth }, style]}>
      {({ pressed }) => (
        <>
          <View style={[styles.side, shape, { top: depth, backgroundColor: sideColor }]} />
          <View
            style={[
              styles.face,
              shape,
              { backgroundColor: color },
              pressed && { transform: [{ translateY: depth }] },
              faceStyle,
            ]}
          >
            {/* The glossy spot that makes it look like a bubble */}
            <View style={styles.shine} />
            {children}
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  side: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: theme.depth.outline,
    borderColor: theme.colors.outline,
  },
  face: {
    borderWidth: theme.depth.outline,
    borderColor: theme.colors.outline,
    overflow: 'hidden',
  },
  shine: {
    position: 'absolute',
    top: 5,
    left: '12%',
    width: '30%',
    height: 7,
    borderRadius: 999,
    backgroundColor: theme.colors.shine,
  },
});
