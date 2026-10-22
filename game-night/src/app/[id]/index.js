import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>

        {/* A card with a stripe in the game's own color on top */}
        <View style={[styles.card, { borderTopColor: theme.colors.games[game.id] }]}>
          <Text style={styles.subtitle}>ΠΩΣ ΠΑΙΖΕΤΑΙ</Text>
          <Text style={styles.instructions}>{game.instructions}</Text>
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
    gap: theme.spacing.md,
    maxWidth: 480,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.text,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.radius.tile,
    borderTopWidth: 6,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.sm,
    alignItems: 'center',
    // A soft shadow so the card floats a little above the background
    shadowColor: theme.colors.text,
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  subtitle: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.small - 2,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: theme.colors.textMuted,
  },
  instructions: {
    fontFamily: theme.fonts.body,
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: theme.colors.text,
    opacity: 0.85,
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.large,
    lineHeight: 32,
    textAlign: 'center',
    color: theme.colors.text,
  },
});
