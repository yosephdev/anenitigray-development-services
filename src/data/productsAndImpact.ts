import { SolarProduct, ImpactMetric } from '../types/project';

export const solarProducts: SolarProduct[] = [
  {
    id: 'solar-home-system-1',
    name: 'Basic Solar Home System',
    description: '20W solar panel with LED lights and phone charging',
    capacity: '20W',
    price: 45,
    category: 'lighting',
    features: [
      '20W monocrystalline solar panel',
      '3 LED bulbs (5W each)',
      'Mobile phone charging',
      '12Ah battery',
      '2-year warranty'
    ]
  },
  {
    id: 'solar-home-system-2',
    name: 'Standard Solar Home System',
    description: '50W system with multiple lights and device charging',
    capacity: '50W',
    price: 95,
    category: 'power',
    features: [
      '50W solar panel',
      '4 LED bulbs',
      'Radio included',
      'USB charging ports',
      '26Ah battery',
      '3-year warranty'
    ]
  },
  {
    id: 'solar-home-system-3',
    name: 'Premium Solar Home System',
    description: 'Complete home solution with TV compatibility',
    capacity: '100W',
    price: 185,
    category: 'power',
    features: [
      '100W solar panel',
      '6 LED bulbs',
      'DC TV compatible',
      'Radio & USB charging',
      '40Ah battery',
      '5-year warranty'
    ]
  },
  {
    id: 'solar-lantern-1',
    name: 'Portable Solar Lantern',
    description: 'Compact lantern with phone charging',
    capacity: '5W',
    price: 15,
    category: 'lighting',
    features: [
      'Portable design',
      '8 hours battery life',
      'Phone charging',
      'Multiple brightness levels',
      '1-year warranty'
    ]
  },
  {
    id: 'solar-cooker-1',
    name: 'Solar Cooking System',
    description: 'Clean cooking solution for families',
    capacity: 'N/A',
    price: 120,
    category: 'cooking',
    features: [
      'Parabolic reflector design',
      'Cooks for 4-6 people',
      'Zero emissions',
      'Portable',
      '3-year warranty'
    ]
  },
  {
    id: 'solar-water-pump',
    name: 'Solar Water Pump',
    description: 'Small-scale water pumping for agriculture',
    capacity: '150W',
    price: 250,
    category: 'appliance',
    features: [
      '150W pump system',
      'Lift up to 10 meters',
      'Drip irrigation compatible',
      'Durable construction',
      '2-year warranty'
    ]
  }
];

export const impactMetrics: ImpactMetric[] = [
  {
    label: 'Youth Employed',
    value: '20-25',
    unit: 'young people',
    icon: 'Users',
    trend: 'up',
    description: 'Full-time employment created for youth aged 18-35'
  },
  {
    label: 'Households Reached',
    value: '500+',
    unit: 'families',
    icon: 'Home',
    trend: 'up',
    description: 'Households with clean energy access'
  },
  {
    label: 'People Impacted',
    value: '2,500+',
    unit: 'individuals',
    icon: 'Users',
    trend: 'up',
    description: 'Community members benefiting from solar energy'
  },
  {
    label: 'Carbon Reduction',
    value: '50',
    unit: 'tons CO2/year',
    icon: 'Leaf',
    trend: 'down',
    description: 'Annual carbon emissions prevented'
  },
  {
    label: 'Profit Reinvestment',
    value: '100',
    unit: '%',
    icon: 'DollarSign',
    trend: 'stable',
    description: 'All profits support ADS programs and youth employment'
  },
  {
    label: 'Training Hours',
    value: '500+',
    unit: 'hours',
    icon: 'Clock',
    trend: 'up',
    description: 'Technical and business training delivered'
  },
  {
    label: 'Energy Access Rate',
    value: '100',
    unit: '%',
    icon: 'Zap',
    trend: 'up',
    description: 'Of participating households with reliable electricity'
  },
  {
    label: 'Youth Trained',
    value: '25',
    unit: 'certified',
    icon: 'Award',
    trend: 'stable',
    description: 'Young people certified in solar installation'
  }
];

export const youthEmploymentPathway = [
  {
    step: 1,
    title: 'Recruitment',
    description: 'Open call for youth aged 18-35 from Mekelle area',
    duration: '2 weeks',
    activities: [
      'Community outreach',
      'Application process',
      'Selection interviews',
      'Background verification'
    ]
  },
  {
    step: 2,
    title: 'Training',
    description: 'Comprehensive technical and business skills training',
    duration: '3 months',
    activities: [
      'Solar technology fundamentals',
      'Installation & maintenance',
      'Business operations',
      'Customer service',
      'Safety procedures'
    ]
  },
  {
    step: 3,
    title: 'Certification',
    description: 'Official certification in solar installation',
    duration: '1 week',
    activities: [
      'Skills assessment',
      'Written examination',
      'Practical demonstration',
      'Certificate issuance'
    ]
  },
  {
    step: 4,
    title: 'Employment',
    description: 'Full-time employment at Dungo Energy Solutions',
    duration: 'Ongoing',
    activities: [
      'Field installation work',
      'Customer support',
      'Maintenance services',
      'Sales & distribution',
      'Community education'
    ]
  },
  {
    step: 5,
    title: 'Career Growth',
    description: 'Ongoing professional development and advancement',
    duration: 'Long-term',
    activities: [
      'Advanced training',
      'Leadership development',
      'Supervisory roles',
      'Entrepreneurship support',
      'Mentorship opportunities'
    ]
  }
];
