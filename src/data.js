// src/data.js

export const PORTFOLIO_DATA = {
  name: "Rakesh Kumar Sharma",
  firstName: "RAKESH",
  // UPDATED: Role
  role: "FULLSTACK DEVELOPER",
  web3formsKey: "9daea592-5ff1-46bc-8fe2-65504e9edc98", // IMPORTANT: Paste your Web3Forms Access Key
  contact: {
    email: "rakeshsharma715078@gmail.com",
    github: "https://github.com/Rakesh9647",
    linkedin: "https://www.linkedin.com/in/rakesh-kumar-sharma-85486821b/",
  },
  // UPDATED: Specialization Text
  specializations:
    "Specialized in building end-to-end web and mobile applications with a focus on performance and user experience.",

  // UPDATED: Services for Full Stack
  services: [
    {
      title: "Custom Web Application Development",
      description:
        "From idea to launch, I build complete, production-ready web applications tailored to your specific business needs using the MERN/MEAN stack.",
    },
    {
      title: "Frontend Development",
      description:
        "Building pixel-perfect, responsive, and interactive user interfaces with modern frameworks like React and Angular.",
    },
    {
      title: "Backend & API Development",
      description:
        "Designing robust, scalable, and secure RESTful APIs and server-side logic using Node.js, Express, and NestJS for your web or mobile applications.",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps for both iOS and Android using React Native, delivering a fast, native-like user experience.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing custom e-commerce platforms from scratch with secure payment gateway integration, product management, and order processing systems.",
    },
    {
      title: "Database Design & Management",
      description:
        "Expertise in both SQL (MySQL, Postgres) and NoSQL (MongoDB) databases, from efficient schema design to performance tuning and data migration.",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connecting your application with third-party services and APIs, such as Stripe for payments, Google Maps, or social media logins.",
    },
    {
      title: "Cloud Deployment & Maintenance",
      description:
        "Deploying your applications to cloud platforms like AWS and providing ongoing support and maintenance to ensure high availability and security.",
    },
  ],

  // UPDATED: Skills
  skills: [
    "React",
    "Angular",
    "React Native",
    "JavaScript",
    "Node.js",
    "Express",
    "NestJS",
    "Prisma",
    "MongoDB",
    "MySQL",
    "Postgres",
    "Git",
    "AWS S3",
    "Redis",
    "Algorithms",
  ],

  experience: [
    {
      company: "Sunra Soft tech Pvt Ltd",
      role: "Software Developer",
      duration: "July 2024 - Present",
      description:
        "Worked as a Software Developer using Node.js with Express, Javascript, Angular and MySQL.",
    },
    {
      company: "Raneso global Pvt Ltd",
      role: "Software Developer",
      duration: "June 2023 - July 2024",
      description:
        "Worked as a Software Developer using Node.js with Express, Javascript, and MySQL.",
    },
    {
      company: "Pensys Software Pvt Ltd",
      role: "Software Developer",
      duration: "Jan 2023 - Mar 2023",
      description:
        "Worked as a Software Developer using Node.js with NestJS, Javascript, Prisma, Postgres, and MySQL.",
    },
    {
      company: "FunctionUP",
      role: "TA (Teaching Assistant)",
      duration: "May 2022 - Dec 2022",
      description:
        "Assisted students and resolved doubts related to backend development concepts and assignments.",
    },
  ],

  projects: [
    {
      title: "Car Sharing Application (Uber/Ola Clone)",
      description:
        "Developed a full-featured car sharing application. Implemented real-time geolocation tracking, a dynamic ride booking system, route calculation, and secure payment integration using the Google Maps API and Stripe.",
      tags: [
        "React Native",
        "Node.js",
        "Google Maps API",
        "WebSockets",
        "Stripe",
      ],
      imageUrl: "/Reliable-Ride-Sharing.png",
    },
    // {
    //   title: 'Scratch To Success - EdTech Platform',
    //   description: 'Architected and developed the "Scratch To Success" educational platform. Built a custom Content Management System (CMS) with a feature-rich admin panel for easy content creation, user management, and site administration.',
    //   tags: ['React', 'Node.js', 'CMS', 'Admin Panel', 'CRUD'],
    //   imageUrl: '/project-scratch.png'
    // },
    {
      title: "Real-Time Multiplayer Ludo Game",
      description:
        "Engineered an interactive multiplayer Ludo game. Developed the complete game logic and utilized WebSockets for seamless, instant communication between players, ensuring a fluid and engaging user experience.",
      tags: ["React", "Node.js", "WebSockets", "Socket.IO", "Game Logic"],
      imageUrl: "/ludo.png",
    },
    {
      title: "Ecommerce Shopping website",
      description: "Built a full-stack e-commerce platform with React and Node.js/Express. Features include JWT authentication, product catalog, shopping cart, secure checkout, and real-time order tracking with WebSockets.",
      tags: ["React", "Node.js", "Express", "JWT", "MongoDB", "WebSockets"],
      imageUrl: "/e-commerce-website-design.png",
    },
    {
      title: "URL Shortener",
      description:
        "A URL shortening service similar to Bitly, using Redis for caching to ensure fast response times.",
      tags: ["Node.js", "Redis", "Mongoose", "JavaScript"],
      imageUrl: "/URL Shortener.png",
    },
    {
      title: "Book Management API",
      description:
        "Created a RESTful API for users to manage their personal book collections with full CRUD functionality.",
      tags: ["Node.js", "Express", "Mongoose", "AWS"],
      imageUrl: "/book.png",
    },
  ],
};
