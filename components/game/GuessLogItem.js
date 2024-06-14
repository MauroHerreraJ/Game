import { View, Text, StyleSheet} from "react-native";
import Colors from "../../constans/colors";
function GuessLogItems({roundNumber,guess}){
    return <View style ={styles.listitem}>
        <Text style = {styles.itemText}>#{roundNumber}</Text>
        <Text style = {styles.itemText}>Opponent´s Gues: {guess}</Text>
    </View>
}

export default GuessLogItems;

const styles= StyleSheet.create({
    listitem:{
        borderColor: Colors.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor: Colors.accent500,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3

    },
    itemText:{
        fontFamily: "open-sans"
    }
})