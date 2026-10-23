import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Bubbles from '../../components/Bubbles';
import RevealAnswer from '../../components/RevealAnswer';
import RoundButton from '../../components/RoundButton';
import { getCards } from '../../data/cards';
import games from '../../data/games.json';
import theme from '../../theme';

// The game screen, at the address /blender/play, /numbers/play, ...
export default function PlayScreen() {
  const { id } = useLocalSearchParams();
  const game = games.find((g) => g.id === id);

  // "State" is data that can change while the screen is open.
  // When we change it, React draws the screen again.
  // useState(() => ...) runs the shuffle only once, when the screen opens.
  const [cards] = useState(() => (game ? getCards(game.dataFile) : []));
  const [index, setIndex] = useState(0); // which card we are on
  const [revealed, setRevealed] = useState(false); // is the answer shown?

  // Back to the home screen, closing the screens in between
  const goHome = () => router.dismissTo('/');

  if (!game || cards.length === 0) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.prompt}>Δεν βρέθηκε το παιχνίδι.</Text>
        <RoundButton label="ΕΠΙΣΤΡΟΦΗ" onPress={goHome} />
      </SafeAreaView>
    );
  }

  const card = cards[index];
  const isLast = index === cards.length - 1;

  const nextCard = () => {
    setRevealed(false);
    setIndex(index + 1);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Bubbles />

      <View style={styles.header}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.counter}>
          {index + 1} / {cards.length}
        </Text>
      </View>

      <View style={styles.card}>
        {card.hint ? <Text style={styles.hint}>{card.hint}</Text> : null}
        <Text style={[styles.prompt, game.dataFile !== 'questions' && styles.word]}>
          {card.prompt}
        </Text>
        <RevealAnswer text={card.answer} visible={revealed} />
      </View>

      <View style={styles.buttons}>
        {/* Before the reveal: ΑΠΑΝΤΗΣΗ. After it: ΕΠΟΜΕΝΗ (if there is one). */}
        {!revealed && <RoundButton label="ΑΠΑΝΤΗΣΗ" onPress={() => setRevealed(true)} />}
        {revealed && !isLast && <RoundButton label="ΕΠΟΜΕΝΗ" onPress={nextCard} />}
        {revealed && isLast && <Text style={styles.hint}>Τέλος! Παίξατε όλες τις κάρτες.</Text>}
        <RoundButton label="ΤΕΛΟΣ - ΕΠΙΣΤΡΟΦΗ" onPress={goHome} />
      </View>
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
  header: {
    alignItems: 'center',
    gap: theme.spacing.xs,
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
  counter: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.small,
    letterSpacing: 2,
    color: theme.colors.accent,
  },
  card: {
    alignItems: 'center',
    gap: theme.spacing.lg,
    maxWidth: 520,
  },
  hint: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  prompt: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.large,
    textAlign: 'center',
    color: theme.colors.text,
  },
  // Scrambled words and vowel-less titles: bigger, with space between
  // the letters so every _ is easy to count
  word: {
    fontSize: theme.fontSizes.heading,
    letterSpacing: 4,
  },
  buttons: {
    alignItems: 'center',
    gap: theme.spacing.md,
  },
});
