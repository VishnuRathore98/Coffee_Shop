import { StyleSheet, Text, View } from "react-native";

export default function PersonalInfoScreen(navigation){
    return<View style={styles.rootContainer}>
        <Text>Personal Info Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F6F2ED'
    }
});