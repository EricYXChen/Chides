import Link from "next/link";

import Layout from "../components/Layout";

import { Grid, Button } from "@mui/material";

export default function Auth() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "5rem" }}>It's Chides time.</h2>
        <Link href="/auth">
          <a style={{ textDecoration: "none" }}>
            <Button variant="contained">Login</Button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
