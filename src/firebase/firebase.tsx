import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'sehathin-ec047.firebaseapp.com',
  projectId: 'sehathin-ec047',
  storageBucket: 'sehathin-ec047.appspot.com',
  messagingSenderId: '214676627052',
  appId: '1:214676627052:web:da5e3bf9a0dd93f718c249',
  measurementId: 'G-E54YZDBT6X',
};

const app = initializeApp(firebaseConfig);

export const auth = app;
export const db = app;