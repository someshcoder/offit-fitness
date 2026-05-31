export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const slots = {
    morning: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM'],
    afternoon: ['12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
    evening: ['5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'],
  };

  res.json({ success: true, data: slots });
}
