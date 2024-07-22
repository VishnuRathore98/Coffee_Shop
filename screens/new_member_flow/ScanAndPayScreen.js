import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Poppins_400Regular} from "@expo-google-fonts/poppins";
import { useState } from "react";
import Icon  from "react-native-vector-icons/Ionicons";
import Carousel from 'react-native-reanimated-carousel';



export default function ScanAndPayScreen(){
    const [scanAndPaySelected, setScanAndPaySelected] = useState(true);
    const [rewardSelected, setRewardSelected] = useState(false);

    const views1 = [
        {
           imgUrl: "/home/vpsr/Desktop/React-Native/RNCourse/Coffee-Shop/Coffee_Shop/assets/paycards/defaultCard.png",
           title: "Airport Cabs",
        },
        {
           imgUrl: "/home/vpsr/Desktop/React-Native/RNCourse/Coffee-Shop/Coffee_Shop/assets/paycards/masterCard.png",
           title: "Gift Cards",
        },
        {
           imgUrl: "/home/vpsr/Desktop/React-Native/RNCourse/Coffee-Shop/Coffee_Shop/assets/paycards/visaCard.png",
           title: "Hourly Stays",
        },
    ];

    function scanAndPayHandler(){
        if (!scanAndPaySelected) {
            setScanAndPaySelected(true);
            setRewardSelected(false);
        }
    }
    function rewardHandler(){
        if (!rewardSelected) {
            setRewardSelected(true);
            setScanAndPaySelected(false);
        }
    }
    function renderItem1 ({ item }) {
        return (
           <View style={styles.renderItem1_parentView}>
              <Image source={{ uri: item.imgUrl }} style={styles.renderItem1_img} />
              <View style={styles.renderItem1_view1}>
                 <Text style={styles.renderItem1_text1}>OFFERS</Text>
              </View>
              <View style={styles.renderItem1_view2}>
                 <Text style={styles.renderItem1_text2}>{item.title}</Text>
                 <TouchableOpacity>
                    <Text style={styles.renderItem1_text3}>EXPLORE OFFERS</Text>
                 </TouchableOpacity>
              </View>
            </View>
        );
     };

    return (
        <View style={styles.rootContainer}>
            <View style={{ flexDirection:'row', marginTop:20}}>
            <TouchableOpacity style={{padding:10, borderBottomWidth:2, borderColor: scanAndPaySelected?'#024B1F':'#EFEBE9'}} onPress={scanAndPayHandler}>
            <Text style={{fontSize:20, fontFamily:'Poppins_400Regular'}}>Scan & Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10, borderBottomWidth:2, borderColor: rewardSelected?'#024B1F':'#EFEBE9'}} onPress={rewardHandler}>
            <Text style={{fontSize:20, fontFamily:'Poppins_400Regular'}}>Rewards Only</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                {
                    scanAndPaySelected
                ?
                    
                        // Carousel will go in here
                        <View style={{justifyContent:'center', alignItems:'center' }}>
                        <Carousel
                            loop
                            width={300}
                            height={500}
                            // autoPlay={true}
                            data={views1}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={renderItem1}
                        />
                    </View>
                    
                :
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:50}}><Icon name="star-half-outline" size={50}/>1300</Text>
                        <Icon name="qr-code-outline" size={200}/>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F6F2ED'
    },
    renderItem1_parentView: {
        backgroundColor: "#ffffff",
        borderRadius: 18,
        height: 250,
        width: 350,
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
     },
     renderItem1_view1: {
        width: 80,
        position: "absolute",
        fontSize: 20,
        top: 10,
        right: 20,
        backgroundColor: "#ffffff",
        borderRadius: 18,
        alignItems: "center",
     },
     renderItem1_view2: {
        width: 350,
        flexDirection: "row",
        justifyContent: "space-around",
     },
     renderItem1_img: {
        width: 350,
        height: 200,
     },
     renderItem1_text1: {
        fontWeight: "700",
        color: "#000000",
     },
     renderItem1_text2: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "bold",
     },
     renderItem1_text3: {
        marginVertical: 12,
        color: "blue",
        fontWeight: "bold",
     },
});