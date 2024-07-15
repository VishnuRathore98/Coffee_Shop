import { StyleSheet, Text, View } from "react-native";

export default function TrackOrderScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>TrackOrderScreen</Text>
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