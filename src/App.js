import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import ChatRoom from './components/ChatRoom';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
  apiKey: "AIzaSyD66EzsEtDauGdaorASiXkHTYFKFGGWw68",
  authDomain: "chatflix-1e085.firebaseapp.com",
  projectId: "chatflix-1e085",
  storageBucket: "chatflix-1e085.appspot.com",
  messagingSenderId: "401965432223",
  appId: "1:401965432223:web:8089604ae20b7396a911aa",
  measurementId: "G-DZX5WV17LN"
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>ChatFlix</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
