import { View,Text } from "react-native";
import Title from "../components/ui/Title";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import StartGameScreen from "./StartGameScreen";

function GameOverScreen() {

    function restartHandler(){
        
    }

    

    return <View style={styles.screentext}>
        <Title>Game Over!</Title>
        <View style={styles.finishButton}>
        <PrimaryButton on onPress={restartHandler}>Finish</PrimaryButton>
        </View>
        </View>
}

export default GameOverScreen;

const styles= StyleSheet.create({
    screentext:{
        flex:1,
        padding:50
    },

    finishButton:{
        marginTop:300
    }



})