import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Bubbles from '../../components/Bubbles';
import Footer from '../../components/Footer';
import RoundButton from '../../components/RoundButton';
import games from '../../data/games.json';
import theme from '../../theme';

// The instructions screen. The folder name [id] has brackets, so it
// matches any address: /numbers, /blender, /vowels. The part of the
// address that matched arrives as the "id" parameter.
export default function InstructionsScreen() {
  const { id } = useLocalSearchParams();
  const game = games.find((g) => g.id === id);

  // Someone typed an address that is not a game
  if (!game) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>Δεν βρέθηκε το παιχνίδι.</Text>
        <RoundButton label="ΕΠΙΣΤΡΟΦΗ" onPress={() => router.replace('/')} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Bubbles />

      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>

        {/* A comic speech bubble, with a sticker label in the game's color */}
        <View style={styles.bubble}>
          <View style={[styles.label, { backgroundColor: theme.colors.games[game.id] }]}>
            <Text style={styles.subtitle}>ΠΩΣ ΠΑΙΖΕΤΑΙ</Text>
          </View>
          <Text style={styles.instructions}>{game.instructions}</Text>

          {/* The little tail at the bottom: a square turned 45°,
              with an outline only on the two sides that show */}
          <View style={styles.tail} />
        </View>
      </View>

      {/* Opens the game screen: src/app/[id]/play.js */}
      <RoundButton label="ΕΝΑΡΞΗ" onPress={() => router.push(`/${id}/play`)} />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
  content: {
    alignItems: 'center',
    gap: theme.spacing.lg,
    maxWidth: 480,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.heading,
    textAlign: 'center',
    color: theme.colors.text,
    // A hard pink shadow, like a second layer of spray paint
    textShadowColor: theme.colors.title,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
  },
  bubble: {
    backgroundColor: theme.colors.bubble,
    borderRadius: theme.radius.bubble,
    borderWidth: theme.depth.outline,
    borderColor: theme.colors.outline,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    // A hard comic-book shadow, no blur
    boxShadow: `6px 6px 0px ${theme.colors.outline}`,
  },
  // The sticker that sits half outside the top of the bubble
  label: {
    position: 'absolute',
    top: -16,
    borderRadius: 999,
    borderWidth: theme.depth.outline,
    borderColor: theme.colors.outline,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    transform: [{ rotate: '-3deg' }],
  },
  subtitle: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.small,
    letterSpacing: 2,
    color: theme.colors.tileText,
  },
  instructions: {
    fontFamily: theme.fonts.body,
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: theme.colors.bubbleText,
  },
  tail: {
    position: 'absolute',
    bottom: -13,
    left: '20%',
    width: 22,
    height: 22,
    backgroundColor: theme.colors.bubble,
    borderRightWidth: theme.depth.outline,
    borderBottomWidth: theme.depth.outline,
    borderColor: theme.colors.outline,
    transform: [{ rotate: '45deg' }],
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.large,
    lineHeight: 32,
    textAlign: 'center',
    color: theme.colors.text,
  },
});
