import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "sehathin-v2.firebaseapp.com",
  projectId: "sehathin-v2",
  storageBucket: "sehathin-v2.appspot.com",
  messagingSenderId: "761380557128",
  appId: "1:761380557128:web:aba90d2dbf96919b1ce37d"
  // measurementId: 'G-E54YZDBT6X',
};

const app = initializeApp(firebaseConfig);

export const auth = app;
export const db = app;