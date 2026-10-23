import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import theme from '../theme';

// Keep the splash screen visible until the fonts are ready,
// so the title never "jumps" from one font to another.
SplashScreen.preventAutoHideAsync();

// The layout wraps every screen in src/app/.
// A Stack means screens are placed on top of each other:
// opening a game pushes a screen, going back pops it.
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(theme.fontFiles);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If a font fails, we still show the app with the default font
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      />
      <StatusBar style="light" />
    </>
  );
}
