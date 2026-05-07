import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Code2,
  Database,
  Globe2,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type ExperienceItem = {
  company: string
  role: string
  period: string
  icon: LucideIcon
  summary: string
  highlights: string[]
}

export type ProjectItem = {
  title: string
  category: string
  icon: LucideIcon
  summary: string
  stack: string[]
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export const profile = {
  name: 'Hamzeh Abedalqader',
  role: 'Full Stack Software Engineer',
  location: 'Amman, Jordan',
  email: 'hamzeh1652002@gmail.com',
  github: 'https://github.com/Hamzeh16',
  linkedin: 'https://www.linkedin.com/in/hamzeh-abdelqader-943253223/',
  cvPath: '/Hamzeh-Abedalqader-CV.pdf',
}

export const strengths = [
  'Enterprise onboarding platforms',
  'KYC and workflow automation',
  'Production-ready ASP.NET systems',
]

export const experiences: ExperienceItem[] = [
  {
    company: 'AlphaCentrix',
    role: 'Software Engineer',
    period: 'Feb 2025 - Present',
    icon: Building2,
    summary:
      'Building enterprise modules across onboarding, content operations, statements, and production release workflows.',
    highlights: [
      'Corporate and Individual Onboarding modules',
      'System Information Setup, Statements, Announcements, and News Management',
      'Yakeen integration and IIS production deployments',
    ],
  },
  {
    company: 'Binary Digits',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 - Sep 2024',
    icon: BriefcaseBusiness,
    summary:
      'Contributed to .NET applications with responsive interfaces, Blazor screens, and backend performance improvements.',
    highlights: [
      'ASP.NET, Blazor, and responsive UI implementation',
      'Real estate application features',
      'HR management system support and optimization',
    ],
  },
  {
    company: 'Freelance',
    role: 'Developer',
    period: 'Project based',
    icon: CalendarCheck,
    summary:
      'Delivered practical software for university appointment scheduling between students and staff.',
    highlights: [
      'Appointment Booking System',
      'Student and staff scheduling flows',
      'Clean admin-friendly workflows',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Corporate Onboarding Module',
    category: 'Enterprise platform',
    icon: ShieldCheck,
    summary:
      'A structured onboarding flow for corporate customers with review-ready data and operational checkpoints.',
    stack: ['ASP.NET Core', 'C#', 'SQL Server', 'Angular'],
  },
  {
    title: 'Individual Onboarding',
    category: 'KYC workflow',
    icon: BadgeCheck,
    summary:
      'Customer onboarding experience focused on validation, data accuracy, and smooth back-office processing.',
    stack: ['ASP.NET Core', 'Razor Pages', 'JavaScript', 'Yakeen'],
  },
  {
    title: 'Appointment Booking System',
    category: 'Freelance product',
    icon: CalendarCheck,
    summary:
      'Scheduling system for students and university staff with clear appointment creation and management.',
    stack: ['ASP.NET', 'SQL Server', 'Responsive UI'],
  },
  {
    title: 'Career Path Hub',
    category: 'Guidance platform',
    icon: Rocket,
    summary:
      'A career exploration platform concept that organizes learning paths, opportunities, and next steps.',
    stack: ['React', 'TypeScript', 'API Design'],
  },
  {
    title: 'Enterprise Workflow Automation',
    category: 'KYC system',
    icon: Workflow,
    summary:
      'Workflow-focused system for streamlining reviews, approvals, and enterprise customer operations.',
    stack: ['C#', 'ASP.NET Core', 'SQL Server', 'IIS'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: ServerCog,
    skills: ['ASP.NET Core', 'C#', 'Razor Pages', 'Blazor'],
  },
  {
    title: 'Frontend',
    icon: Globe2,
    skills: ['Angular', 'React', 'JavaScript', 'Responsive UI'],
  },
  {
    title: 'Data',
    icon: Database,
    skills: ['SQL Server', 'Stored Procedures', 'Data Modeling'],
  },
  {
    title: 'Delivery',
    icon: Layers3,
    skills: ['Git', 'IIS deployment', 'Production releases', 'Debugging'],
  },
  {
    title: 'Engineering',
    icon: Code2,
    skills: ['API integration', 'Workflow systems', 'Performance tuning'],
  },
]
