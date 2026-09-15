export type Project = {
  id: string;
  name: string;
  period: string;
  summary: string;
  outcome: string;
  technologies: string[];
  category: "Migration" | "Integration" | "B2B";
};

export const profile = {
  name: "Easwanth Naga Narasimha",
  shortName: "Easwanth",
  role: "MuleSoft Integration Engineer",
  intro:
    "I design enterprise integrations that move critical data reliably across Salesforce, databases, files, and B2B systems.",
  availability: "Open to integration engineering opportunities",
  email: "easwanth123@gmail.com",
  phone: "+91 77779 12365",
  location: "Gudivada, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/easwanth-konduru",
  github: "https://github.com/Easwanth176",
  resume: "/easwanth_resume.pdf",
} as const;

export const metrics = [
  { value: "300+", label: "integration processes migrated" },
  { value: "8.60", label: "B.Tech CGPA" },
  { value: "5", label: "enterprise integration programs" },
] as const;

export const skillGroups = [
  {
    title: "Integration",
    skills: [
      "MuleSoft",
      "Salesforce",
      "REST APIs",
      "DataWeave",
      "Anypoint Studio",
      "Anypoint Partner Manager",
    ],
  },
  {
    title: "Data & enterprise",
    skills: ["SQL Server", "MySQL", "MongoDB", "S3", "FTP", "JDE", "EDI"],
  },
  {
    title: "Software development",
    skills: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
    ],
  },
] as const;

export const projects: Project[] = [
  {
    id: "actian-migration",
    name: "US-Reveeler",
    period: "May 2025 — Aug 2025",
    summary:
      "Led a large-scale migration of integration processes from Actian to MuleSoft.",
    outcome:
      "Migrated more than 300 processes spanning S3, FTP servers, and SQL Server while preserving the required data exchange paths.",
    technologies: ["MuleSoft", "S3", "FTP", "SQL Server"],
    category: "Migration",
  },
  {
    id: "customer-onboarding",
    name: "US-DoorDash",
    period: "Jan 2025 — Sep 2025",
    summary:
      "Delivered Salesforce migration flows and automated customer onboarding.",
    outcome:
      "Reduced manual onboarding effort and improved interoperability between Salesforce environments.",
    technologies: ["MuleSoft", "Salesforce", "Scalyr", "PagerDuty"],
    category: "Integration",
  },
  {
    id: "b2b-edi",
    name: "US-Ventura Foods",
    period: "Feb 2025 — Jun 2025",
    summary:
      "Built B2B integrations connecting JD Edwards with external trading partners.",
    outcome:
      "Queried JDE data and transmitted EDI documents through Anypoint Partner Manager.",
    technologies: ["MuleSoft", "JDE", "APM", "EDI"],
    category: "B2B",
  },
  {
    id: "sql-salesforce-sync",
    name: "US-Nova Tech",
    period: "Jan 2025 — Apr 2025",
    summary:
      "Developed integration flows that synchronize operational records into Salesforce.",
    outcome:
      "Connected SQL Server and Salesforce through maintainable MuleSoft integrations.",
    technologies: ["MuleSoft", "SQL Server", "Salesforce"],
    category: "Integration",
  },
  {
    id: "salesforce-migration",
    name: "US-Emburse",
    period: "Nov 2024 — Jan 2025",
    summary:
      "Implemented MuleSoft flows for a Salesforce-to-Salesforce migration.",
    outcome:
      "Supported dependable data movement between the source and destination Salesforce organizations.",
    technologies: ["MuleSoft", "Salesforce"],
    category: "Migration",
  },
];

export const experience = [
  {
    organization: "Caelius Consulting",
    role: "MuleSoft Developer",
    period: "July 2024 — Present",
    description:
      "Developing and maintaining MuleSoft integrations for enterprise solutions.",
  },
  {
    organization: "Freelance",
    role: "Developer",
    period: "Nov 2023 — Mar 2024",
    description:
      "Developed a demonstration website for a teacher at Sathyabama University.",
  },
  {
    organization: "AASMAAN Foundation",
    role: "Human Resource Executive",
    period: "May 2022 — Sep 2022",
    description:
      "Managed employee needs and supported the organization’s HR functions.",
  },
] as const;

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Lovely Professional University, Phagwara",
    period: "2021 — 2025",
    result: "CGPA 8.60",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College, Gudivada",
    period: "2019 — 2021",
    result: "832 marks",
  },
  {
    degree: "Secondary Schooling",
    institution: "Ravindra Bharathi Schools, Gudivada",
    period: "2018 — 2019",
    result: "CGPA 10",
  },
] as const;

export const highlights = {
  achievement:
    "Built a cloud-based DataWeave Playground that improved payload testing and team efficiency across the company.",
  certificates: [
    "Mastering Data Structures & Algorithms using C and C++",
    "Docker Course for Beginners",
    "DeepLearning.AI — Generative AI with Large Language Models",
  ],
  engagements: [
    "Founder of BUGS (Bright Under Graduates Society) at LPU",
    "Participant in hackathons, CTFs, and MuleSoft meetups",
    "Led technical event planning at Coding Ninjas LPU",
  ],
} as const;
