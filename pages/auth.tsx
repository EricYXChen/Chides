import { useEffect } from "react";

import { Container, Card } from "@mui/material";

import * as firebase from "firebase/app";
import { getAuth, EmailAuthProvider, GithubAuthProvider } from "firebase/auth";

import "firebaseui/dist/firebaseui.css";

import Layout from "../components/Layout";
import firebaseConfig from "../src/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export default function Auth() {
  useEffect(async () => {
    // delay the import until window object is ready
    const firebaseui = await import("firebaseui");
    var ui = new firebaseui.auth.AuthUI(getAuth(app));
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "/app",
      signInOptions: [EmailAuthProvider.PROVIDER_ID],
      // Other config options...
    });
  }, []);

  return (
    <Layout>
      <div id="firebaseui-auth-container" style={{ marginTop: 50 }} />
    </Layout>
  );
}
