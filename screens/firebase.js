// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBuoBeN7z2VX-kSj8s8UFeFoLe87hplmuY',
  authDomain: 'test-project-627ff.firebaseapp.com',
  projectId: 'test-project-627ff',
  storageBucket: 'test-project-627ff.appspot.com',
  messagingSenderId: '532552037311',
  appId: '1:532552037311:web:5c966c317da6763b0f670a',
  measurementId: 'G-DETH51GTRJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
