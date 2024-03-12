import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useDeferredValue, useEffect, useState } from "react";
const LogIn: React.FC = (props): any => {

    const [email,setEmail] = useState('');
    const dEmailValue = useDeferredValue(email); 
    const {navigation}:any = props;
    useEffect(()=>{
       console.log(dEmailValue)
    },[]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1,justifyContent:"center",
        alignItems:"center" }}>

                <TextInput style={{width:"96%",height:48,borderColor:"#CCC",
            paddingStart:20,borderWidth:1,margin:5,borderRadius:26}} onChangeText={(value)=> setEmail(value)} value={email}></TextInput>
                <TouchableOpacity
                    style={{
                        width: 200, height: 48, backgroundColor: '#CCC', borderRadius: 16,
                        justifyContent: "center", alignItems: "center"
                    }}
                    onPress={() => {
                        navigation.navigate('homepage')
                    }}>
                    <Text style={{ fontSize: 16,fontWeight:"700" }}>{"Click here"}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export { LogIn };