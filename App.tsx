import { NavigationContainer } from "@react-navigation/native";
import { Rotas } from "./src/components/rotas/rotas";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

