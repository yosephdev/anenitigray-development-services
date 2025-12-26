// Project-related types for ADS Youth-Led Solar Social Enterprise

export interface ProjectActivity {
  id: string;
  title: string;
  description: string;
  duration: string;
  budget: number;
  outcomes: string[];
  icon: string;
}

export interface BudgetItem {
  category: string;
  amount: number;
  percentage: number;
  description: string;
  items?: {
    name: string;
    cost: number;
  }[];
}

export interface ProjectTimeline {
  month: number;
  monthName: string;
  activities: string[];
  milestones: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  age: number;
  photo?: string;
  bio: string;
  expertise: string[];
}

export interface SolarProduct {
  id: string;
  name: string;
  description: string;
  capacity: string;
  price: number;
  features: string[];
  image?: string;
  category: 'lighting' | 'power' | 'cooking' | 'appliance';
}

export interface ImpactMetric {
  label: string;
  value: number | string;
  unit: string;
  icon: string;
  trend?: 'up' | 'down' | 'stable';
  description: string;
}

export interface GrantInformation {
  grantor: string;
  program: string;
  amount: number;
  currency: string;
  duration: number;
  startDate: string;
  endDate: string;
  alignment: string[];
}
