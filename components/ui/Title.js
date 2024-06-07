import { Text,StyleSheet } from "react-native";
import Colors from "../../constans/colors";
function Title({children}){
return <Text style={styles.tittle}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    tittle:{
        fontSize:24,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding:12,
    
      }
})