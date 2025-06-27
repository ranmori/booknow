const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const rooms = [
  {
    id: 1,
    type: "Single Room",
    description: "Perfect for solo travelers seeking comfort and convenience...",
    features: ["Cozy bed", "Free Wi-Fi", "Flat-screen TV", "En-suite bathroom"],
    image: "https://via.placeholder.com/350x200?text=Single+Room"
  },
  {
    id: 2,
    type: "Double Room",
    description: "Ideal for couples or friends traveling together...",
    features: ["Double bed", "Air conditioning", "Complimentary Wi-Fi", "Flat-screen TV"],
    image: "https://via.placeholder.com/350x200?text=Double+Room"
  },
  {
    id: 3,
    type: "Triple Room",
    description: "Designed to accommodate up to three guests...",
    features: ["Three single beds", "Free Wi-Fi", "Well-appointed bathroom"],
    image: "https://via.placeholder.com/350x200?text=Triple+Room"
  },
  {
    id: 4,
    type: "VIP Room",
    description: "For those seeking an elevated experience...",
    features: ["Premium furnishings", "Spacious living area"],
    image: "https://via.placeholder.com/350x200?text=VIP+Room"
  },
  {
    id: 5,
    type: "Guest House",
    description: "Looking for extended stays or extra privacy...",
    features: ["Multiple rooms", "Living area", "Hotel conveniences"],
    image: "https://via.placeholder.com/350x200?text=Guest+House"
  }
];

app.get('/api/rooms', (req, res) => {
  res.json(rooms);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
