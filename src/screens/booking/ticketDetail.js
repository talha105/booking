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



function TicketDetail({navigation}){
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
                        style={{width:responsiveWidth(100),height:responsiveHeight(35),padding:responsiveFontSize(1),alignItems:'center'}}
                        source={require('../../../assets/background.png')}
                        >
                            <View style={{flexDirection:'row',justifyContent:'space-between',width:responsiveWidth(90),marginTop:responsiveFontSize(1)}}>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Flight: 234970892</Text>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5),marginTop:responsiveFontSize(0.5)}}>Available Seats: 67</Text>
                                </View>
                                <View>
                                    <Text style={{color:'grey',fontSize:responsiveFontSize(1.5)}}>Date: 22/04/2021</Text>
                                </View>
                            </View>
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
                        <View style={{margin:responsiveFontSize(2)}}>
                            <View>
                            <View style={{...styles.seat,backgroundColor:'white',borderRadius:7,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <View style={{backgroundColor:'#f6f6f6',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'20%',borderBottomLeftRadius:responsiveFontSize(1),borderTopLeftRadius:responsiveFontSize(1)}}>
                                    <Text>Seats</Text>
                                </View>
                                <View style={{backgroundColor:'white',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'50%'}}>
                                    <Text>10</Text>
                                </View>
                                <View style={{backgroundColor:'#f6f6f6',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'15%'}}>
                                    <Text style={{fontSize:responsiveFontSize(3),color:'black'}}>+</Text>
                                </View>
                                <View style={{borderLeftWidth:0.5,borderLeftColor:'grey',backgroundColor:'#f6f6f6',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'15%',borderTopRightRadius:responsiveFontSize(1),borderBottomRightRadius:responsiveFontSize(1)}}>
                                    <Text style={{fontSize:responsiveFontSize(3),color:'black'}}>-</Text>
                                </View>
                            </View>
                            <View style={{...styles.seat,backgroundColor:'white',borderRadius:7,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:responsiveFontSize(0.5)}}>
                                <View style={{backgroundColor:'#f6f6f6',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'30%',borderBottomLeftRadius:responsiveFontSize(1),borderTopLeftRadius:responsiveFontSize(1)}}>
                                    <Text>Total Price</Text>
                                </View>
                                <View style={{backgroundColor:'white',height:responsiveHeight(5),justifyContent:'center',alignItems:'center',width:'70%',borderTopRightRadius:responsiveFontSize(1),borderBottomRightRadius:responsiveFontSize(1)}}>
                                    <Text style={{color:'green'}}>$3890</Text>
                                </View>
                            </View>
                            <View>
                            <StripeProvider publishableKey="pk_test_51JAxIVDTGrqq3ff6IYrR0NvnkzFESSfjXzm5jCnstft5m7D6bw26sueDjr1wRWswqc9FcThsN5Qmhz8uVioqsXZ800sT3QBXFu">
                                <CardField
                                postalCodeEnabled={false}
                                placeholder={{
                                    number: '4242 4242 4242 4242',
                                }}
                                
                                cardStyle={{
                                    backgroundColor: '#FFFFFF',
                                    textColor: '#000000',
                                }}
                                style={{
                                    width: '100%',
                                    height: 50,
                                    marginVertical: responsiveFontSize(1),
                                }}
                                onCardChange={(cardDetails) => {
                                    if(cardDetails.complete){
                                        createToken(cardDetails).then(res=>{
                                            if(res.token){
                                                getValue('expireMonth',res.token.card.expMonth)
                                                getValue('stripeToken',res.token.id)
                                                getValue('lastNumber',res.token.card.last4)
                                            }
                                            
                                        })
                                    }
                                    
                                }}

                                />
                        </StripeProvider>
                                <Btn
                                text="Book Now"
                                />
                            </View>
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
  seat:{
    marginVertical:responsiveFontSize(1.5),
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(TicketDetail);
