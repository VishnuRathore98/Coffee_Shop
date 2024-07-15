import { StyleSheet, Text, View } from "react-native";

export default function OrderScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>OrderScreen</Text>
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