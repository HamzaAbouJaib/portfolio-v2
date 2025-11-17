export interface EducationItem {
  title: string;
  org: string;
  timeframe: string;
  location?: string;
  bullets: string[];
}

export const education: EducationItem[] = [
  {
    title: "B.Eng, Software Engineering",
    org: "McMaster University",
    timeframe: "Sept 2021 - May 2026 (Expected)",
    location: "Hamilton, ON",
    bullets: [
      "Coursework in data structures, operating systems, databases, distributed systems, and computer networks.",
      "Provost's Honour List and Dean's Honour List recipient.",
    ],
  },
  {
    title: "Cloud & DevOps Self-Study",
    org: "Online Platforms",
    timeframe: "Ongoing",
    bullets: [
      "Hands-on labs in AWS (IAM, VPC, ECS, Lambda, EC2, RDS) and Azure (App Services, Functions, Monitor).",
      "Exploring IaC tools like Terraform and GitHub Actions for CI/CD pipelines.",
    ],
  },
];
