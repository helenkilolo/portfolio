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
      liveDemo: "https://www.youtube.com/watch?v=NsxKf9_MZrE",
      github: "https://github.com/helenkilolo/Loloki_artisan"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      technologies: ["React", "Express", "Tailwind CSS"],
      liveDemo: "https://portfoliofrontend-jet.vercel.app/",
      github: "https://github.com/helenkilolo/portfolio"
    },
    {
      id: 3,
      title: "Salon Savvy Platform",
      description: "A salon management system with real-time booking, stylist preferences, and integrated payments.",
      technologies: ["Python", "Node.js", "MongoDB", "AWS"],
      liveDemo: "https://www.youtube.com/watch?v=NsxKf9_MZrE",
      github: "https://github.com/helenkilolo/salonsavvyKe_salon"
    },
    {
      id: 4,
      title: "Lifeline Mental Health Assistant",
      description: "Lifeline Health demonstrates my ability to build scalable and impactful systems that solve real-world problems. The project incorporates advanced features like user management, secure APIs, and a sleek user interface to improve the healthcare experience",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js with Express.js",
        "MongoDB",
        "RESTful APIs"
      ],
      liveDemo: "https://lifeline-frontend-woad.vercel.app/",
      github: "https://github.com/helenkilolo/lifeline-health"
    },
    {
      id: 5,
      title: "EastGold tours",
      description: "The Tours and Travels project is a web application designed to facilitate travel planning and booking. Its goal is to provide users with a seamless platform to explore, book, and manage travel-related services ",
      technologies: ["React", "Node.js", "HTML/CSS", "Express", "MongoDB"],
      liveDemo: "https://helenkilolo-4248c4c39143.herokuapp.com/",
      github: "https://github.com/helenkilolo/travelntours"
    }
  ];

  res.status(200).json(projects);
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
