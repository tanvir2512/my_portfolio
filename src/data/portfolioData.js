/**
 * CENTRALIZED PORTFOLIO DATA
 * Edit this file to update links, skills, experience items, projects, certifications, or services.
 */

export const NAVIGATION_LINKS = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const PERSONAL_INFO = {
  name: "Tanvirul Islam",
  title: "Web Developer | Flutter Developer",
  bio: "I'm a motivated Computer Engineer with a strong foundation in Programming. And Passionate about software engineering, problem solving, and building real-world solutions through Web & Mobile applications. I enjoy turning ideas into impactful digital products and continuously learning new technologies.",
  location: "Chattogram, Bangladesh",
  educationBadge: "CSE Graduate",
  institutionShort: "IIUC",
  status: "Open to Opportunities",
  email: "tanvirchowdhury565@gmail.com",
  phone: "+880 1798277658",
  linkedin: "https://www.linkedin.com/in/tanvirul-islam-b51772374",
  linkedinHandle: "in/tanvirul-islam-b51772374",
  github: "https://github.com/tanvir2512",
  githubHandle: "/tanvir2512",
  youtube: "https://www.youtube.com/@SolvewithTanvir",
  cvUrl: "/cv/Tanvirul_Islam_CV.pdf",
};

export const SKILLS_CATEGORIES = [
  "All",
  "Languages",
  "Frameworks",
  "Tools",
  "Databases",
  "Others",
];

export const SKILLS_DATA = [
  // Languages (Matching Showcase Image)
  { id: 1, name: "C / C++", category: "Languages", badge: "C", color: "#3B82F6" },
  { id: 2, name: "Python", category: "Languages", badge: "PY", color: "#FACC15" },
  { id: 3, name: "JavaScript", category: "Languages", badge: "JS", color: "#EAB308" },
  { id: 4, name: "SQL", category: "Languages", badge: "SQL", color: "#38BDF8" },
  { id: 5, name: "TypeScript", category: "Languages", badge: "TS", color: "#2563EB" },
  //{ id: 6, name: "Java", category: "Languages", badge: "JV", color: "#F97316" },
  { id: 6, name: "Dart", category: "Languages", badge: "DT", color: "#06B6D4" },
  { id: 7, name: "HTML & CSS", category: "Languages", badge: "H5", color: "#EF4444" },

  // Frameworks & Libraries (Matching Showcase Image + Flutter/Tailwind)
  { id: 8, name: "React", category: "Frameworks", badge: "RC", color: "#22D3EE" },
  { id: 9, name: "Next.js", category: "Frameworks", badge: "NX", color: "#a39595" },
  { id: 10, name: "Node.js", category: "Frameworks", badge: "ND", color: "#22C55E" },
  ///{ id: 12, name: "Express.js", category: "Frameworks", badge: "EX", color: "#9CA3AF" },
  { id: 11, name: "Flutter", category: "Frameworks", badge: "FL", color: "#38BDF8" },
  { id: 12, name: "Tailwind CSS", category: "Frameworks", badge: "TW", color: "#06B6D4" },
  { id: 13, name: "NumPy / Pandas", category: "Frameworks", badge: "NP", color: "#F97316" },

  // Tools (Pre-populated)
  { id: 14, name: "Git & GitHub", category: "Tools", badge: "GIT", color: "#F97316" },
  { id: 15, name: "VS Code", category: "Tools", badge: "VS", color: "#3B82F6" },
  { id: 16, name: "Vercel", category: "Tools", badge: "VC", color: "#a39595" },
  { id: 17, name: "Postman", category: "Tools", badge: "PM", color: "#FB923C" },
  { id: 18, name: "Microsoft Office", category: "Tools", badge: "MS", color: "#0EA5E9" },
  { id: 19, name: "Cisco Packet Tracer", category: "Tools", badge: "NW", color: "#10B981" },
  { id: 20, name: "Adobe Photoshop", category: "Tools", badge: "Ps", color: "#3B82F6" },
  { id: 21, name: "Adobe Illustrator", category: "Tools", badge: "Ai", color: "#FB923C" },

  // Databases (Pre-populated)
  //{ id: 22, name: "MongoDB", category: "Databases", badge: "MG", color: "#22C55E" },
  { id: 22, name: "MySQL", category: "Databases", badge: "MY", color: "#38BDF8" },
  { id: 23, name: "PostgreSQL", category: "Databases", badge: "PG", color: "#60A5FA" },
  //{ id: 25, name: "Firebase", category: "Databases", badge: "FB", color: "#FBBF24" },

  // Others (Pre-populated)
  { id: 24, name: "Computer Vision & ML", category: "Others", badge: "AI", color: "#39FF14" },
  { id: 25, name: "ROS / MAVLink Drones", category: "Others", badge: "ROS", color: "#A855F7" },
  { id: 26, name: "IoT & Embedded Systems", category: "Others", badge: "IOT", color: "#14B8A6" },
  { id: 27, name: "REST APIs", category: "Others", badge: "API", color: "#39FF14" },
  { id: 28, name: "Claude Code", category: "Others", badge: "Cc", color: "#FB923C" },

];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    period: "Oct 2026 - Present",
    organization: "CODEALPHA | Full Stack Development",
    role: "Intern",
    highlights: [
      "Designing and developing responsive web applications using full-stack technologies include Node.js, Next.js, HTML, JavaScript, and CSS",
      "Executing allocated technical tasks and project deliverables within the internship period",
    ],
  },
 {
    id: 2,
    period: "Jan 2024 - Aug 2026",
    organization: "INTERNATIONAL ISLAMIC UNIVERSITY CHITTAGONG",
    role: "Teaching Assistant (TA)",
    highlights: [
      "Appointed as TA for courses: Object Oriented Programming (C++), Basic Electrical Engineering,Electronics & Neural Network.",
      "Assisted students to solve code and conceptual problem. Conducted tutorial sessions to clarify complex concepts for students. And evaluated academic assignments and Lab Reports, providing constructive feedback",
    ],
  },
  
  {
    id: 3,
    period: "Aug 2025 - Aug 2026",
    organization: "IEEE RAS IIUC SBC",
    role: "Programme Coordinator",
    highlights: [
      "Organized workshops, seminars and robotics events",
      "Supported robotics community and student engagement",
    ],
  },
  
  {
    id: 4,
    period: "July 2025 - Present",
    organization: "Solve with Tanvir | Youtube" ,
    role: "Owner & Content Creator",
 
    youtubeUrl: "https://www.youtube.com/@SolvewithTanvir",
    highlights: [
    "Producing comprehensive tutorial and  academic video content",
      //"Worked with clients on small to medium projects",
    ],
  },
  /*{
    id: 4,
    period: "2021 - 2025",
    organization: "B.Sc in Computer Science & Engineering",
    role: "International Islamic University Chittagong (IIUC)",
    highlights: [
      "Completed degree with strong foundation in CSE",
      "Worked on academic and research projects",
    ],
  },*/
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Salat Tracker",
    techStack: "Flutter • Mobile App | Solo developed",
    description: "A prayer tracking app with frequent Salat Reminder, Azan, Quran, Qibla, Dhikr and more features. User will get an effective overlay notification on every wakt as Salat reminder, User can access To-Do list, Last 30 days salat record | Overall a practical productive app",
    image: "/images/projects/salat-tracker.png",
    link: "#",
  },
  {
    id: 2,
    title: "Yes to Youth Org. Website",
    techStack: "React • Next.js | Solo developed",
    description: "An organizational website which includes dedicated pages for Home, Members can Check donation Information, anyone can see programs, the Executive Committee and Contact details.",
    image: "/images/projects/yes-to-youth.jpg",
    link: "https://yestoyouth.vercel.app/",
  },
  {
    id: 3,
    title: "Tap Music",
    techStack: "Flutter • Mobile App | Solo developed",
    description: "A modern offline music player built with Flutter (Dart), featuring on-device mp3/m4a playback, a custom animated vinyl-record UI, background audio with system notification controls, and full playlist/favorites management",
    image: "/images/projects/tap-music.png",
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    techStack: "React • Next.js",
    description: "Personal portfolio website with modern UI/UX and animations.",
    image: "/images/projects/portfolio.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Ai Powered Precision Agriculture Drone",
    techStack: "Python • IoT • Embedded | Lead Developer",
    description: "Designed and built an AI-Powered agricultural drone featuring predictive analysis for targeted Fertilizer application. Applied computer vision techniques to extract crop health-related information from aerial image",
    image: "/images/projects/drone-project.jpg",
    link: "https://youtu.be/Cfz1S30QrAA?si=-kdHnQ8sBGzBLk0P",
  },
  /*{
    id: 6,
    title: "Drone Control System",
    techStack: "Python • ROS",
    description: "Autonomous drone with live video and GPS tracking.",
    image: "/images/projects/drone-control.jpg",
    link: "#",
  },*/
  
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Programming Hero",
    year: "2024",
    badgeText: "P",
    badgeColor: "bg-emerald-500/20 text-neon-primary border-neon-primary/50",
    link: "#",
  },
  {
    id: 2,
    title: "Machine Learning",
    issuer: "Coursera",
    year: "2024",
    badgeText: "C",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-400/50",
    link: "#",
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2023",
    badgeText: "C",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-400/50",
    link: "#",
  },
  /*{
    id: 4,
    title: "Java Programming",
    issuer: "HackerRank",
    year: "2023",
    badgeText: "H",
    badgeColor: "bg-green-500/20 text-green-400 border-green-400/50",
    link: "#",
  },*/
  {
    id: 5,
    title: "Web Development (HTML, CSS, JS)",
    issuer: "freeCodeCamp",
    year: "2022",
    badgeText: "fCC",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-400/50",
    link: "#",
  },
  {
    id: 6,
    title: "Problem Solving",
    issuer: "HackerRank",
    year: "2022",
    badgeText: "H",
    badgeColor: "bg-emerald-500/20 text-neon-primary border-neon-primary/50",
    link: "#",
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description: "Responsive and scalable web applications using modern technologies.",
    iconName: "Code2",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform apps with Flutter for Android & iOS.",
    iconName: "Smartphone",
  },
  /*{
    id: 3,
    title: "UI/UX Design",
    description: "Clean, user-friendly and modern interfaces.",
    iconName: "Palette",
  },*/
  {
    id: 3,
    title: "Machine Learning",
    description: "Data analysis, model building and intelligent solutions.",
    iconName: "BrainCircuit",
  },
  {
    id: 4,
    title: "Problem Solving & Automation",
    description: "Scripting, automation and custom tools.",
    iconName: "Wrench",
  },
  {
    id: 5,
    title: "Technical Support & Consultation",
    description: "Guidance on tech, projects and career growth.",
    iconName: "Lightbulb",
  },
];