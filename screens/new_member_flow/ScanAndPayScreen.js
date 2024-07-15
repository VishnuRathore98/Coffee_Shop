import { StyleSheet, Text, View } from "react-native";

export default function ScanAndPayScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>ScanAndPayScreen</Text>
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