import React, { Component } from 'react'
import {
  ScrollView,
  Image
} from 'react-native'

import firebase from '../firebase'

export default class Cursos extends Component {
  constructor (props) {
    super(props)
    this.state = {cursos: []}
  }

  componentDidMount () {
    var cursos = firebase.database().ref('/cursos').limitToFirst(5)
    cursos.on('value', (snp) => {
      this.setState({cursos: Object.values(snp.val())})
    })
  }

  render () {
    var t = this.state.cursos.map((e) => <Image source={{uri: e.img_url}} style={{width: '100%', height: 200}} />)
    return (
      <ScrollView>
        {t}
      </ScrollView>
    )
  }
}
