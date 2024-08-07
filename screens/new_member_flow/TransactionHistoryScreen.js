import { StyleSheet, View, Text } from "react-native"

export default function TransactionHistoryScreen(navigation){
 return <View style={styles.rootContainer}>
    <Text>Transaction History Screen</Text>
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