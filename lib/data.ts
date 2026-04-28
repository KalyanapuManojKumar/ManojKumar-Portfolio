import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Code,
  Zap
} from "lucide-react";
export type SocialLink = {
  name: string;
  icon: IconType;
  url: string;
};

export const heroData = {
  name: "Manoj Kumar",
  greeting: "I'm",
  // Format required by react-type-animation: [text, delay, text, delay...]
  roles: [
    "Frontend Developer", 
    2000,
    "Backend Developer", 
    2000,
    "Fullstack Developer", 
    2000,
  ],
  description: "Experienced web developer with a passion for creating visually stunning and user-friendly websites.",
  buttons: {
    primary: {
      label: "Hire Me",
      href: "#contact",
    },
    secondary: {
      label: "Download CV",
      href: "/ManojKumar.pdf",
    },
  },
  socials: [
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/manojkumar_kalyanapu?igsh=djRwaXZtcWF1dTZp" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/manoj-kumar-kalyanapu/" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/KalyanapuManojKumar" },
  ] as SocialLink[],
  image: "/hero.png",
};

export const aboutData = {
  title: "About Me",
  introduction: "Web Developer with experience in developing scalable web applications. Proficient in full-stack development using Angular, React.js, Next.js, Node.js, and REST APIs. Skilled in modern development practices, API integrations, and delivering efficient, maintainable solutions.",
  skills: {
    programming: ["JavaScript", "TypeScript", "Python"],
    frontend: ["Angular", "React.js", "Next.js"],
    backend: ["Node.js", "Express.js", "GraphQL"],
    database: ["MySQL", "MongoDB", "Redis"],
    versionControl: ["Git", "GitHub"],
  }
};

export const experienceData = [
  {
    role: "Web Developer",
    company: "Greenads Global",
    date: "05/2024 - 06/2025",
    location: "Hyderabad, India",
    responsibilities: [
      "Contributed to the development of User, Admin, and Reseller panels for RCS campaigns.",
      "Assisted in building backend services to filter RCS-enabled numbers and sending of standard and dynamic messages.",
      "Worked on real-time delivery tracking integration, enabling detailed status reports.",
      "Supported the development of Admin & Reseller modules for user management, template approvals, credits, and domain-based access control.",
      "Contributed to backend features involving RabbitMQ for bulk messaging, Webhooks for real-time updates, Redis for caching, and automated email notifications.",
      "Managed Linux servers via SSH using PuTTY for deployment, configuration, and troubleshooting. Connected to and maintained Windows servers for application hosting and monitoring.",
    ],
  },
  {
    role: "Angular Developer",
    company: "FastCollab",
    date: "09/2025 - 03/2026",
    location: "Hyderabad, India",
    responsibilities: [
      "Developed new features and improved user experience for a travel management website using Angular and Ionic, ensuring smooth and responsive UI across web and mobile.",
      "Debugged and fixed frontend issues by analyzing the complete application flow, improving stability and performance.",
      "Collaborated with backend teams to integrate APIs and optimize data handling, following clean code and best development practices.",
      "Used Git/GitHub for version control, managing branches, pull requests, and code updates efficiently.",
    ],
  },
];

 export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "manojkumarkalyanapu@gmail.com",
    href: "mailto:manojkumarkalyanapu@gmail.com"
  },
  {
    icon: Phone,
     title: "Phone",
    value: "+91 95738 75807",
    href: "tel:+919573875807"
  },
  {
    icon: MapPin,
     title: "Location",
    value: "Hyderabad, India",
    href: "#"
  }
];
