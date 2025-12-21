//Exotech Images
import exotech1 from "../assets/exotech/exotech-1.png";
import exotech2 from "../assets/exotech/exotech-2.png";
import exotech3 from "../assets/exotech/exotech-3.png";
import exotech4 from "../assets/exotech/exotech-4.png";
import exotech5 from "../assets/exotech/exotech-5.png";
import exotech6 from "../assets/exotech/exotech-6.png";
//BirdScout Images
import birdscout1 from "../assets/birdscout/birdscout-1.png";
import birdscout2 from "../assets/birdscout/birdscout-2.png";
import birdscout3 from "../assets/birdscout/birdscout-3.png";
//Exotech Dashboard Images
import exotechDashboard1 from "../assets/exotech-dashboard/exotech-dashboard-1.png";
import exotechDashboard2 from "../assets/exotech-dashboard/exotech-dashboard-2.png";
import exotechDashboard3 from "../assets/exotech-dashboard/exotech-dashboard-3.png";
import exotechDashboard4 from "../assets/exotech-dashboard/exotech-dashboard-4.png";
import exotechDashboard5 from "../assets/exotech-dashboard/exotech-dashboard-5.png";
import exotechDashboard6 from "../assets/exotech-dashboard/exotech-dashboard-6.png";
import exotechDashboard7 from "../assets/exotech-dashboard/exotech-dashboard-7.png";
//Expense Tracker Images
import expense1 from "../assets/expense-app/expense-app-1.png";
import expense2 from "../assets/expense-app/expense-app-2.png";
import expense3 from "../assets/expense-app/expense-app-3.png";
import expense4 from "../assets/expense-app/expense-app-4.png";
import expense5 from "../assets/expense-app/expense-app-5.png";
import expense6 from "../assets/expense-app/expense-app-6.png";
//Island Generator Images
import islandgen1 from "../assets/islandgen/islandgen-1.png";
import movievault1 from "../assets/movievault/movievault-1.png";
import movievault2 from "../assets/movievault/movievault-2.png";
import movievault3 from "../assets/movievault/movievault-3.png";
import movievault4 from "../assets/movievault/movievault-4.png";
//SOC RDP Images
import socRdp1 from "../assets/soc-rdp/soc-rdp-1.png";
import socRdp2 from "../assets/soc-rdp/soc-rdp-2.png";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  github_link?: string;
  demo_link?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Cloud-Based SOC: RDP Attack Detection",
    description:
      "Honeypot and monitoring pipeline that captured and analyzed large-scale RDP brute-force attacks, with dashboards for real-time visibility and threat insights.",
    tags: ["Azure", "Microsoft Sentinel", "KQL", "Cybersecurity"],
    github_link: "https://github.com/HamzaAbouJaib/MS-Sentinel-HomeLab",
    images: [socRdp1, socRdp2],
  },

  {
    name: "ExoTech - E-Commerce Platform",
    description:
      "Full-stack online store featuring secure authentication, real-time payment processing, and an optimized product browsing experience.",
    tags: ["TypeScript", "React", "Next.js", "MongoDB", "Stripe", "Firebase"],
    github_link: "https://github.com/HamzaAbouJaib/ExoTech-Ecommerce-Website",
    demo_link: "https://exotech-dashboard.vercel.app",
    images: [exotech1, exotech2, exotech3, exotech4, exotech5, exotech6],
  },

  {
    name: "BirdScout - Bird Identification App",
    description:
      "Mobile app that lets users capture bird photos and receive AI-assisted species identification.",
    tags: ["React Native", "Supabase", "Expo", "Firebase Auth", "TypeScript"],
    github_link: "https://github.com/agoodyer/BirdScout",
    images: [birdscout1, birdscout2, birdscout3],
  },

  {
    name: "ExoTech - Admin Dashboard",
    description:
      "The admin dashboard for the ecommerce store ExoTech. Features include managing products, categories, orders, admins, and viewing business statistics.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
    ],
    github_link: "https://github.com/HamzaAbouJaib/ExoTech-Admin-Dashboard",
    images: [
      exotechDashboard1,
      exotechDashboard2,
      exotechDashboard3,
      exotechDashboard4,
      exotechDashboard5,
      exotechDashboard6,
      exotechDashboard7,
    ],
  },

  {
    name: "MovieVault - Movie App",
    description:
      "An application for viewing movie and TV show data including trending, upcoming titles, detailed metadata, and cast information.",
    tags: ["JavaScript", "React Native", "Expo", "Lodash", "NativeWind"],
    github_link: "https://github.com/HamzaAbouJaib/MovieVault",
    images: [movievault1, movievault2, movievault3, movievault4],
  },

  {
    name: "Expense Tracker",
    description:
      "An expense tracking web application that helps users manage budgets, track transactions, and categorize expenses.",
    tags: ["TypeScript", "JavaScript", "React", "Mantine UI", "Vite"],
    github_link: "https://github.com/HamzaAbouJaib/React-Expense-Tracker-App",
    demo_link: "https://expense-tracker-react-ts-app.netlify.app/",
    images: [expense1, expense2, expense3, expense4, expense5, expense6],
  },

  {
    name: "Mesh Island Generator",
    description:
      "A Java application that generates island meshes with configurable biomes and geometric properties.",
    tags: ["Java", "Apache Maven", "Apache CLI", "JTS", "JUnit"],
    github_link: "https://github.com/HamzaAbouJaib/Island-Generator",
    images: [islandgen1],
  },

  // {
  //   name: "Cloud Cost Guard",
  //   description:
  //     "Dashboard that ingests AWS & Azure billing exports into a unified view, flags cost anomalies, and simulates impact of rightsizing and reserved instances.",
  //   tags: ["React", "TypeScript", "Tailwind", "AWS", "Azure", "Cost Explorer"],
  //   year: "2025",
  //   github_link: "#",
  // },
  // {
  //   name: "Serverless Uptime Monitor",
  //   description:
  //     "Lightweight uptime & latency monitor for hobby services using serverless functions, synthetic checks, and Slack/webhook notifications.",
  //   tags: ["AWS Lambda", "API Gateway", "CloudWatch", "React"],
  //   year: "2024",
  //   github_link: "#",
  // },
  // {
  //   name: "IaC Sandbox",
  //   description:
  //     "Hands-on playground for Infrastructure as Code examples with side-by-side Terraform snippets and architecture diagrams.",
  //   tags: ["Terraform", "AWS", "Vite", "TypeScript"],
  //   year: "2024",
  //   github_link: "#",
  // },
  // {
  //   name: "Grade Tracker",
  //   description:
  //     "Frontend-only app for students to track course grades, assignment weights, and exam targets, with 'what do I need on the final' calculations.",
  //   tags: ["React", "TypeScript", "Tailwind"],
  //   year: "2023",
  //   github_link: "#",
  // },
  // {
  //   name: "Cloud Lab Notebook",
  //   description:
  //     "Static site that documents cloud labs and experiments: IAM setups, VPC patterns, Kubernetes clusters, and troubleshooting notes.",
  //   tags: ["Markdown", "Static Site", "DevOps"],
  //   year: "2023",
  //   github_link: "#",
  // },
  // {
  //   name: "Incident Timeline UI",
  //   description:
  //     "Frontend component library for visualizing incident timelines, impact windows, and remediation steps — inspired by SRE postmortems.",
  //   tags: ["React", "TypeScript", "Design System"],
  //   year: "2025",
  //   github_link: "#",
  // },
];
