import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView, FlatList} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import {useTheme} from "@react-navigation/native"
import * as actions from "../../store/action"
import {connect} from "react-redux";
import Loader from '../../components/pageLoader';
import GoIcon from "react-native-vector-icons/Ionicons"
import NotiIcon from "react-native-vector-icons/Ionicons"

function Tickets({navigation}){
    const {colors}=useTheme()
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'black',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>,
            headerRight:props=>(
                <View style={{marginRight:responsiveFontSize(2)}}>
                    <TouchableOpacity>
                        <Image
                        style={{width:responsiveFontSize(3.5),height:responsiveFontSize(3.5),borderRadius:responsiveFontSize(3.5)/2}}
                        source={require("../../../assets/profile.jpg")}
                        />
                    </TouchableOpacity>
                </View>
            )
          });
    },[])

    useEffect(()=>{
            setLoading(false)
    },[])

    function renderComplain({item}){
        return (
            <TouchableOpacity 
            onPress={()=>{
                setModel(true)
            }}
            style={{...styles.itemCon}}>
                <View style={{width:'25%',justifyContent:'center',alignItems:'center',backgroundColor:"#f6f6f6",height:responsiveHeight(14),borderTopLeftRadius:responsiveFontSize(0.5),borderBottomLeftRadius:responsiveFontSize(0.5)}}>
                    <Image
                    style={{width:responsiveFontSize(9),height:responsiveFontSize(9)}}
                    source={require("../../../assets/plane.png")}
                    />
                </View>
                <View style={{width:"75%",padding:responsiveFontSize(1),justifyContent:"space-between"}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{color:colors.thm,textTransform:"uppercase",fontSize:responsiveFontSize(1.5)}}> ExpreKarachiss</Text>
                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.2)}}>Price: $300</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <View style={{...styles.box,width:'20%',marginRight:responsiveFontSize(2)}}>
                            <Text>Mon</Text>
                        </View>
                        <View style={{...styles.box,width:'50%'}}>
                            <Text>4:00 AM</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>22/03/2021</Text>
                        <Text style={{color:'grey',fontSize:responsiveFontSize(1.2)}}>#1321321</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const getValue=(k,v)=>setFields({...fields,[k]:v})

    if(loading){
        return <Loader/>
    }else{
        return(
            <View
            style={{width:'100%',flex:1}}>
               {true?(
                        <FlatList
                        data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,]}
                        renderItem={renderComplain}
                        style={{flex:1}}
                        contentContainerStyle={{paddingBottom:responsiveFontSize(4),width:'100%',marginTop:responsiveFontSize(2)}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item,i)=>i.toString()}
                        />
                    ):(
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:responsiveFontSize(3),color:'grey',fontFamily:'Montserrat-Bold'}}>Not Found</Text>
                        </View>
                    )}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    itemCon:{
        backgroundColor:'white',
        height:responsiveHeight(14),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginVertical:responsiveFontSize(0.75),
        borderRadius:responsiveFontSize(0.5),
        width:'95%',
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:'auto'
    },
    box:{
        backgroundColor:'white',
        borderRadius:responsiveFontSize(0.5),
        justifyContent:'center',
        alignItems:'center',
        height:responsiveHeight(4),
        borderColor:'grey',
        borderWidth:0.2

    },
    btn:{
        position:'absolute',
        width:responsiveFontSize(8),
        height:responsiveFontSize(8),
        borderRadius:responsiveFontSize(8)/2,
        justifyContent:'center',
        alignItems:'center',
        bottom:responsiveFontSize(2),
        right:responsiveFontSize(2)}
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(Tickets);
