import React, { Component } from 'react'
import {
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Bell extends Component {
  render () {
    return (
      <View style={container}>
        <Icon style={icon} name='ios-notifications' />
      </View>
    )
  }
}

var icon = {
  flex: 0,
  alignSelf: 'flex-end',
  fontSize: 35,
  color: '#000'
}

var container = {
  width: '100%',
  padding: 20
}
