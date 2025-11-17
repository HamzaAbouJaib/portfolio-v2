export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud & Platform",
    skills: [
      "AWS",
      "Azure",
      "Linux",
      "Docker",
      "Kubernetes (K8s)",
      "Terraform",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js (basic)"],
  },
  {
    name: "Tooling & Practices",
    skills: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Monitoring & Logging",
      "REST APIs",
    ],
  },
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Bash", "C"],
  },
];
