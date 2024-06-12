import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constans/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberImputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetImputHandler() {
        setEnteredNumber("");

    }


    function confirmImputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number",
                "Number has to be number between 1 and 99",
                [{ text: "Okay", style: "destructive", onPress: resetImputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);

    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number!!</Title>

            <Card>
                <InstructionText> Enter Number</InstructionText>
                <TextInput
                    style={styles.numberImput}
                    maxLength={2} keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberImputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetImputHandler} >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmImputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"


    },

    numberImput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeigh: "bold",
        textAlign: "center"

    },
    buttonsContainer: {
        flexDirection: "row"


    },
    buttonContainer: {
        flex: 1
    }
})