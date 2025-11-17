export interface ExperienceItem {
  title: string;
  org: string;
  timeframe: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Cloud Support Engineer Intern",
    org: "Royal Bank of Canada",
    timeframe: "May 2025 - Aug 2025",
    location: "Toronto, ON (Hybrid)",
    bullets: [
      "Supported cloud operations across AWS, Azure, and Kubernetes environments, helping teams troubleshoot platform and configuration issues.",
      "Improved internal documentation and workflows to simplify common support tasks and onboarding.",
      "Led knowledge-sharing sessions and contributed to migration efforts for internal cloud workloads.",
    ],
  },

  {
    title: "Cloud Support Engineer Intern",
    org: "Royal Bank of Canada",
    timeframe: "Sept 2023 - Aug 2024",
    location: "Toronto, ON (Hybrid)",
    bullets: [
      "Provided cloud support for internal teams using AWS, Azure, Kubernetes (AKS/EKS), and internal RBC platforms.",
      "Automated access and configuration workflows using Bash, Azure CLI, AWS CLI, and Kubernetes tools.",
      "Assisted with cloud migrations, private endpoint transitions, and environment troubleshooting using Splunk, CloudWatch, and Azure Monitor.",
    ],
  },
];
