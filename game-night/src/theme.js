import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

// All the colors, fonts and sizes of the app live here,
// so changing the look means changing only this file.
const theme = {
  colors: {
    background: '#FFF8EE',
    text: '#2B2135',
    textMuted: '#7A6F85',
    title: '#FF2E88',
    // The neon glow behind the title
    titleGlow: '#FF8CC6',
    answer: '#FF2E88',
    button: '#2B2135',
    buttonText: '#FFFFFF',
    // One tile color for every game id in games.json
    games: {
      numbers: '#FFD166',
      blender: '#7FE3C4',
      vowels: '#9FC3FF',
    },
  },

  // The files useFonts loads in _layout.js
  fontFiles: {
    BebasNeue: BebasNeue_400Regular,
  },

  // Bebas Neue has no Greek letters, so it is only used for the
  // "GAME NIGHT" logo. undefined means the system font, which has Greek.
  fonts: {
    logo: 'BebasNeue',
    heading: undefined,
    body: undefined,
  },

  fontSizes: {
    small: 14,
    body: 18,
    large: 22,
    heading: 32,
    logo: 64,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  radius: {
    button: 999,
    tile: 20,
  },
};

export default theme;
