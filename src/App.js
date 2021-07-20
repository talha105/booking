import React, { Component, useEffect } from 'react';
import { View, Text ,Alert} from 'react-native';
import { Provider} from "react-redux"
import store from "./store/index";
import Routes from "./route";
import GlobalFont from 'react-native-global-font'
import { NativeBaseProvider, Box } from 'native-base'

function App(){

  useEffect(()=>{
    GlobalFont.applyGlobal("Montserrat-Regular")
  },[])

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App
