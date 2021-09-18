import { getAuth } from "firebase/auth";
import firebase from "firebase";
import Layout from "../components/Layout";
import firebaseConfig from "../src/firebaseConfig";
import  StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const config = firebaseConfig; 

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app(); // if already initialized, use that one
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function Auth() {
  return (
    <div>
      <Layout>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </Layout>
    </div>
  );
}

export default Auth


  
