import { StyleSheet, Text, View } from "react-native";

export default function RewardScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>RewardScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F6F2ED'
    },
});