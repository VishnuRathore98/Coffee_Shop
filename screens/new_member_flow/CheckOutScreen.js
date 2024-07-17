import { StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from "expo-app-loading";

export default function CheckOutScreen(){
    let [fontsLoaded]= useFonts({Poppins_500Medium, Poppins_400Regular});
    if(!fontsLoaded){
        return <AppLoading />
    }
    else{
    return (
        <View style={styles.rootContainer}>
            <View style={styles.orderSummary}>
                <View style={styles.orderDescription}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <View>
                            <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', }}>Order Title</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Order Description 1</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Order Description 2</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Order Description 3</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Order Description 4</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Order Description 5</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:16, fontWeight:'bold'}}>$179.87</Text> 
                        </View>
                    </View>
                    <View style={{padding:10}}>
                            <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', }}>Special Instructions</Text>
                            <Text style={{fontSize:10, fontFamily:'Poppins_400Regular', }}>Instruction description</Text>
                    </View>
                </View>
                <View style={styles.orderCount}>
                    <View style={{padding:10}}>
                        <Text>Order count</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'bold', padding:10}}>$179.87</Text> 
                    </View>
                </View>
            </View>
            <View style={styles.orderActions}>
                <View style={styles}>
                <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', padding:10}}>As soon as possible</Text>
                </View>
                <View style={styles}>
                <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', padding:10}}>Later</Text>
                </View>
                <View style={styles}>
                <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', padding:10}}>Payment Method</Text>
                </View>
                <View style={styles}>
                <Text style={{fontSize:14, fontFamily:'Poppins_500Medium', padding:10}}>Buttons</Text>
                </View>
            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center'
    },
    orderSummary:{},
    orderDescription:{},
    orderCount:{flexDirection:'row', justifyContent:'space-between'},
    orderActions:{},

});