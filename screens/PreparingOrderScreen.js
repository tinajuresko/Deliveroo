import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
        <Animatable.Image 
            source={require('../assets/preparing_order.gif')}
            animation='slideInUp'
            iterationCount={1}
            className='h-96 w-96'
        />

        <Animatable.Text
            animation='slideInUp'
            iterationCount={1}
            className='text-lg my-10 text-white font-bold'
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen