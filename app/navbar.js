import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Navbar extends Component {
  render () {
    return (
      <View style={navbar}>
        <View style={row}>
          <Icon style={getStyle(this, 0)} name='ios-medkit-outline' />
          <Text style={text} >Cursos</Text>
        </View>
        <View style={row}>
          <Icon style={getStyle(this, 1)} name='ios-paper-outline' />
          <Text style={text} >Mis Noticias</Text>
        </View>
        <View style={row}>
          <Icon style={getStyle(this, 2)} name='ios-calendar-outline' />
          <Text style={text} >Calendario</Text>
        </View>
        <View style={row}>
          <Icon style={getStyle(this, 3)} name='ios-cart-outline' />
          <Text style={text} >Ofertas</Text>
        </View>
      </View>
    )
  }
}

function getStyle (self, i) {
  return self.props.activeTab === i ? activeIcon : icon
}

var text = {
  alignSelf: 'center',
  color: '#000'
}

var icon = {
  fontSize: 35,
  alignSelf: 'center',
  color: '#000'
}

var row = {
  flex: 1
}

var activeIcon = {
  fontSize: 35,
  alignSelf: 'center',
  color: 'rgb(59,89,152)'
}

var navbar = {
  backgroundColor: '#fff',
  padding: 5,
  paddingBottom: 10,
  position: 'absolute',
  bottom: 0,
  flex: 1,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around'
}
