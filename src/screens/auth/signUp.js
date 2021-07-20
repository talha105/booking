import React,{useState,useEffect,useRef,useMemo} from 'react';
import { View ,Text,TouchableOpacity,ScrollView,StyleSheet,Dimensions,Image,Animated,ImageBackground} from 'react-native';
import InputField from '../../components/InputField';
import MailIcon from "react-native-vector-icons/Fontisto";
import PassIcon from "react-native-vector-icons/Feather";
import UserIcon from "react-native-vector-icons/AntDesign";
import LocationIcon from "react-native-vector-icons/Entypo";
import BackIcon from "react-native-vector-icons/Ionicons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import * as actions from "../../store/action"
import Btn from "../../components/btn"
import { connect } from 'react-redux';
import ErrorModel from '../../components/errorModel';
import { useTheme } from '@react-navigation/native';

const {height,width}=Dimensions.get('screen')

function SignUp({registration,navigation,user,clearUser}){
    const {colors}=useTheme()
    const [fields,setFields]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        mobileNo:"",
        address:""
    })
    
    const [submit,setSubmit]=useState();
    const [loader,setLoader]=useState(false)
    const [errorModel,setErrorModel]=useState(false)

    const translateY=useRef(new Animated.Value(600)).current
    useEffect(()=>{
        Animated.timing(translateY,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        }).start()
        navigation.addListener('blur',()=>{
        })
    },[])
    const ErrorMemo=useMemo(()=>{
        console.log("cal")
        user.success==false?setErrorModel(true):setErrorModel(false)
    },[user])
    function getValue(k,v){
        setFields((pS)=>{
            return{
                ...pS,
                [k]:v
            }
        })
    }

    function renderLoader(con){
        if(con){
            setLoader(true)
        }else{
            setLoader(false)
        }
    }

    function onRegisteration(){
        setSubmit(true)
        // if(fields.password==fields.confirmPassword&&fields.password && fields.email && fields.firstName && fields.lastName && fields.mobileNo && fields.address){
        //     renderLoader(true)
        //     registration(fields).then(()=>renderLoader(false)).catch((err)=>{
        //         renderLoader(false)
        //         alert(err)
        //     })
        // }
    }

    return(
                <ImageBackground 
                source={require("../../../assets/login.png")}
                style={{flex:1}}>
                    {errorModel?(
                        <ErrorModel
                        visible={errorModel}
                        title={user.message}
                        closeModle={()=>setErrorModel(false)}
                        />
                    ):null}
                    <View 
                    style={styles.con}>
                        <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={{width:'100%',paddingTop:responsiveFontSize(1.2),paddingLeft:responsiveFontSize(2)}}
                        >
                            <BackIcon
                            name="arrow-back"
                            color={"grey"}
                            size={30}
                            />
                        </TouchableOpacity>
                            <View style={{...styles.heading,marginBottom:responsiveFontSize(1)}}>
                                <Image
                                style={{width:responsiveFontSize(13),height:responsiveFontSize(10)}}
                                source={require('../../../assets/logo.png')}
                                />
                                <Text style={{fontSize:responsiveFontSize(4),color:'grey',fontWeight:'bold'}}>
                                    REGISTRATION
                                </Text>
                            </View>
                        <View style={{...styles.child}}>
                            <ScrollView
                            showsVerticalScrollIndicator={false}
                            >
                                <InputField
                                    error={!fields.firstName&& submit?true:null}
                                    getValue={(v)=>getValue('firstName',v)}
                                    icon={()=>{
                                        return(
                                            <UserIcon 
                                            name="user"
                                            color={colors.card}
                                            size={20}
                                            />
                                        )
                                    }}
                                    password={false}
                                    placeHolder="First Name"
                                    color="grey"
                                    
                                    />
                                    <InputField
                                    error={!fields.lastName&& submit?true:null}
                                    getValue={(v)=>getValue('lastName',v)}
                                    icon={()=>{
                                        return(
                                            <UserIcon 
                                            name="user"
                                            color={colors.card}
                                            size={20}
                                            />
                                        )
                                    }}
                                    password={false}
                                    placeHolder="Last Name"
                                    color="grey"
                                    
                                    
                                    />
                                    <InputField
                                    error={!fields.email&& submit?true:null}
                                    getValue={(v)=>getValue('email',v)}
                                    icon={()=>{
                                        return(
                                            <MailIcon 
                                            name="email"
                                            color={colors.card}
                                            size={20}
                                            />
                                        )
                                    }}
                                    password={false}
                                    placeHolder="Email"
                                    color="grey"
                                    
                                    />
                                    <InputField
                                    error={!fields.mobileNo&& submit?true:null}
                                    getValue={(v)=>getValue('mobileNo',v)}
                                    icon={()=>{
                                        return(
                                            <MailIcon 
                                            name="mobile-alt"
                                            color={colors.card}
                                            size={20}
                                            />
                                        )
                                    }}
                                    password={false}
                                    keyboardType="number"
                                    placeHolder="Mobile No"
                                    color="grey"
                                
                                    />
                                <InputField
                                    error={!fields.address&& submit?true:null}
                                    getValue={(v)=>getValue('address',v)}
                                    icon={()=>{
                                        return(
                                            <LocationIcon 
                                            name="location"
                                            color={colors.card}
                                            size={20}
                                            />
                                        )
                                    }}
                                    password={false}
                                    keyboardType="number"
                                    placeHolder="Address"
                                    color="grey"
                                
                                    />
                                <InputField
                                error={!fields.password&& submit?true:null}
                                getValue={(v)=>getValue('password',v)}
                                icon={()=>{
                                    return(
                                        <PassIcon 
                                        name="lock"
                                        color={colors.card}
                                        size={20}
                                        />
                                    )
                                }}
                                password={true}
                                placeHolder="Password"
                                color="grey"
                                
                                />
                                <InputField
                                error={!fields.confirmPassword&& submit?true:null}
                                getValue={(v)=>getValue('confirmPassword',v)}
                                icon={()=>{
                                    return(
                                        <PassIcon 
                                        name="lock"
                                        color={colors.card}
                                        size={20}
                                        />
                                    )
                                }}
                                password={true}
                                placeHolder="Confirm Password"
                                color="grey"
                                
                                />
                                <View>
                                    {
                                        fields.password==fields.confirmPassword?null:(
                                            <Text style={{fontSize:12,color:'red',width:'100%',textAlign:'center'}}>Password not match</Text>
                                        )
                                    }
                                </View>
                                <View style={{marginVertical:responsiveFontSize(1)}}>
                                <Btn
                                text="Sign Up"
                                loader={loader}
                                call={onRegisteration}
                                />
                                </View>
                                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <Text style={{color:colors.text,paddingVertical:responsiveFontSize(1),color:"black"}}>Registered Already? Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
    
                        </View>
                    </View>
                </ImageBackground>
    )
}


const styles=StyleSheet.create({
    con:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    child:{
        width:'90%',
        flex:1,
    },
    heading:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
    }
})

function mapStateToProps({user}){
    return{user}
}

export default connect(mapStateToProps,actions)(SignUp);
