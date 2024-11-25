import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if it's supported
export const initializeAnalytics = async () => {
  if (typeof window !== 'undefined') {
    try {
      const isAnalyticsSupported = await isSupported();
      if (isAnalyticsSupported) {
        const analytics = getAnalytics(app);
        return analytics;
      } else {
        console.warn('Firebase Analytics is not supported in this environment.');
      }
    } catch (error) {
      console.error('Failed to initialize Firebase Analytics:', error);
    }
  } else {
    console.warn('Firebase Analytics cannot be initialized on the server.');
  }
};
