import { useState, useEffect } from "react";

import { Container } from "@mui/material";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc } from "firebase/firestore";

import Layout from "../components/Layout";
import firebaseConfig from "../src/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPlaces(db) {
  const placesSnapshot = await getDocs(collection(db, "places"));
  console.log(placesSnapshot.docs);
  return placesSnapshot.docs.map((doc) => doc.data());
}

export default function AppHome() {
  const [places, setPlaces] = useState(null);

  useEffect(async () => {
    setPlaces(await getPlaces(db));
  }, []);

  return (
    <Layout>
      <Container>
        <h1>Upcoming Plans</h1>
        <pre>{JSON.stringify(places, undefined, 4)}</pre>
        <h1>Places Visited</h1>
      </Container>
    </Layout>
  );
}
