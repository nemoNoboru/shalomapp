/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Navbar from './app/navbar'
import Bell from './app/bell'
import Cursos from './app/cursos/cursos'

var ScrollableTabView = require('react-native-scrollable-tab-view')

export default class shalomapp extends Component {
  render () {
    return (
      <ScrollableTabView renderTabBar={() => <Navbar />} tabBarPosition='bottom'>
        <View>
          <Bell />
          <Cursos />
        </View>
        <View>
          <Bell />
        </View>
        <View>
          <Bell />
        </View>
        <View>
          <Bell />
        </View>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('shalomapp', () => shalomapp)
