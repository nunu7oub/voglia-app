import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import FashionTrends from './components/FashionTrends'; // Fashion trends component
import SupermodelTips from './components/SupermodelTips'; // Supermodel skincare and makeup tips
import Shopping from './components/Shopping'; // Shopping feature
import AIAssistant from './components/AIAssistant'; // AI assistant for styling and skincare
import { DefaultTheme, DarkTheme } from './themes'; // For theming support

const darkTheme = {
  colors: {
    background: "#1c1c1c",
    primary: "#ffafcc",
    text: "#ffffff",
    secondary: "#a29bfe",
  },
  fonts: {
    regular: "CustomFont",
  },
};

const lightTheme = {
  colors: {
    background: "#ffffff",
    primary: "#ffafcc",
    text: "#1c1c1c",
    secondary: "#a29bfe",
  },
  fonts: {
    regular: "CustomFont",
  },
};

const [fontsLoaded] = useFonts({
  "CustomFont": require("../assets/fonts/CustomFont.ttf"),
});

React.useEffect(() => {
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

if (!fontsLoaded) {
  return null; // Prevent rendering until fonts are loaded
}

return (
  <ThemeProvider theme={darkTheme}>
    <Stack>
      <Stack.Screen name="FashionTrends" component={FashionTrends} />
      <Stack.Screen name="SupermodelTips" component={SupermodelTips} />
      <Stack.Screen name="Shopping" component={Shopping} />
      <Stack.Screen name="AIAssistant" component={AIAssistant} />
    </Stack>
  </ThemeProvider>
);
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>

  );
}
