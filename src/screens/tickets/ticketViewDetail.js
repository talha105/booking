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
import SuccesModel from "../../components/succesModel"
import Loader from '../../components/pageLoader';
import Btn from '../../components/btn';
import { CardField, useStripe ,StripeProvider} from '@stripe/stripe-react-native';



function TicketViewDetail({navigation}){
    const {createToken } = useStripe();
    const {colors}=useTheme()
    const [model,setModel]=useState(false)
    const [submit,setSubmit]=useState(false)
    const [loader,setLoader]=useState(false)
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        expireMonth:"",
        stripeToken:"",
        lastNumber:""
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

    const getValue=(k,v)=>setFields({...fields,[k]:v})

    if(loading){
        return <Loader/>
    }else{
        return(
            <View
            style={{width:'100%',flex:1}}>
                <SuccesModel
                closeModle={()=>setModel(false)}
                title="Update Successfully"
                visible={model}
                />
                <ScrollView style={{flex:1}}>
                    <View style={{borderRadius:7}}>
                        <ImageBackground
                        resizeMode="stretch"
                        style={{width:responsiveWidth(100),height:responsiveHeight(28),padding:responsiveFontSize(1),alignItems:'center'}}
                        source={require('../../../assets/background.png')}
                        >
                            <Image
                            style={{width:responsiveFontSize(15),height:responsiveFontSize(15)}}
                            source={require("../../../assets/plane.png")}
                            />
                            <View style={{marginTop:responsiveFontSize(1),justifyContent:'space-between',alignItems:'center',flexDirection:'row',width:'90%'}}>
                                <View style={{...styles.Dcon,width:responsiveWidth(17)}}>
                                    <Text style={{color:'grey',marginTop:responsiveFontSize(1)}}>Day</Text>
                                    <Text style={{flex:1,textAlignVertical:'center',color:"#001153",fontSize:responsiveFontSize(2),fontFamily:'Montserrat-Medium'}}>Mon</Text>
                                </View>
                                <View style={{...styles.Dcon,width:responsiveWidth(30)}}>
                                    <Text style={{color:'grey',marginTop:responsiveFontSize(1)}}>Arrival</Text>
                                    <Text style={{flex:1,textAlignVertical:'center',color:"#001153",fontSize:responsiveFontSize(2),fontFamily:'Montserrat-Medium'}}>2:00 AM</Text>
                                </View>
                                <View style={{...styles.Dcon,width:responsiveWidth(30)}}>
                                    <Text style={{color:'grey',marginTop:responsiveFontSize(1)}}>Departure</Text>
                                    <Text style={{flex:1,textAlignVertical:'center',color:"#001153",fontSize:responsiveFontSize(2),fontFamily:'Montserrat-Medium'}}>6:00 AM</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{borderRadius:responsiveFontSize(1),marginVertical:responsiveFontSize(1.5),paddingVertical:responsiveFontSize(2),alignItems:'center',...styles.ticketInfo,width:'95%',marginLeft:'auto',marginRight:'auto'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:responsiveFontSize(2),width:'100%',textAlign:'center',color:colors.thm,textTransform:'uppercase',marginVertical:responsiveFontSize(1)}}>Ticket Info</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:responsiveWidth(90),marginTop:responsiveFontSize(1)}}>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Seats: 10</Text>
                                </View>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Price $300</Text>
                                </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:responsiveWidth(90),marginTop:responsiveFontSize(1)}}>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Arrival: Lahore</Text>
                                </View>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Departure: Karachi</Text>
                                </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:responsiveWidth(90),marginTop:responsiveFontSize(1)}}>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Arrival Time: 2:00AM</Text>
                                </View>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Departure Time: 4:00PM</Text>
                                </View>
                        </View>
                        </View>
                        <View style={{width:'95%',marginLeft:'auto',marginRight:'auto'}}>
                        <Text style={{borderBottomWidth:0.5,paddingBottom:responsiveFontSize(1),borderBottomColor:'grey',fontFamily:'Montserrat-Medium',fontSize:responsiveFontSize(1.75),width:'100%',textAlign:'left',color:"grey",textTransform:'uppercase',marginVertical:responsiveFontSize(1)}}>Client Info</Text>
                        <View>
                            <Text style={{color:'grey',fontSize:responsiveFontSize(1.5),marginBottom:responsiveFontSize(0.3)}}>Name: Steve Mount</Text>
                            <Text style={{color:'grey',fontSize:responsiveFontSize(1.5),marginBottom:responsiveFontSize(0.3)}}>Mobile No: 03472748550</Text>
                            <Text style={{color:'grey',fontSize:responsiveFontSize(1.5),marginBottom:responsiveFontSize(0.3)}}>Email: stevemount@gmail.com</Text>
                            <Text style={{color:'grey',width:'60%',fontSize:responsiveFontSize(1.5),marginBottom:responsiveFontSize(0.3)}}>Address: House No 185 street 5 line no 10</Text>
                        </View>
                        <View style={{marginTop:responsiveFontSize(1.5)}}>
                            <Btn
                            text="print"
                            />
                        </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  Dcon:{
      backgroundColor:'white',
      width:responsiveWidth(45),
      height:responsiveWidth(15),
      alignItems:'center',
      borderRadius:responsiveFontSize(1)
  },
  ticketInfo:{
      backgroundColor:'white',
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(TicketViewDetail);
