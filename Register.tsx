import React from 'react'
import { SafeAreaView,View,Image,StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native'

export default function Register(){
    return(
      <SafeAreaView style={styles.root}>
        <View>
          <Image
            source={require('./images/welcome-img.png')}
            style={{
              height: 240,
              width: 240,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          />
          <Text style={{
            fontFamily:'Rubik',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#00164d',
            textAlign: 'center',
            marginBottom: 30,
          }}>Create an account</Text>
          <View>
            <TextInput 
              style={styles.input}
              placeholder='Full Name'
              placeholderTextColor={'#444'}
              />
            <TextInput 
              style={styles.input}
              placeholder='Email ID'
              placeholderTextColor={'#444'}
              />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#444'}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={'#444'}
              secureTextEntry={true}
            />
          </View>
        
          <TouchableOpacity onPress={() => 'Login'}>
            <Text style={{
                width: '70%',
                color: '#fff',
                backgroundColor: '#4153EF',
                fontWeight: 'bold',
                padding: 10,
                margin: 5,
                fontSize: 24,
                alignSelf: 'center',
                textAlign: 'center',
                marginBottom:10,
                borderRadius: 5
            }}>
              Create Account
            </Text>
            </TouchableOpacity>

          <View style={{flexDirection:'row', justifyContent: 'center'}}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={()=>'Register'}>
            <Text style={{color: '#4153EF',fontWeight: 'bold'}}> LogIn</Text>
          </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root:{
      padding: 10,
    },
    input: {
      height: 50,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
      marginBottom: 10,
    },
    loginWith:{
      borderColor:'#ddd',
      borderWidth:2,
      borderRadius:10,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    loginWithImg: {
      height: 24,
      width: 24,
    }
  })