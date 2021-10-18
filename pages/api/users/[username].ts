export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    return res.json({ name: "Alex Yuan" });
  } else {
    return res.status(404);
  }
}
