import { useState } from "react";
//How to use: https://docs.expo.dev/versions/latest/sdk/font/
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  //useFonts returns and array that we can destructer and pull of fontsLoaded boolean
  const [fontsLoaded] = useFonts({
    lovecraft: require("./assets/fonts/lovecraft.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function selectedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  let screen = (
    <StartGameScreen selectedNumberHandler={selectedNumberHandler} />
  );

  function gameOverHandler() {
    setGameIsOver(true);
  }

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.black]}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.75,
  },
});
