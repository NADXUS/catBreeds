import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/home.page";
import Information from "../pages/information/information.page";

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
