var admin = require('firebase-admin')

var serviceAccount = require('path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_URL
})

module.exports = admin
