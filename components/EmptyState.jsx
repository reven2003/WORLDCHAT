import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className = "justify-center items-center px-3">
      <Image 
        source={images.empty}
        className = "w-[270px] h-[200px]"
        resizeMode="contain"
      />
    <Text className = "font-pmedium text-sm text-gray-100">{subtitle}</Text>
    <Text className = "text-xl  text-center font-psemibold text-white mt-2 mb-7">{title}</Text>

    <CustomButton 
        title="Publish App"
        handlePress={() => router.push('/create')}
        containerStyle= "w-full my-5"
    />

    </View>
  )
}

export default EmptyState