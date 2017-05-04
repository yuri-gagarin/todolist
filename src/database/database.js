import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBckf_p4eLyfj-NrtGUB_51dFC-iTZiTkY",
    authDomain: "blocitoff-69708.firebaseapp.com",
    databaseURL: "https://blocitoff-69708.firebaseio.com",
    storageBucket: "blocitoff-69708.appspot.com",
    messagingSenderId: "321005892281"
};
firebase.initializeApp(config);


export const db = firebase.database();
