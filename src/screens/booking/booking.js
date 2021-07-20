import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView, FlatList} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import LogoutIcon from "react-native-vector-icons/AntDesign";
  import {useTheme} from "@react-navigation/native"
import { TextInput } from 'react-native-gesture-handler';
import Btn from "../../components/btn";
import * as actions from "../../store/action"
import {connect} from "react-redux";
import SuccesModel from "../../components/succesModel"
import ThemeIcon from 'react-native-vector-icons/Feather';
import Loader from '../../components/pageLoader';
import MoveIcon from "react-native-vector-icons/Ionicons"
import LocationIcon from "react-native-vector-icons/Entypo"
import SearchIcon from "react-native-vector-icons/Feather"




function Booking({navigation}){

    const [move,setMove]=useState({start:0,end:4})

    const week=[
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]
    const DATA=[
        {
            day:new Date().getDate()
        },
        {
            day:new Date().getDate()+1
        },
        {
            day:new Date().getDate()+2
        },
        {
            day:new Date().getDate()+3
        },
        {
            day:new Date().getDate()+4
        },
        {
            day:new Date().getDate()+5
        },
        {
            day:new Date().getDate()+6
        },
    
    ]
    const {colors}=useTheme()
    const [submit,setSubmit]=useState(false)
    const [loader,setLoader]=useState(false)
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'grey',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>,
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

    const getValue=(k,v)=>setFields({...fields,[k]:v})

    const renderDate=()=>{
       return DATA.slice(move.start,move.end).map((item,i)=>{
        const seletedDate=new Date();
        seletedDate.setDate(item.day)
            return(
                <TouchableOpacity
                key={i}
                onPress={()=>{
                    console.log(seletedDate)
                }}
                >
                    <View style={{backgroundColor:colors.thm,...styles.dateCon}}>
                        <Text style={{color:'white'}}>{item.day}</Text>
                        <Text style={{color:'white'}}>{week[seletedDate.getDay()]}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    const renderTicket=()=>{
        return(
                <View
                style={styles.ticketCon}
                >
                    <Text style={{textTransform:'uppercase',color:colors.thm,textAlign:'center',marginBottom:responsiveFontSize(1.5)}}>Karachi Express</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'30%'}}>
                            <Text style={{color:'grey',fontFamily:'Montserrat-Medium',fontSize:responsiveFontSize(1.3),textTransform:'uppercase'}}>Departure:</Text>
                            <View style={{flexDirection:'row',marginTop:responsiveFontSize(2)}}>
                                <LocationIcon
                                name="location-pin"
                                size={responsiveFontSize(2)}
                                color="red"
                                />
                                <Text style={{marginLeft:responsiveFontSize(0.5),marginBottom:responsiveFontSize(1),color:'grey',fontSize:responsiveFontSize(1.3)}}>Karachi</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <LocationIcon
                                name="back-in-time"
                                size={responsiveFontSize(2)}
                                color="green"
                                />
                                <Text style={{marginLeft:responsiveFontSize(0.5),color:'grey',fontSize:responsiveFontSize(1.3)}}>4:00 PM</Text>
                            </View>
                        </View>
                        <View style={{width:'40%',justifyContent:'center',alignItems:'center'}}>
                            <Image
                            style={{width:100,height:100}}
                            source={require('../../../assets/plane.png')}
                            />
                        </View>
                        <View style={{width:'30%',alignItems:'flex-end'}}>
                            <Text style={{color:'grey',fontFamily:'Montserrat-Medium',fontSize:responsiveFontSize(1.3),textTransform:'uppercase'}}>Departure:</Text>
                            <View style={{flexDirection:'row',marginTop:responsiveFontSize(2)}}>
                                <LocationIcon
                                name="location-pin"
                                size={responsiveFontSize(2)}
                                color="red"
                                />
                                <Text style={{marginLeft:responsiveFontSize(0.5),marginBottom:responsiveFontSize(0.5),color:'grey',fontSize:responsiveFontSize(1.3)}}>Karachi</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <LocationIcon
                                name="back-in-time"
                                size={responsiveFontSize(2)}
                                color="green"
                                />
                                <Text style={{marginLeft:responsiveFontSize(0.5),color:'grey',fontSize:responsiveFontSize(1.3)}}>4:00 PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
        )
    }

    if(loading){
        return <Loader/>
    }else{
        return(
            <ImageBackground
            source={require('../../../assets/main.png')}
            style={{width:'100%',flex:1}}>
                    <View style={{...styles.searchCon}}>
                        <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{...styles.field,width:'30%'}}>
                                <TextInput
                                placeholder="Arrival City"
                                style={{paddingVertical:0}}
                                />
                            </View>
                            <View style={{...styles.field,width:'30%'}}>
                                <TextInput
                                placeholder="Arrival City"
                                style={{paddingVertical:0}}
                                />
                            </View>
                            <View style={{...styles.field,width:'30%'}}>
                                <TextInput
                                placeholder="Arrival City"
                                style={{paddingVertical:0}}
                                />
                            </View>
                        </View>
                        {/* <TouchableOpacity style={{...styles.field,backgroundColor:'green',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <SearchIcon
                            size={responsiveFontSize(2)}
                            name="search"
                            color="white"
                            />
                            <Text style={{color:'white',marginLeft:responsiveFontSize(1)}}>Search</Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{position:'absolute',top:responsiveHeight(10),flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                        <TouchableOpacity 
                        onPress={()=>setMove({start:0,end:4})}
                        style={{width:'12%',justifyContent:'center',alignItems:'flex-end'}}>
                            <MoveIcon
                            name="chevron-back"
                            size={responsiveFontSize(4)}
                            color="#d8d8d8"
                            />
                        </TouchableOpacity>
                        <View style={{flex:1,zIndex:2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            {renderDate()}
                        </View>
                        <TouchableOpacity 
                        onPress={()=>setMove({start:4,end:7})}
                        style={{width:'12%',justifyContent:'center',alignItems:'flex-start'}}>
                            <MoveIcon
                            name="chevron-forward-outline"
                            size={responsiveFontSize(4)}
                            color="#d8d8d8"
                            />
                        </TouchableOpacity>
                    </View>
                    {true?(
                        <FlatList
                        data={[1,1,1,1,1,1,1,1,1,1,,1]}
                        renderItem={renderTicket}
                        contentContainerStyle={{width:'100%',marginTop:responsiveFontSize(2)}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item,i)=>i.toString()}
                        />
                    ):(
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:responsiveFontSize(3),color:'grey',fontFamily:'Montserrat-Bold'}}>Not Found</Text>
                        </View>
                    )}
            </ImageBackground>
        )
    }
}

const styles=StyleSheet.create({
    searchCon:{
        backgroundColor:'#edf5f8',
        width:'95%',
        borderRadius:responsiveFontSize(1),
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:responsiveFontSize(1.5),
        alignItems:'center',
        height:responsiveHeight(14),
        paddingTop:responsiveFontSize(1)
    },
    field:{
        width:'90%',
        backgroundColor:'white',
        marginVertical:responsiveFontSize(0.5),
        borderRadius:responsiveFontSize(0.5),
        height:responsiveHeight(4.5),
        justifyContent:'center',
        paddingHorizontal:responsiveFontSize(1)
    },
    dateCon:{
       width:responsiveWidth(15),
       height:responsiveWidth(15),
       borderRadius:responsiveFontSize(0.75),
       justifyContent:'center',
       alignItems:'center',
       marginHorizontal:responsiveFontSize(1)
    },
    ticketCon:{
        width:'95%',
        height:responsiveFontSize(18),
        borderRadius:responsiveFontSize(1),
        marginVertical:responsiveFontSize(0.75),
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
        marginLeft:'auto',
        marginRight:'auto',
        padding:responsiveFontSize(1.5)
    }
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(Booking);
