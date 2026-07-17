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
    description: "A premium restaurant website featuring custom menus, booking integrations, and stunning animations that elevate the culinary brand.",
    tech: ["Wordpress", "Html", "JS", "CSS","php"],
    liveUrl: "https://www.chennaimaratha.com/",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" // Premium placeholder
  },
  {
    id: "tht-global-consulting",
    title: "THT Global Consulting",
    description: "Corporate consulting platform showcasing financial services, custom calculators, case studies, and corporate branding with a high-end glassmorphism design.",
    tech: ["WordPress", "Elementor", "Bootstrap"],
    liveUrl: "https://www.thtglobalconsulting.com/",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "79exp",
    title: "79EXP",
    description: "An interactive, experiential travel portal allowing users to book unique expeditions, complete with complex filters and high-performance image rendering.",
    tech: ["React.js", "GSAP", "Bootstrap", "CSS Modules"],
    liveUrl: "https://www.79exp.com",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "A premium, fully interactive developer portfolio utilizing custom canvas particles, scroll triggers, custom cursor, and responsive Bootstrap modules.",
    tech: ["React.js", "GSAP", "Framer Motion", "Bootstrap"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
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
