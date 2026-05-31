export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name and phone are required',
    });
  }

  console.log('New inquiry:', { name, phone, message, timestamp: new Date().toISOString() });

  res.json({
    success: true,
    message: 'Inquiry received! We will contact you shortly.',
  });
}
