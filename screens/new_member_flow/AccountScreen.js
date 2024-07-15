import { StyleSheet, Text, View } from "react-native";

export default function AccountScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>AccountScreen</Text>
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