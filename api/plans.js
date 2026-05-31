export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const plans = [
    { id: 1, price: 999, duration: '1 Month', bonus: '', popular: false },
    { id: 2, price: 1199, duration: '5 Weeks', bonus: '+5 Days', popular: false },
    { id: 3, price: 1599, duration: '2 Months', bonus: '+10 Days', popular: true },
    { id: 4, price: 2199, duration: '3 Months', bonus: '+20 Days', popular: false },
    { id: 5, price: 2999, duration: '4 Months', bonus: '+30 Days', popular: false },
  ];

  res.json({ success: true, data: plans });
}
