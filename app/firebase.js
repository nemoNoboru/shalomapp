const firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyDzbuTeL8UIRvO8ewczJkGBiOHQLQUyjhg',
  authDomain: 'lince-16aef.firebaseapp.com',
  databaseURL: 'https://lince-16aef.firebaseio.com',
  projectId: 'lince-16aef',
  storageBucket: 'lince-16aef.appspot.com',
  messagingSenderId: '615635800816'
}
export default firebase.initializeApp(config)
