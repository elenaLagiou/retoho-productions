import {
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import { RubikBubbles_400Regular } from '@expo-google-fonts/rubik-bubbles';

// All the colors, fonts and sizes of the app live here,
// so changing the look means changing only this file.
const theme = {
  // 80s street art at night: a dark purple wall, neon spray paint
  colors: {
    background: '#1A0B2E',
    text: '#F5E9FF',
    textMuted: '#B49BD6',
    title: '#FF2E88',
    // The neon glow behind the title
    titleGlow: '#FF2E88',
    // The colored "shadow" copy of the title, like a second spray color
    titleShadow: '#2DE2E6',
    accent: '#2DE2E6',
    answer: '#FFE45E',
    answerGlow: '#FF9F1C',
    // The comic speech bubble with the instructions
    bubble: '#FFF6E5',
    bubbleText: '#1D1724',
    // The thick dark outline around everything, like a cartoon
    outline: '#0D0618',
    // The glossy white spot on buttons and bubbles
    shine: 'rgba(255, 255, 255, 0.55)',
    button: '#FF2E88',
    // The darker "side" under a button that makes it look 3D
    buttonSide: '#A3135A',
    buttonText: '#FFFFFF',
    tileText: '#1D1724',
    // The floating bubbles in the background
    bubbles: ['#FF2E88', '#2DE2E6', '#FFE45E', '#9A2EFF', '#7FE3C4'],
    // One tile color for every game id in games.json
    games: {
      numbers: '#FFD166',
      blender: '#7FE3C4',
      vowels: '#9FC3FF',
    },
    // The darker side of each tile, for the 3D look
    gamesSide: {
      numbers: '#C9971F',
      blender: '#3FA88A',
      vowels: '#5A82C9',
    },
  },

  // The files useFonts loads in _layout.js
  fontFiles: {
    RubikBubbles: RubikBubbles_400Regular,
    Comfortaa: Comfortaa_400Regular,
    ComfortaaBold: Comfortaa_700Bold,
  },

  // Rubik Bubbles has no Greek letters, so it is only used for the
  // "GAME NIGHT" logo. Comfortaa is round and bubbly and has Greek.
  // Custom fonts have no fontWeight: the bold font is its own file.
  fonts: {
    logo: 'RubikBubbles',
    heading: 'ComfortaaBold',
    body: 'Comfortaa',
  },

  fontSizes: {
    small: 14,
    body: 18,
    large: 22,
    heading: 30,
    logo: 72,
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
    tile: 28,
    bubble: 28,
  },

  // How the 3D buttons are built (see Pushable.js): a darker copy of
  // the button sits "depth" pixels lower. When pressed, the button
  // moves down onto it, so it looks pushed in.
  depth: {
    outline: 3,
    button: 7,
    tile: 10,
  },
};

export default theme;
