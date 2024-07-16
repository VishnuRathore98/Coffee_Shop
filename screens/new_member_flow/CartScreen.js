import { StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";

export default function CartScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text style={{fontSize:24}}>CartScreen<Icon name="bag-outline" size={28}/></Text>
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