import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Button} from 'react-native'

export default function LoginScreen ({navigation}){
    return (
        <View style={{alignItems:'center', justifyContent:'center', padding:25, flex: 1}}>
            <Text>Login Screen</Text>
            <Button title="menuju skill screen" onPress={()=>navigation.navigate("Drawwer")} />
        </View>
    )
}



const styles = StyleSheet.create({})
