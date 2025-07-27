// index.js

// Services offered by the developer
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "Building robust and scalable web applications tailored to your business needs. I focus on clean architecture, optimized databases, and seamless integrations to ensure reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Authentication Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX Design)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Data Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Streamlining software deployment with automated infrastructure and security measures. I utilize cloud platforms (AWS/Azure) to ensure your application runs smoothly—24/7, regardless of scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management",
        description: "(Linux, Nginx, Load Balancing Techniques)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching Strategies, Compression, Achieving Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Protecting your application from vulnerabilities while ensuring optimal performance. I implement security measures (XSS/SQLI protection, OAuth) and optimize bottlenecks for a fast, safe, and scalable experience.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Technical Debt Cleanup)",
      },
      {
        title: "Penetration Testing",
        description: "(Vulnerability Assessments and Remediation)",
      },
      {
        title: "SEO Tech Stack",
        description: "(Server-Side Rendering, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Creating responsive and user-friendly web and mobile applications (React Native/Flutter) that seamlessly blend design and functionality, ensuring a delightful user experience.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single Codebase for iOS, Android, and Web)",
      },
      {
        title: "Progressive Web Apps (PWAs)",
        description: "(Offline Capabilities, Push Notifications)",
      },
      {
        title: "E-Commerce Solutions",
        description: "(Checkout Flows, Payment Gateways, Inventory Management APIs)",
      },
    ],
  },
];

// Projects showcasing the developer's work
export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories, including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants, featuring a clean and user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories, featuring deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

// Social media links
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/thankabharathi/" },
  {
    name: "X",
    href: "https://x.com/ThankaBharathi",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/thankabharathi/" },
  { name: "GitHub", href: "https://github.com/ThankaBharathi" },
];
