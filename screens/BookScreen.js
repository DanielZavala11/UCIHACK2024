import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const BookScreen = (data) => {
  console.log(data)
  return (
    <SafeAreaView style={tw`bg-red-400 h-full`}>
    <View style={tw`m-auto bg-opacity-5`}>
      <Text>Title: Grapes of Wrath</Text>
      <Text>Author: John Steinbeck</Text>
      <Text>Cultural Relevance: Ipsem lorem</Text>
    </View>
    </SafeAreaView>
  )
}

export default BookScreen