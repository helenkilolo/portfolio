const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running.');
});

app.use('/api', contactRoutes);

// Projects API Route
app.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: "Loloki eCommerce Platform",
      description: "An artisan-focused eCommerce platform with MPesa and Stripe integration.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveDemo: "https://loloki.example.com",
      github: "https://github.com/helenkilolo/Loloki_artisan"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      technologies: ["React", "Express", "Tailwind CSS"],
      liveDemo: "https://portfolio.example.com",
      github: "https://github.com/yourusername/portfolio"
    }
  ];

  res.status(200).json(projects);
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
