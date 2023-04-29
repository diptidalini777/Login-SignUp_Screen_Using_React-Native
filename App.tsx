import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Login from './Login'
import Register from './Register'

export default function App() {
  return (
    <View style={styles.root}>
      {
        <Login /> ?  <Login /> :  <Register />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#669999',
  }
})

