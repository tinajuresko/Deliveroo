import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import MapView, {Marker} from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="closecircle" size={30} color="white" />
            </TouchableOpacity>
            <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                    <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/fls'
                    }}
                    className='w-20 h-20'
                />
            </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>

            <Text className='mt-3 text-gray-500'>Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>

      {/*Not supported on web :( */}
      <MapView initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      className='flex-1 mt-10 z-0'
      mapType='standard'
      >
        <Marker
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
            }}
            title={restaurant.title}
            identifier='origin'
            pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='flex-row bg-white items-center space-x-5 h-28'>
        <Image
        source={{
            uri: 'https://links.papareact.com/wru'
        }}
        className='h-12 w-12 rounded-full bg-gray-300 ml-5'/>
        <View className='flex-1'>
            <Text className='text-lg'>
                Tina Juresko
            </Text>
            <Text className='text-gray-400'>
                Your Rider
            </Text>
        </View>
        <Text className='text-[#00CCBB] text-lg font-bold mr-5'>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen