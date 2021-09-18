import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

import Layout from "../components/Layout";
import firebaseConfig from "../src/firebaseConfig";

export default function Auth() {
  return (
    <Layout>
      <h1>My App</h1>
      <p>Please sign-in:</p>
    </Layout>
  );
}
