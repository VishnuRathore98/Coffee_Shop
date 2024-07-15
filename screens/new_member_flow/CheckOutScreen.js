import { StyleSheet, Text, View } from "react-native";

export default function CheckOutScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>CheckOutScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});