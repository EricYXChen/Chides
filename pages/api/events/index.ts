export default function handler(req, res) {
  if (req.method === "POST") {
    // Create new event
    console.log(req.body);
    res.status(200);
  } else {
    return res.status(404);
  }
}
