// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCwNJBHmZk_yGxWYHLJIRKt7n3kXf4T0f8',
	authDomain: 'bagel-7b72b.firebaseapp.com',
	projectId: 'bagel-7b72b',
	storageBucket: 'bagel-7b72b.appspot.com',
	messagingSenderId: '297968612785',
	appId: '1:297968612785:web:8008ef990d5d672abb7990',
	measurementId: 'G-VEDQ3YRZRR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
