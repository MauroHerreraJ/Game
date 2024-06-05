import { StyleSheet, Text, View } from 'react-native';
import StarGameScreen from './screens/StartGameScreen';

export default function App() {

return( 
   <View style={styles.rootScreen}>
     <StarGameScreen/>
   </View>
);

  
}

const styles = StyleSheet.create({
    rootScreen:{
        flex:1,
        backgroundColor:"#ddb52f",

    }
});