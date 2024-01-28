import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectLocation, selectMood, selectSeason } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookCard from '../components/BookCard'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "1",
    title: "Grapes of Wrath",
    author: "Steinbeck"
  },
  {
    id:  "2",
    title: "Eminences Grises",
    author: "Faligot"
  }
]

const InfoScreen = () => {
  const navigation = useNavigation()
  const location = useSelector(selectLocation)
  const mood = useSelector(selectMood) 
  const season = useSelector(selectSeason)
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaView style={tw`bg-red-400 h-full`}>
    <View>
      <Text style={tw`mx-auto`}>Suggestions</Text>
      <Text >You chose:</Text>
      <Text style={tw`p-2.5 border-black border-8 bg-red-300 text-center`}>{location}</Text>
      <Text style={tw`p-2.5 border-black border-8 bg-red-300 text-center`}>{mood}</Text>
      <Text style={tw`p-2.5 border-black border-8 bg-red-300 text-center`}>{season}</Text>
      <View>
       <FlatList 
          data={data} 
          horizontal
          keyExtractor={(item) => item.id}
          renderItem = {({ item }) => (
            <TouchableOpacity
             style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-5 w-40 h-full`}
             onPress={() => navigation.navigate('BookScreen')}
            >
              <View>
                <Text style={tw`mx-auto`}>{item.title}</Text>
                <Text style={tw`mx-auto`}>{item.author}</Text>
              </View>
            </TouchableOpacity>
          )}
       ></FlatList>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default InfoScreen