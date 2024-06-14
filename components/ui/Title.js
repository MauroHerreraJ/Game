import { Text,StyleSheet } from "react-native";

function Title({children}){
return <Text style={styles.tittle}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    tittle:{
        fontFamily:"open-sans-bold",
        fontSize:24,
       // fontWeight:"bold",
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding:12,
        maxWidth:"80%",
        width:300
    
      }
})