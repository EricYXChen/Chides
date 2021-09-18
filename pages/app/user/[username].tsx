import Layout from "../../../components/Layout";

import { Container } from "@mui/material";

export default function UserPage() {
  return (
    <Layout>
      <Container>
        <div style={{ display: "flex", alignItems: "center", columnGap: 20, margin: "30px 0" }}>
          <img src="/meme.jpeg" style={{ height: 150, width: 150, borderRadius: "50%" }} />
          <div>
            <h1>David Liu</h1>
            <p>Joined on {new Date().toUTCString()}</p>
          </div>
        </div>
        <hr />
        <h3>Recent Places</h3>
      </Container>
    </Layout>
  );
}
