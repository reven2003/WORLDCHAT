import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, icons } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-purple-950 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={icons.globe}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Signup In to {' '}
            <Text className="text-blue-400">WorldChat</Text>
          </Text>

          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={() => router.back('sign-in')}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-400 font-pregular">
              Already have account ?
            </Text>
            <Link href="/sign-in">
              <Text className="text-lg font-semibold text-blue-100">Sign In</Text>
            </Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp