import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setMood, setSeason } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  
  const [locationTxt, setLocationTxt] = useState('')
  const [moodTxt, setMoodTxt] = useState('')
  const [seasonTxt, setSeasonTxt] = useState('')

  //let serverUrl = 'http://127.0.0.1:5000/weather-test'
  
  let nextScreen = () => {
    
    /*fetch(serverUrl)
        .then(res => res.json())
        .then(data => {
           console.log(data.current.cloud)
           dispatch(setMsg(data.current.cloud)) 
        })*/
    dispatch(setLocation(locationTxt))
    dispatch(setMood(moodTxt))
    dispatch(setSeason(seasonTxt))
    navigation.navigate('InfoScreen')
  }
  return (
    <SafeAreaView style={tw`bg-red-400 h-full`}>
      <View style={tw`h-40`}>
        <Text style={tw`p-5 mx-auto text-xl`}>Hello, Dave</Text>
        <Image style={tw`h-48 mx-auto rounded-full`} source={require('../assets/stmarylake2x.jpg')}/>
        <Text style={tw`mx-auto mt-5`}>How may I help you?</Text>
        
        {/*<Text id='display'>{useSelector(selectMsg)}</Text>*/}
        <Text style={tw`mx-auto mt-5`}>Enter Location:</Text>
        <TextInput id='loc' style={tw`border-black border-4 w-3/6 mx-auto`} onChangeText={newText => setLocationTxt(newText)}/>
        <Text style={tw`mx-auto mt-5`}>Enter Mood:</Text>
        <TextInput id='loc' style={tw`border-black border-4 w-3/6 mx-auto`} onChangeText={newText => setMoodTxt(newText)}/>
        <Text style={tw`mx-auto mt-5`}>Enter Season:</Text>
        <TextInput id='loc' style={tw`border-black border-4 w-3/6 mx-auto`} onChangeText={newText => setSeasonTxt(newText)}/>
        <Button 
          title="Press me"
          onPress={()=>{nextScreen()}}
          style={tw`text-red-800 border-black border-4`}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})