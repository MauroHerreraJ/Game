import { useState } from "react";
import{TextInput,View,StyleSheet,Alert} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constans/colors";

function StarGameScreen (onPickNumber) {
   const [enteredNumber, setEnteredNumber] = useState();

   function numberImputHandler(enteredText){
    setEnteredNumber(enteredText)
   }

   function resetImputHandler(){ 
    setEnteredNumber(""); 

   }

   function confirmImputHandler(){
    const chosenNumber = parseInt(enteredNumber);

      if(isNaN(chosenNumber)|| chosenNumber <=0 || chosenNumber > 99 ){
        Alert.alert(
            "Invalid Number", 
            "Number has to be number between 1 and 99",
            [{text:"Okay", style:"destructive", onPress: resetImputHandler}]
        );
        return;
      }
        onPickNumber(chosenNumber);

   }
   
    return (
    <View style={styles.inputcontainer}>
        <TextInput 
        onChangeText={numberImputHandler}
        style={styles.numberImput} 
        maxLength={2} keyboardType="number-pad" 
        autoCapitalize="none" 
        autoCorrect={false}
        value={enteredNumber}
        />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                 <PrimaryButton onPress={resetImputHandler} >Reset</PrimaryButton>
                </View>
                <View  style={styles.buttonContainer}>
                 <PrimaryButton onPress={confirmImputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
    </View>
    );
        
}

export default StarGameScreen;

const styles= StyleSheet.create({
    inputcontainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        elevation:8,
        shadowColor:"black",
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.25
        

    },

    numberImput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeigh:"bold",
        textAlign:"center"

    },
    buttonsContainer:{
        flexDirection:"row"


    },
    buttonContainer:{
        flex:1
    }
})