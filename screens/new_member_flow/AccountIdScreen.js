import { View, Text, StyleSheet, Image } from "react-native";

export default function AccountIdScreen(){
 return (
    <View style={styles.rootContainer}>

        <Text>Account Id Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#F6F2ED',
        justifyContent:'center',
        alignItems:'center'
    },
    
});