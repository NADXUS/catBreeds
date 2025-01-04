import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Information from "../pages/information";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Information" component={Information} />
    </Stack.Navigator>
  );
};
