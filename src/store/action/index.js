import axios from "axios"
import {
    LOGIN,
} from "./type"
import AsyncStorage from "@react-native-community/async-storage"
import {api} from "../../config/config.json"



export const login=(data)=>async dispatch=>{
    const res=await axios.post(`${api}/api/login`,data)
    res.data.success?await AsyncStorage.setItem('id',res.data.data.data.id.toString()):null
    dispatch({
        type:LOGIN,
        payload:res.data
    })
}



