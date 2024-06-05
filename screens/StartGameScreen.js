import{TextInput,View,StyleSheet} from "react-native"
import PrimaryButton from "../components/PrimaryButton";

function StarGameScreen () {
    return (
    <View style={styles.inputcontainer}>
        <TextInput 
        style={styles.numberImput} 
        maxLength={2} keyboardType="number-pad" 
        autoCapitalize="none" 
        autoCorrect={false}
        />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                 <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View  style={styles.buttonContainer}>
                 <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor:"#4e0329",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
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