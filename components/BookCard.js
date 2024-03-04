import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const BookCard = ({id, title, author}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView >
      <TouchableOpacity
             style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-5 w-48 h-3/6 rounded-lg shadow-md`}
             
             onPress={() => navigation.navigate('BookScreen')}
            >
              <View style={tw`rounded-lg items-center`}>
                <Text style={tw`m-auto items-center`}>{title}</Text>
                <Text style={tw`mx-auto`}>{author}</Text>
              </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BookCard