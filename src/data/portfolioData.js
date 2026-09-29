import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress, 
  FaPhp, FaBootstrap, FaGithub, FaGitAlt, FaCode, 
  FaLaptopCode, FaSearchDollar, FaCogs, FaRocket, FaEnvelope, 
  FaLinkedin, FaMapMarkerAlt, FaFileCode
} from 'react-icons/fa';
import { SiTailwindcss, SiElementor } from 'react-icons/si';

export const personalInfo = {
  name: "Amit Kumar",
  title: "Frontend & WordPress Developer",
  tagline: "Building high-performance, visually stunning websites with React, custom WordPress, and modern design principles.",
  about: "I am a passionate Frontend & WordPress Developer with 5+ years of experience in crafting premium web experiences. I specialize in building responsive, interactive, and search-optimized websites that merge clean code with rich aesthetics. Whether it is a custom React dashboard or a highly-optimized WordPress theme, I focus on delivering exceptional user experiences and pixel-perfect layouts.",
  email: "amitcoder360@gmail.com", // Mock contact
  location: "chandigarh / mohali",
  github: "https://github.com/Amitkumar322",
  linkedin: "https://www.linkedin.com/in/amitcoder360/",
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "3+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "3+", label: "Happy WordPress Clients" }
  ]
};

export const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
  { name: "JavaScript", icon: FaJsSquare, level: 85, color: "#F7DF1E" },
  { name: "React.js", icon: FaReact, level: 80, color: "#61DAFB" },
  { name: "WordPress", icon: FaWordpress, level: 95, color: "#21759B" },
  { name: "Elementor", icon: SiElementor, level: 95, color: "#92003B" },
  { name: "PHP", icon: FaPhp, level: 75, color: "#777BB4" },
  { name: "Bootstrap", icon: FaBootstrap, level: 90, color: "#7952B3" },
  // { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4" },
  { name: "Git & GitHub", icon: FaGitAlt, level: 85, color: "#F05032" }
];

export const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Building fast, dynamic, and responsive web applications using modern React.js and frontend technologies tailored to business needs.",
    icon: FaCode
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "Creating custom themes, plugins, and fully editable layouts using Elementor or block editor. Safe, clean, and scalable.",
    icon: FaWordpress
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Optimizing site architecture, page speeds, metadata, and performance to boost organic rankings and user engagement.",
    icon: FaSearchDollar
  },
  {
    id: 4,
    title: "Landing Pages",
    description: "Designing high-converting, single-page promotional sites that showcase products or capture leads with beautiful animations.",
    icon: FaRocket
  },
  {
    id: 5,
    title: "Website Maintenance",
    description: "Providing security patches, updates, backups, bug fixes, and continuous improvements to ensure zero downtime.",
    icon: FaCogs
  }
];

export const projects = [
  {
    id: "chennai-maratha",
    title: "Chennai Maratha",
    description: "A premium restaurant website featuring custom menus, Franchisebooking integrations, and stunning animations that elevate the culinary brand.",
    tech: ["Wordpress", "Html", "JS", "CSS","php"],
    liveUrl: "https://www.chennaimaratha.com/",
    githubUrl: "https://github.com/Amitkumar322",
    image: "/Images/chennaimaratha.png" 
  },
  {
    id: "tht-global-consulting",
    title: "Tripzo-ai",
    description: "AI-powered travel platform that turns a simple form into a personalized itinerary — built with React, Gemini API, and serverless functions.",
    tech: ["React.js", "Gemini API", "Netlify Serverless Functions", "Bootstrap", "JavaScript (ES6+)" ,"GSAP"],
    liveUrl: "https://tripzo-ai.netlify.app/",
    githubUrl: "https://github.com/Amitkumar322",
    image: "/Images/tripzoai.png"
  },
  {
    id: "79exp",
    title: "79EXP",
    description: "A premium, single-scroll landing page crafted for a luxury expedition brand — built for conversions with a minimal, high-end feel.",
    tech: ["Wordpress", "Html", "JS", "CSS","php"],
    liveUrl: "https://www.79exp.com",
    githubUrl: "https://github.com/Amitkumar322",
    image: "/Images/79exp.png"
  },
  {
    id: "personal-portfolio",
    title: "Worlds Fact",
    description: "A dynamic React application with live API integration and real-time data rendering, built on clean, component-based architecture.",
    tech: ["React.js", "GSAP", "API integration", "Bootstrap"],
    liveUrl: "https://worldsfact.netlify.app/",
    githubUrl: "https://github.com/Amitkumar322",
    image: "/Images/worldsfact.png"
  }
];

export const experience = [
  {
    year: "July 2025 - Present",
    role: "Frontend & WordPress Developer",
    company: "Chennai Maratha (Food Restaurant Chain)",
    description: "Lead developer responsible for building and optimizing customer-facing web apps and high-traffic WordPress sites. Managed elementor layout engines, set up custom REST APIs for decoupled web apps, and improved website page speeds by an average of 40%."
  }
  // {
  //   year: "2022 - 2024",
  //   role: "WordPress Specialist & Web Designer",
  //   company: "THT Global Consulting Agency",
  //   description: "Designed corporate landing pages, optimized site architectures, integrated third-party APIs for financial calculators, and handled comprehensive WordPress maintenance and security auditing."
  // },
  // {
  //   year: "2020 - 2022",
  //   role: "Frontend Developer",
  //   company: "WebCraft Studio",
  //   description: "Developed mockups into pixel-perfect responsive HTML/CSS/JavaScript. Created interactive UI widgets using GSAP and Bootstrap and integrated them with various headless CMS environments."
  // },
  // {
  //   year: "2019 - 2020",
  //   role: "Junior Web Developer",
  //   company: "TechSolutions Hub",
  //   description: "Maintained client websites, prepared SEO audits, built email newsletters, and assisted in troubleshooting WordPress plugin conflicts and styling bugs."
  // }
];
