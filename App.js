import { useState } from 'react';
import { StyleSheet,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarGameScreen from './screens/StartGameScreen';

export default function App() {
  const [chosenNumber] = useState([]);

  function pickedNumberHandler(){
    
  }

return( 
   <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground 
      source={require("./assets/images/background.png")} 
      resizeMode='cover' 
      style={styles.rootScreen} 
      imageStyle={styles.backgroundImage}>
       <StarGameScreen/>
      </ImageBackground>
   </LinearGradient>
);

  
}

const styles = StyleSheet.create({
    rootScreen:{
        flex:1,

    },
    backgroundImage:{
      opacity:0.15


    }
});