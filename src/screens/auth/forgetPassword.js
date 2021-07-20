import React,{useState,useEffect,useRef} from 'react';
import { View ,Text,TouchableOpacity,StyleSheet,Dimensions,Image,Animated,ImageBackground} from 'react-native';
import InputField from '../../components/InputField';
import MailIcon from "react-native-vector-icons/Fontisto";
import BackIcon from "react-native-vector-icons/Ionicons";
import ResetPasswordIcon from "react-native-vector-icons/MaterialCommunityIcons"
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

function ForgetPassword({login,navigation,forgetPassword}){
    const {colors}=useTheme()
    const [fields,setFields]=useState({
        email:""
    })
    
    const [submit,setSubmit]=useState();
    const [loader,setLoader]=useState(false)

    useEffect(()=>{

    },[])
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

    function onForgetPassword(){
        setSubmit(true)
        if(fields.email){
            renderLoader(true)
            forgetPassword(fields).then(()=>renderLoader(false)).catch((err)=>{
                renderLoader(false)
                alert(err)
            })
        }
    }

    return(
            <ImageBackground 
            source={require("../../../assets/login.png")}
            style={{flex:1}}>
                    <View 
                    style={styles.con}>
                        <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={{width:'100%',paddingTop:responsiveFontSize(1.2),paddingLeft:responsiveFontSize(2)}}
                        >
                            <BackIcon
                            name="arrow-back"
                            color="grey"
                            size={30}
                            />
                        </TouchableOpacity>
                            <View style={{...styles.heading,marginBottom:responsiveFontSize(3)}}>
                                <Image
                                style={{width:responsiveFontSize(13),height:responsiveFontSize(10)}}
                                source={require('../../../assets/logo.png')}
                                />
                                <Text style={{fontSize:responsiveFontSize(4),color:'grey',fontWeight:'bold',marginTop:responsiveFontSize(1)}}>
                                    Forget Password
                                </Text>
                            </View>
                        <Animated.View style={{...styles.child}}>
                            <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginVertical:5}}>
                                <ResetPasswordIcon
                                name="lock-reset"
                                color={colors.card}
                                size={responsiveFontSize(10)}
                                />
                            </View>
                            <Text style={{width:'100%',textAlign:'center',fontSize:16,color:'grey'}}>
                                Please enter your email address, {'\n'}
                                we will send you a link to reset password
                            </Text>
                                    <InputField
                                    error={!fields.email&& submit?true:null}
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
                                    placeHolder="Email"
                                    color="grey"
                                    />
                            {/* <View>
                                <Text style={{fontSize:12,color:'red',width:'100%',textAlign:'center'}}>Server Error</Text>
                            </View> */}
                                <View style={{marginVertical:responsiveFontSize(1)}}>
                                <Btn
                                text="Reset Password"
                                loader={loader}
                                call={onForgetPassword}
                                />
                                </View>
                        </Animated.View>
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
        width:'90%'
    },
    heading:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default connect(null,actions)(ForgetPassword);
