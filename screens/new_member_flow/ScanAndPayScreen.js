import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Poppins_400Regular} from "@expo-google-fonts/poppins";
import { useState, useRef } from "react";
import Icon  from "react-native-vector-icons/Ionicons";
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from "react-native-reanimated";


export default function ScanAndPayScreen(){
    const [scanAndPaySelected, setScanAndPaySelected] = useState(true);
    const [rewardSelected, setRewardSelected] = useState(false);
    const ref = useRef(null);
    const scrollOffsetValue = useSharedValue(0);

    const views1 = [
        {
        id:1,
         img:  "../../assets/paycards/defaultCard.png"
        },
        {
            id:2,
          img: "../../assets/paycards/masterCard.png"
        },
        {
            id:3,
           img:"../../assets/paycards/visaCard.png"
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
    function renderItem1 ({index, item}) {
        console.log(item.img);
        return (
           <View >
              {/* <Image source={require(item.img)} height={500} width={300}/> */}
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
                        {/* <Carousel
                            loop
                            width={300}
                            height={500}
                            // autoPlay={true}
                            data={views1}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={renderItem1}
                        /> */}

                        <Carousel
                                vertical={ false}
                                width={340}
                                height= {550}
                                // loop
                                // enabled // Default is true, just for demo
                                ref={ref}
                                // defaultScrollOffsetValue={scrollOffsetValue}
                                // testID={"xxx"}
                                // style={{ width: "100%" }}
                                autoPlay={false}
                                // autoPlayInterval={isFast ? 100 : 2000}
                                data={views1}
                                // onScrollStart={()=>{console.log('===1')}}
                                // onScrollEnd={()=>{console.log('===2')}}
                                // onConfigurePanGesture={g => g.enabled(false)}
                                // pagingEnabled={true}
                                // onSnapToItem={index => console.log("current index:", index)}
                                // "../../assets/paycards/defaultCard.png"
                                renderItem={({index, item})=>{
                                                        console.log(index, item.img);
                                                        
                                                            switch (index) {
                                                                case 0:
                                                                    return <Image source={require("../../assets/paycards/defaultCard.png")} height={600} width={350}/>        
                                                                    
                                                                case 1:
                                                                        return <Image source={require("../../assets/paycards/masterCard.png")} height={600} width={350}/>        
                                                                    
                                                                case 2:
                                                                    return <Image source={require("../../assets/paycards/visaCard.png")} height={600} width={350}/>        
                                                                    
                                                                default:
                                                                    break;
                                                            }
                                                            
                                                        
                                                    }}
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
        // backgroundColor: "#ffffff",
        borderRadius: 18,
        height: 550,
        width: 350,
        // justifyContent: "space-around",
        // alignItems: "center",
        // overflow: "hidden",
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