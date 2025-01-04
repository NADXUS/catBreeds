import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
