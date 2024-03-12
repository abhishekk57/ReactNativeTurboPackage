import React, { useEffect } from "react"
import { SafeAreaView, View, NativeModules } from "react-native";
import { Header } from "../../custom-component";

const {RNCalculator} = NativeModules;

const HomePage: React.FC = (props) => {
    const { navigation }: any = props;

    useEffect(()=>{
        console.log(navigation)
    },[])

    const onBackClick=()=>{
        const value =  RNCalculator.add(5,6);
        value.then((res:any)=>{
            console.log(res)
        })
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <View>
                <Header onBackClick={onBackClick} title="Back" />
                <View>

                </View>

            </View>
        </SafeAreaView>
    )
}
export { HomePage };