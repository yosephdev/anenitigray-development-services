import { ProjectActivity, BudgetItem, ProjectTimeline, GrantInformation } from '../types/project';

export const grantInformation: GrantInformation = {
  grantor: 'European Union',
  program: 'AU-EU Youth Lab Entrepreneurship Grant',
  amount: 30000,
  currency: 'EUR',
  duration: 12,
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  alignment: [
    'Youth Employment',
    'Clean Energy Access',
    'Social Enterprise Development',
    'Climate Action',
    'Sustainable Development Goals'
  ]
};

export const projectActivities: ProjectActivity[] = [
  {
    id: 'activity-1',
    title: 'Youth Training & Capacity Building',
    description: 'Comprehensive training program for 20-25 young people (aged 18-35) in solar technology installation, maintenance, business operations, and customer service.',
    duration: '3 months',
    budget: 8000,
    outcomes: [
      '20-25 youth trained in solar technology',
      'Certification in solar installation',
      'Business management skills developed',
      'Job-ready workforce created'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'activity-2',
    title: 'Solar Product Procurement & Distribution',
    description: 'Procurement of quality solar home systems, lanterns, and accessories for distribution to 500+ households in Mekelle and surrounding areas.',
    duration: '9 months',
    budget: 15000,
    outcomes: [
      '500+ solar home systems distributed',
      'Energy access for 2,500+ individuals',
      'Reduced carbon emissions',
      'Sustainable energy adoption'
    ],
    icon: 'Sun'
  },
  {
    id: 'activity-3',
    title: 'Social Enterprise Operations',
    description: 'Establish and operate Dungo Energy Solutions as a sustainable social enterprise, creating paid employment for trained youth while serving the community.',
    duration: '12 months',
    budget: 5000,
    outcomes: [
      '20-25 youth employed full-time',
      'Sustainable business model established',
      'Revenue generation for ADS programs',
      'Community energy hub created'
    ],
    icon: 'Building2'
  },
  {
    id: 'activity-4',
    title: 'Monitoring, Evaluation & Impact Assessment',
    description: 'Continuous monitoring and evaluation of project activities, impact measurement, and reporting to ensure effectiveness and sustainability.',
    duration: '12 months',
    budget: 2000,
    outcomes: [
      'Regular impact reports',
      'Data-driven decision making',
      'Stakeholder engagement',
      'Sustainability planning'
    ],
    icon: 'BarChart3'
  }
];

export const budgetBreakdown: BudgetItem[] = [
  {
    category: 'Training & Capacity Building',
    amount: 8000,
    percentage: 26.7,
    description: 'Youth training in solar technology and business operations',
    items: [
      { name: 'Training materials & equipment', cost: 3000 },
      { name: 'Trainer fees & expertise', cost: 2500 },
      { name: 'Certification & assessment', cost: 1500 },
      { name: 'Trainee stipends & support', cost: 1000 }
    ]
  },
  {
    category: 'Solar Product Procurement',
    amount: 15000,
    percentage: 50,
    description: 'Purchase of quality solar home systems and accessories',
    items: [
      { name: 'Solar home systems (500 units)', cost: 12000 },
      { name: 'Solar lanterns & accessories', cost: 2000 },
      { name: 'Quality assurance & testing', cost: 1000 }
    ]
  },
  {
    category: 'Operations & Staffing',
    amount: 5000,
    percentage: 16.7,
    description: 'Social enterprise setup and youth employment',
    items: [
      { name: 'Youth salaries (6 months)', cost: 3000 },
      { name: 'Office setup & equipment', cost: 1000 },
      { name: 'Marketing & outreach', cost: 700 },
      { name: 'Transport & logistics', cost: 300 }
    ]
  },
  {
    category: 'Monitoring & Evaluation',
    amount: 2000,
    percentage: 6.7,
    description: 'Impact assessment and reporting',
    items: [
      { name: 'Data collection tools', cost: 800 },
      { name: 'Evaluation consultant', cost: 700 },
      { name: 'Reporting & documentation', cost: 500 }
    ]
  }
];

export const projectTimeline: ProjectTimeline[] = [
  {
    month: 1,
    monthName: 'January',
    activities: ['Project kickoff', 'Team recruitment', 'Baseline assessment'],
    milestones: ['Project launch']
  },
  {
    month: 2,
    monthName: 'February',
    activities: ['Training program design', 'Curriculum development', 'Trainer recruitment'],
    milestones: ['Training program ready']
  },
  {
    month: 3,
    monthName: 'March',
    activities: ['Youth training begins', 'Technical skills development', 'Business training'],
    milestones: ['Training cohort 1 starts']
  },
  {
    month: 4,
    monthName: 'April',
    activities: ['Continued training', 'Hands-on installation practice', 'Solar product procurement'],
    milestones: ['First product shipment received']
  },
  {
    month: 5,
    monthName: 'May',
    activities: ['Training completion', 'Certification', 'Enterprise setup begins'],
    milestones: ['Youth certified', 'Dungo Energy launched']
  },
  {
    month: 6,
    monthName: 'June',
    activities: ['Distribution starts', 'Youth employment begins', 'Community outreach'],
    milestones: ['First 100 households reached']
  },
  {
    month: 7,
    monthName: 'July',
    activities: ['Continued distribution', 'Installation services', 'Customer support'],
    milestones: ['200 households reached']
  },
  {
    month: 8,
    monthName: 'August',
    activities: ['Distribution expansion', 'Maintenance services', 'Mid-term evaluation'],
    milestones: ['300 households reached', 'Mid-term report']
  },
  {
    month: 9,
    monthName: 'September',
    activities: ['Continued operations', 'Skills enhancement', 'Business development'],
    milestones: ['400 households reached']
  },
  {
    month: 10,
    monthName: 'October',
    activities: ['Distribution completion', 'Quality checks', 'Impact assessment'],
    milestones: ['500 households reached']
  },
  {
    month: 11,
    monthName: 'November',
    activities: ['Final evaluations', 'Sustainability planning', 'Documentation'],
    milestones: ['Final impact assessment']
  },
  {
    month: 12,
    monthName: 'December',
    activities: ['Project closure', 'Final reporting', 'Sustainability transition'],
    milestones: ['Project completion', 'Final report submitted']
  }
];
