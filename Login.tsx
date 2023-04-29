import React from 'react'
import { SafeAreaView,View,Image,StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native'

export default function Login(){
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
            marginBottom: 20,
          }}>LogIn</Text>
          <View>
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
          </View>
          <Text style={{
            color: '#000000',
            fontSize: 18,
            paddingHorizontal: 12,
            fontWeight: '500'
          }}>
            Forget Password?
          </Text>
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
              Login
            </Text>
          </TouchableOpacity>
          <Text style ={{
              textAlign: 'center', 
              color: '#000',
              marginBottom:20
          }}>
            Or, Login with...
          </Text>
          <View style= {{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20
            }}>
            <TouchableOpacity onPress={()=> {}} style={styles.loginWith}>
            <Image
              source={require('./images/google.png')}
              style={styles.loginWithImg}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {}} style={styles.loginWith}>
            <Image
              source={require('./images/facebook.png')}
              style={styles.loginWithImg}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {}} style={styles.loginWith}>
            <Image
              source={require('./images/apple.png')}
              style={styles.loginWithImg}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {}} style={styles.loginWith}>
            <Image
              source={require('./images/twitter.png')}
              style={styles.loginWithImg}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'center'}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={()=>'Register'}>
            <Text style={{color: '#4153EF',fontWeight: 'bold'}}>Register</Text>
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