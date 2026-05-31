export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const stats = {
    happyMembers: 5000,
    kgsLost: 10000,
    transformations: 1000,
    rating: 4.9,
  };

  res.json({ success: true, data: stats });
}
