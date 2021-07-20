import React,{useEffect, useRef,useState} from 'react';
import { View ,Text,ImageBackground,ScrollView,StyleSheet,Dimensions,Image,TouchableOpacity, Animated} from 'react-native';
import InputField from '../../components/InputField';
import MailIcon from "react-native-vector-icons/Fontisto";
import PassIcon from "react-native-vector-icons/Feather";
import ValidateEmail from "../../utils/emailValidation"
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import * as actions from "../../store/action"
import Btn from "../../components/btn"
import { connect } from 'react-redux';
import {useTheme} from "@react-navigation/native"
const {height,width}=Dimensions.get('screen')

function Login({login,navigation,user}){
    const {colors}=useTheme()
    const [fields,setFields]=useState({
        email:"",
        password:""
    })
    const [submit,setSubmit]=useState();
    const [loader,setLoader]=useState(false)

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

    function onLogin(){
        setSubmit(true)
        if(fields.password && fields.email){
            renderLoader(true)
            login(fields).then(()=>renderLoader(false)).catch((err)=>{
                renderLoader(false)
                alert(err)
            })
        }
    }

    return(
                <ImageBackground style={{flex:1}} source={require('../../../assets/login.png')}>
                    <ScrollView 
                    style={{flex:1}}>
                    <View style={styles.con}>
                            <View style={{...styles.heading,marginBottom:20}}>
                                <Image
                                resizeMode="contain"
                                style={{width:responsiveFontSize(20),height:responsiveFontSize(15)}}
                                source={require('../../../assets/logo.png')}
                                />
                            </View>
                        <View style={styles.child}>
                        <View style={{...styles.heading,width:'100%'}}>
                                <Text style={{color:"grey",textAlign:'center',width:'100%',fontSize:responsiveFontSize(4),fontWeight:'700',paddingVertical:responsiveFontSize(2)}}>LOGIN</Text>
                            </View>
                            <InputField
                                error={!fields.email &&  submit?true:null}
                                getValue={(v)=>getValue('email',v)}
                                icon={()=>{
                                    return(
                                        <MailIcon 
                                        name="email"
                                        color={colors.card}
                                        size={18}
                                        />
                                    )
                                }}
                                password={false}
                                placeHolder="Email or User name"
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
                                    size={18}
                                    />
                                )
                            }}
                            password={true}
                            placeHolder="Password"
                            color="grey"
                            />
                            <View>
                                {user.data.error?<Text style={{fontSize:12,color:'red',width:'100%',textAlign:'center'}}>{user.message}</Text>:null}
                            </View>
                            <View style={{marginVertical:responsiveFontSize(1)}}>
                            <Btn
                            text="login"
                            loader={loader}
                            call={onLogin}
                            />
                            </View>
                        </View>
                        <View style={{width:'80%',justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity 
                            onPress={()=>navigation.push('forgetPassword')}
                            style={{width:'100%',justifyContent:'center',alignItems:'center'}}
                            >
                                <Text style={{color:'black',marginTop:responsiveFontSize(2)}}>Forget Password</Text>
                            </TouchableOpacity>
                            <Text style={{marginVertical:responsiveFontSize(2)}}>or</Text>
                            <TouchableOpacity>
                                <Text style={{color:"black"}} onPress={()=>navigation.push('signUp')}>Registration</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                </ImageBackground>
    )
}


const styles=StyleSheet.create({
    con:{
        marginTop:responsiveFontSize(7),
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    child:{
        width:'90%'
    },
    heading:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center'
    }
})

function mapStateToProps({user}){
    return {user}
}

export default connect(mapStateToProps,actions)(Login);
