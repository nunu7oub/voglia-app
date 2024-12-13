mport React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import FashionTrends from '../Screens/FashionTrends.gc'; // Update the path as needed
import CelebrityStyle from '../Screens/CelebrityStyle.gc'; // Update the path as needed

// Create the stack navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // Navigation container holds the navigator and screens
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FashionTrends" // This is the default screen when the app starts
        screenOptions={{
          headerShown: false, // You can modify this if you want to show headers for each screen
        }}
      >
        {/* Define your screens here */}
        <Stack.Screen name="FashionTrends" component={FashionTrends} />
        <Stack.Screen name="CelebrityStyle" component={CelebrityStyle} />
        {/* You can add more screens here as you build your app */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;