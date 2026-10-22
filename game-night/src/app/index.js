import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Footer from '../components/Footer';
import GameTile from '../components/GameTile';
import games from '../data/games.json';
import theme from '../theme';

// The home screen. The file is called index.js, so it is the first
// screen the app opens (the "/" address on the web).
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>GAME NIGHT</Text>

      {/* One tile for every game in games.json */}
      <View style={styles.grid}>
        {games.map((game) => (
          <GameTile
            key={game.id}
            title={game.title}
            color={theme.colors.games[game.id]}
            // Go to the address /numbers, /blender or /vowels
            onPress={() => router.push(`/${game.id}`)}
          />
        ))}
      </View>

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
  },
  title: {
    fontFamily: theme.fonts.logo,
    fontSize: theme.fontSizes.logo,
    letterSpacing: 2,
    color: theme.colors.title,
    // The neon glow: a soft shadow behind the letters
    textShadowColor: theme.colors.titleGlow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.lg,
    maxWidth: 340,
  },
});
