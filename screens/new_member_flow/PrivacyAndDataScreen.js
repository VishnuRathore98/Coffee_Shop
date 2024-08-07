import { View, Text, StyleSheet } from "react-native";

export default function PrivacyAndDataScreen(){
 return <View style={styles.rootContainer}>
    <Text>Privacy And Data Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#F6F2ED',
        justifyContent:'center',
        alignItems:'center'
    }
});