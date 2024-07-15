import { StyleSheet, Text, View } from "react-native";

export default function CartScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>CartScreen</Text>
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