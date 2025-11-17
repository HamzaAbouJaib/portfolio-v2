import exotech1 from "../assets/exotech/exotech-1.png";
import exotech2 from "../assets/exotech/exotech-2.png";
import exotech3 from "../assets/exotech/exotech-3.png";
import exotech4 from "../assets/exotech/exotech-4.png";
import exotech5 from "../assets/exotech/exotech-5.png";
import exotech6 from "../assets/exotech/exotech-6.png";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Cloud-Based SOC: RDP Attack Detection",
    description:
      "Honeypot and monitoring pipeline that captured and analyzed large-scale RDP brute-force attacks, with dashboards for real-time visibility and threat insights.",
    tags: ["Azure", "Microsoft Sentinel", "KQL", "Cybersecurity"],
    link: "#",
    images: ["/images/soc1.png", "/images/soc2.png", "/images/soc3.png"],
  },

  {
    name: "ExoTech - E-Commerce Platform",
    description:
      "Full-stack online store featuring secure authentication, real-time payment processing, and an optimized product browsing experience.",
    tags: ["TypeScript", "React", "Next.js", "MongoDB", "Stripe", "Firebase"],
    link: "#",
    images: [exotech1, exotech2, exotech3, exotech4, exotech5, exotech6],
  },

  {
    name: "BirdScout - Bird Identification App",
    description:
      "Mobile app that lets users capture bird photos and receive AI-assisted species identification.",
    tags: ["React Native", "Supabase", "Expo", "Firebase Auth", "TypeScript"],
    link: "#",
    images: ["/images/bird1.png", "/images/bird2.png", "/images/bird3.png"],
  },

  // {
  //   name: "Cloud Cost Guard",
  //   description:
  //     "Dashboard that ingests AWS & Azure billing exports into a unified view, flags cost anomalies, and simulates impact of rightsizing and reserved instances.",
  //   tags: ["React", "TypeScript", "Tailwind", "AWS", "Azure", "Cost Explorer"],
  //   year: "2025",
  //   link: "#",
  // },
  // {
  //   name: "Serverless Uptime Monitor",
  //   description:
  //     "Lightweight uptime & latency monitor for hobby services using serverless functions, synthetic checks, and Slack/webhook notifications.",
  //   tags: ["AWS Lambda", "API Gateway", "CloudWatch", "React"],
  //   year: "2024",
  //   link: "#",
  // },
  // {
  //   name: "IaC Sandbox",
  //   description:
  //     "Hands-on playground for Infrastructure as Code examples with side-by-side Terraform snippets and architecture diagrams.",
  //   tags: ["Terraform", "AWS", "Vite", "TypeScript"],
  //   year: "2024",
  //   link: "#",
  // },
  // {
  //   name: "Grade Tracker",
  //   description:
  //     "Frontend-only app for students to track course grades, assignment weights, and exam targets, with 'what do I need on the final' calculations.",
  //   tags: ["React", "TypeScript", "Tailwind"],
  //   year: "2023",
  //   link: "#",
  // },
  // {
  //   name: "Cloud Lab Notebook",
  //   description:
  //     "Static site that documents cloud labs and experiments: IAM setups, VPC patterns, Kubernetes clusters, and troubleshooting notes.",
  //   tags: ["Markdown", "Static Site", "DevOps"],
  //   year: "2023",
  //   link: "#",
  // },
  // {
  //   name: "Incident Timeline UI",
  //   description:
  //     "Frontend component library for visualizing incident timelines, impact windows, and remediation steps — inspired by SRE postmortems.",
  //   tags: ["React", "TypeScript", "Design System"],
  //   year: "2025",
  //   link: "#",
  // },
];
