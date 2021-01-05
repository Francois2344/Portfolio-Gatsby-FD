module.exports = {
  siteTitle: 'Bonjour ! Je m\'appelle François, bienvenue !',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum', 'portfolio'],
  authorName: 'François Delourme',
  githubUsername: 'Francois2344',
  authorAvatar: '/images/avatar.png',
  authorDescription: `Après 7 années passées dans la marine marchande, j'ai entrepris une reconversion professionnelle en tant que Développeur Web et Web mobile avec la Wild Code School de Nantes.
  Nous apprenons, à travers des projets ou évenements, différents langages et technologies comme React JS et Node JS. <br />
  Ma passion pour l'informatique et les nouvelles technologies m'ont orienté vers cette formation.
  A travers l'apprentissage permanent et ma curiosité, je suis déterminé à réussir ma nouvelle vie professionnelle.`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 50
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 60
    },
    {
      name: 'MySQL',
      level: 50
    },
  ],
  jobs: [
    {
      company: "Brittany Ferries",
      begin: {
        month: 'Avr',
        year: '2013'
      },
      duration: '7 ans',
      occupation: "Steward Accueil et Ventes",
      description: "Accueil, vente et service à bord, assurer la sécurité des passagers, gestion des commandes."
  
    },  {
      company: "ISS Charlestown",
      begin: {
        month: 'Sep',
        year: '2012'
      },
      duration: '6 mois',
      occupation: "Hôte Evenementiel",
      description: "Accueil, Promotion, Distribution, Evenementiel."
  
    }, {
      company: "HTDL",
      begin: {
        month: 'Mar',
        year: '2012'
      },
      duration: '7 mois',
      occupation: "Technico-Commercial",
      description: "Identifier et definir les exigences du client, rédiger la proposition commerciale, fidéliser et organiser les plans d'actions commerciales."
    }, {
      company: "Hertz",
      begin: {
        month: 'Jui',
        year: '2011'
      },
      duration: '4 mois',
      occupation: "Chargé de Clientièle",
      description: "Vente de produit et service, Création des contrats de locations, Assurer et gérer le suivi administratif des véhicules."
  
    }, {
      company: "Hop!",
      begin: {
        month: 'Oct',
        year: '2008'
      },
      duration: '1 an',
      occupation: "Agent Logistique PN",
      description: "Réservation et gestion des hôtels, location de voitures, billets d’avions, gestion du catering (plateaux repas) pour l’équipage, répondre aux besoins des personnels navigants technique et commercial, Gestion des plannings en collaboration avec les agents de régulation"
    }
  ],
  portfolio: [
    {
      image: "/images/logo-ecureuil44.jpg",
      description: "1er Projet en HTML, CSS et JS",
      url: "https://adopte-un-ecureuil.netlify.app"
    },
    {
      image: "/images/Nant'Event(1).png",
      description: "2nd Projet avec React, Création d'un Agenda Culturel",
      url: "https://nant-events.netlify.app/"
    },
    {
      image: "/images/Middle Trade.png",
      description: "Projet réalisé pendant un Hackathon avec React",
      url: "https://middle-trade.netlify.app/"
    },
    {
      image: "/images/Wild Meteo.png",
      description: "Petite application Météo réalisée avec React",
      url: "https://wild-meteo-fd.netlify.app"
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/fdelourme2344/",
    github: "https://github.com/Francois2344",
    email: "deloufr@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/city-5.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Accueil',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}