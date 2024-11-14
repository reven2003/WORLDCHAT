import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../constants'


const FormField = ({ title, value, placeholder, handleChangeText,
    otherStyles, ...props }) => {

    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-white font-pmedium">
                {title}
            </Text>

            <View className="border-2 border-black-200 w-full h-16 px-4 bg-gray-200
    rounded-2xl focus:border-secondary-500 items-center flex-row">
                <TextInput
                    className="flex-1 text-black-200 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

                        <Image source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />

                    </TouchableOpacity>
                )}

            </View>
        </View>
    )
}

export default FormField