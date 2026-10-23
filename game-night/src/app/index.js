import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Bubbles from '../components/Bubbles';
import Footer from '../components/Footer';
import GameTile from '../components/GameTile';
import GraffitiTitle from '../components/GraffitiTitle';
import games from '../data/games.json';
import theme from '../theme';

// Each tile is tilted a bit differently, like stickers on a wall
const TILTS = ['-4deg', '3deg', '-2deg', '4deg'];

// The home screen. The file is called index.js, so it is the first
// screen the app opens (the "/" address on the web).
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Bubbles />

      <GraffitiTitle text={'GAME\nNIGHT'} />

      {/* One tile for every game in games.json */}
      <View style={styles.grid}>
        {games.map((game, i) => (
          <GameTile
            key={game.id}
            title={game.title}
            color={theme.colors.games[game.id]}
            sideColor={theme.colors.gamesSide[game.id]}
            tilt={TILTS[i % TILTS.length]}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.lg,
    maxWidth: 360,
  },
});
