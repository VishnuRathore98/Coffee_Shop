import { StyleSheet, Text, View } from "react-native";

export default function ProductDetailScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>ProductDetailScreen</Text>
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