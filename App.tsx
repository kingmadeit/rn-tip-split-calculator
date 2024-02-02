import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Home, Splash } from 'screens';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded) setTimeout(() => setAppIsReady(true), 600);
  }, [fontsLoaded]);


  if (!appIsReady) return <Splash />;

  return  <Home />
}