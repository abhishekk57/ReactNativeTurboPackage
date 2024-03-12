import React from "react";
import { Platform, View, TouchableOpacity, Text } from "react-native";

interface HeaderProps {
    onBackClick: () => void;
    title: string;
}
const Header: React.FC<HeaderProps> = ({ onBackClick, title }) => {

    return (
        <View style={{ width: "100%", height: Platform.OS === "ios" ? 86 : 68, backgroundColor: "red" }}>
            <TouchableOpacity style={{justifyContent:"center",width:"100%",height:"100%",
        paddingStart:16}} onPress={onBackClick}>
                <Text style={{ color: "white", fontSize: 16 }}>{"" + title}</Text>
            </TouchableOpacity>
        </View>
    )
};
export { Header };