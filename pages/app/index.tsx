import { useState, useEffect } from "react";

import { Container } from "@mui/material";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc } from "firebase/firestore";

import Layout from "../../components/Layout";
import AppPlaces from "../../components/AppPlaces";
import AppPlans from "../../components/AppPlans";
import firebaseConfig from "../../src/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPlaces(db) {
  const placesSnapshot = await getDocs(collection(db, "places"));
  console.log(placesSnapshot.docs);
  return placesSnapshot.docs.map((doc) => doc.data());
}

const defaultPlaces = [
  {
    name: "CN Tower",
    date: "2021-09-19T01:26:26Z",
    description:
      "The CN Tower (French: Tour CN) is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower located in the downtown core of Toronto, Ontario, Canada",
    photo: "/static/images/cn-tower.jpg",
  },
  {
    name: "University of Waterloo",
    date: "2021-09-19T01:26:26Z",
    description:
      "The University of Waterloo (commonly referred to as Waterloo, UW, or UWaterloo) is a public research university with a main campus in Waterloo, Ontario, Canada.",
    photo: "/static/images/uwaterloo.png",
  },
];

const defaultPlaces2 = [
  {
    name: "CN Tower",
    date: "2021-09-19T01:26:26Z",
    description:
      "The CN Tower (French: Tour CN) is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower located in the downtown core of Toronto, Ontario, Canada",
    photo: "/static/images/cn-tower.jpg",
  },
];

export default function AppHome() {
  const [places, setPlaces] = useState(null);

  useEffect(async () => {
    setPlaces(await getPlaces(db));
  }, []);

  return (
    <Layout>
      <Container maxWidth="xl">
        <h1>👋 Welcome, Alex</h1>
        <h2>Upcoming Plans</h2>
        <AppPlaces places={defaultPlaces} />
        <h2>Places Visited</h2>
        <AppPlaces places={defaultPlaces2} />
      </Container>
    </Layout>
  );
}
