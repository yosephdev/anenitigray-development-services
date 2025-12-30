import { ProjectActivity, BudgetItem, ProjectTimeline, GrantInformation } from '../types/project';

export const grantInformation: GrantInformation = {
  grantor: 'YAL Entrepreneurship',
  program: 'Entrepreneurship Grant Type',
  amount: 30000,
  currency: 'EUR',
  duration: 12,
  startDate: '2026-05-01',
  endDate: '2027-04-30',
  alignment: [
    'Youth Employment',
    'Clean Energy Access',
    'Social Enterprise Development',
    'Sustainable Development Goals',
    'Post-Conflict Community Recovery'
  ]
};

export const projectActivities: ProjectActivity[] = [
  {
    id: 'activity-1',
    title: 'Youth Training & Capacity Building',
    description: 'Intensive 3-month comprehensive training program for 20-25 young people (aged 18-35) in solar technology installation, maintenance, business operations, customer service, and trauma-informed leadership.',
    duration: '3 months',
    budget: 6000,
    outcomes: [
      '20-25 youth trained in solar technology & business',
      'Industry certification in solar installation',
      'Business management & financial literacy',
      'Trauma-informed mentorship provided',
      'Job-ready workforce with career pathways'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'activity-2',
    title: 'Solar Product Procurement & Distribution',
    description: 'Strategic procurement of 300 quality solar home systems and distribution to 500+ households across Mekelle, Tigray regions (Enderta, Qola-Temben, Seharti, Hawzen, Kilite Awlaelo).',
    duration: '9 months',
    budget: 15000,
    outcomes: [
      '300 solar home systems installed',
      'Clean energy access for 500+ households',
      'Estimated 2,500+ individuals benefited',
      '~150+ tons CO₂ emissions avoided',
      'Reduced household energy costs'
    ],
    icon: 'Sun'
  },
  {
    id: 'activity-3',
    title: 'Social Enterprise Operations & Employment',
    description: 'Establishment and operation of Dungo Energy Solutions as a sustainable youth-led social enterprise creating full-time paid employment (12 months) with career advancement, professional development, and mentorship.',
    duration: '12 months',
    budget: 4000,
    outcomes: [
      '20-25 youth employed full-time (ages 18-35)',
      '40% employment for IDP youth, 30% for female youth',
      'Sustainable revenue-generating model',
      'Business reinvestment into ADS programs',
      'Expected 80% cost recovery by month 12'
    ],
    icon: 'Building2'
  },
  {
    id: 'activity-4',
    title: 'Monitoring, Evaluation & Global Learning',
    description: 'Comprehensive monitoring system with quarterly reviews, impact assessments, and participation in AU-EU Link & Learn global learning event for knowledge sharing and organizational growth.',
    duration: '12 months',
    budget: 5000,
    outcomes: [
      'Monthly monitoring & quarterly reviews',
      'Youth employment & income tracking',
      'Community impact assessments',
      'Global learning event participation (2 reps)',
      'Final comprehensive impact report'
    ],
    icon: 'BarChart3'
  }
];

export const budgetBreakdown: BudgetItem[] = [
  {
    category: 'Training & Capacity Building',
    amount: 6000,
    percentage: 20,
    description: 'Youth training in solar technology and business operations including mentorship',
    items: [
      { name: 'Solar installation & business training for 20 youth', cost: 6000 }
    ]
  },
  {
    category: 'Solar Product Procurement',
    amount: 15000,
    percentage: 50,
    description: 'Purchase of 300 quality solar home systems for distribution',
    items: [
      { name: '300 solar home systems for households in Mekelle, Tigray', cost: 15000 }
    ]
  },
  {
    category: 'Operations & Employment',
    amount: 4000,
    percentage: 13.3,
    description: 'Part-time employment and operations for 10 youth over 12 months',
    items: [
      { name: 'Part-time employment for 10 youth during 12-month project', cost: 4000 }
    ]
  },
  {
    category: 'Global Learning & Events',
    amount: 3000,
    percentage: 10,
    description: 'AU-EU Link & Learn global learning event participation',
    items: [
      { name: 'Flights for 2 reps to AU-EU Link & Learn event', cost: 2000 },
      { name: 'Accommodation & per diem for 5-day event', cost: 1000 }
    ]
  },
  {
    category: 'Monitoring & Evaluation',
    amount: 2000,
    percentage: 6.7,
    description: 'MEAL system, impact tracking, and comprehensive reporting',
    items: [
      { name: 'MEAL system, impact tracking, and reporting', cost: 2000 }
    ]
  }
];

export const projectTimeline: ProjectTimeline[] = [
  {
    month: 1,
    monthName: 'May 2026',
    activities: ['Project launch & kickoff', 'Team assembly', 'Community engagement begins'],
    milestones: ['Project officially launched']
  },
  {
    month: 2,
    monthName: 'June 2026',
    activities: ['Youth recruitment (20-25)', 'Training curriculum finalized', 'Partner coordination'],
    milestones: ['Recruitment complete', 'Training cohort identified']
  },
  {
    month: 3,
    monthName: 'July 2026',
    activities: ['Intensive training begins', 'Solar technology & business modules', 'Mentorship starts'],
    milestones: ['Training program launch']
  },
  {
    month: 4,
    monthName: 'August 2026',
    activities: ['Hands-on installation practice', 'Continued business training', 'Supplier engagement'],
    milestones: ['First products received']
  },
  {
    month: 5,
    monthName: 'September 2026',
    activities: ['Training completion', 'Certification exams', 'Enterprise setup begins'],
    milestones: ['Youth certified & job-ready', 'Dungo Energy officially launched']
  },
  {
    month: 6,
    monthName: 'October 2026',
    activities: ['First installations begin', 'Customer engagement', 'Operations ramp-up'],
    milestones: ['50+ systems installed']
  },
  {
    month: 7,
    monthName: 'November 2026',
    activities: ['Installation acceleration', 'Maintenance protocols established', 'Community feedback'],
    milestones: ['100+ systems installed']
  },
  {
    month: 8,
    monthName: 'December 2026',
    activities: ['Mid-term evaluation', 'Progress review', 'Sustainability assessment'],
    milestones: ['200+ systems installed', 'Mid-term review complete']
  },
  {
    month: 9,
    monthName: 'January 2027',
    activities: ['Continued distribution', 'Skill enhancement training', 'Revenue tracking'],
    milestones: ['300+ systems installed', 'Cost recovery milestone']
  },
  {
    month: 10,
    monthName: 'February 2027',
    activities: ['Final installations phase', 'Quality assurance checks', 'AU-EU event prep'],
    milestones: ['AU-EU Link & Learn event participation']
  },
  {
    month: 11,
    monthName: 'March 2027',
    activities: ['Final evaluations', 'Impact assessments', 'Sustainability planning'],
    milestones: ['500+ households reached', 'Final impact assessment']
  },
  {
    month: 12,
    monthName: 'April 2027',
    activities: ['Project closure', 'Final reporting', 'Handover to sustainable operations'],
    milestones: ['Project completion', 'Dungo Energy sustainable operation']
  }
];
