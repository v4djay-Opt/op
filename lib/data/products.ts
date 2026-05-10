export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  pricing: { plan: string; price: string; features: string[]; cta: string }[];
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    slug: "school-management-system",
    name: "School Management System",
    tagline: "Run Your School from One Dashboard",
    description:
      "A complete digital campus solution for admissions, fees, attendance, exams, and parent communication. Built for schools that want to go paperless.",
    features: [
      {
        title: "Online Admissions",
        description:
          "Parents can apply online. Admin can track and manage applications with automated status updates.",
      },
      {
        title: "Fee Management",
        description:
          "Generate invoices, send reminders, and collect payments via integrated payment gateway.",
      },
      {
        title: "Attendance & Reports",
        description:
          "Daily attendance tracking with instant parent notifications and detailed analytics.",
      },
      {
        title: "Exam & Results",
        description:
          "Create exam schedules, upload marks, and publish results with parent app access.",
      },
      {
        title: "Parent Mobile App",
        description:
          "iOS and Android app for announcements, fee payment, results, and teacher chat.",
      },
      {
        title: "Staff & Payroll",
        description:
          "Manage teacher profiles, leaves, and salary processing in one place.",
      },
    ],
    pricing: [
      {
        plan: "Starter",
        price: "Rs. 2,999/mo",
        features: [
          "Up to 500 students",
          "Fee & Attendance",
          "Parent App (Web)",
          "Email Support",
        ],
        cta: "Get Started",
      },
      {
        plan: "Professional",
        price: "Rs. 5,999/mo",
        features: [
          "Up to 2,000 students",
          "All Starter features",
          "Parent Mobile Apps",
          "Exam & Results Module",
          "WhatsApp Integration",
          "Priority Support",
        ],
        cta: "Most Popular",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited students",
          "All Professional features",
          "Custom Modules",
          "Multi-branch Support",
          "Dedicated Account Manager",
          "SLA-backed Support",
        ],
        cta: "Request Quote",
      },
    ],
    faqs: [
      {
        question: "How long does deployment take?",
        answer:
          "Standard deployment is 2-3 weeks. Customizations may add 1-2 weeks.",
      },
      {
        question: "Is training included?",
        answer:
          "Yes, we provide 2 training sessions for admin and teaching staff.",
      },
      {
        question: "Can we migrate existing student data?",
        answer:
          "Yes, we handle bulk data migration from Excel or any existing system.",
      },
    ],
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    tagline: "Patient Care, Simplified and Digitized",
    description:
      "An integrated hospital management platform covering appointments, patient records, billing, pharmacy, and lab reports.",
    features: [
      {
        title: "Online Appointments",
        description:
          "Patients book slots online. Doctors see schedules in real-time. No double bookings.",
      },
      {
        title: "EHR & Patient Records",
        description:
          "Digital health records with secure access, history, prescriptions, and attachments.",
      },
      {
        title: "Billing & Insurance",
        description:
          "Automated billing with TPA integration, claim tracking, and receipt generation.",
      },
      {
        title: "Pharmacy & Inventory",
        description:
          "Track medicines, stock alerts, and auto-generate prescriptions.",
      },
      {
        title: "Lab Reports",
        description:
          "Patients receive lab reports via app and email. Doctors can view trends.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Real-time occupancy, revenue, patient count, and department performance.",
      },
    ],
    pricing: [
      {
        plan: "Clinic",
        price: "Rs. 4,999/mo",
        features: [
          "Single doctor/clinic",
          "Appointments & EHR",
          "Billing Module",
          "Email Support",
        ],
        cta: "Get Started",
      },
      {
        plan: "Hospital",
        price: "Rs. 14,999/mo",
        features: [
          "Multi-department",
          "All Clinic features",
          "Pharmacy & Lab",
          "Insurance Integration",
          "Patient Mobile App",
          "Priority Support",
        ],
        cta: "Most Popular",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Multi-hospital chain",
          "All Hospital features",
          "Custom Integrations",
          "Analytics & BI",
          "Dedicated Account Manager",
          "24/7 Support",
        ],
        cta: "Request Quote",
      },
    ],
    faqs: [
      {
        question: "Is the system HIPAA compliant?",
        answer:
          "Yes, we follow best practices for data encryption, access control, and audit logging.",
      },
      {
        question: "Can patients access their reports online?",
        answer:
          "Yes, through a secure patient portal and mobile app.",
      },
      {
        question: "Does it support OPD and IPD?",
        answer:
          "Yes, the system handles both outpatient and inpatient workflows.",
      },
    ],
  },
  {
    slug: "gym-management-system",
    name: "Gym Management System",
    tagline: "Retain Members, Automate Operations",
    description:
      "A complete gym and fitness studio platform for memberships, class bookings, trainer scheduling, and member engagement.",
    features: [
      {
        title: "Membership Management",
        description:
          "Track plans, renewals, freezes, and cancellations with automated reminders.",
      },
      {
        title: "Class Booking",
        description:
          "Members book yoga, Zumba, or PT sessions. Capacity limits prevent overbooking.",
      },
      {
        title: "Trainer Dashboard",
        description:
          "Trainers manage schedules, track member progress, and log workouts.",
      },
      {
        title: "Payment Integration",
        description:
          "Online payment for memberships, supplements, and merchandise.",
      },
      {
        title: "Member App",
        description:
          "Check schedules, book classes, track attendance, and receive offers.",
      },
      {
        title: "Analytics",
        description:
          "Revenue, member retention, peak hours, and popular classes at a glance.",
      },
    ],
    pricing: [
      {
        plan: "Starter",
        price: "Rs. 2,499/mo",
        features: [
          "Single location",
          "Up to 300 members",
          "Membership & Billing",
          "Email Support",
        ],
        cta: "Get Started",
      },
      {
        plan: "Growth",
        price: "Rs. 4,999/mo",
        features: [
          "Up to 3 locations",
          "Up to 1,500 members",
          "Class Booking & Trainer App",
          "Member Mobile App",
          "WhatsApp Reminders",
          "Priority Support",
        ],
        cta: "Most Popular",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited locations",
          "Unlimited members",
          "White-label App",
          "Custom Integrations",
          "Dedicated Manager",
          "24/7 Support",
        ],
        cta: "Request Quote",
      },
    ],
    faqs: [
      {
        question: "Can members check in with QR codes?",
        answer:
          "Yes, the member app generates QR codes for quick check-in at the front desk.",
      },
      {
        question: "Does it handle diet plans?",
        answer:
          "Yes, trainers can assign and track diet plans through the member dashboard.",
      },
      {
        question: "Can I offer online classes?",
        answer:
          "Yes, we can integrate Zoom or custom video streaming for online sessions.",
      },
    ],
  },
  {
    slug: "real-estate-crm",
    name: "Real Estate CRM",
    tagline: "Never Lose a Lead Again",
    description:
      "A purpose-built CRM for real estate agents and developers. Track leads, manage properties, automate follow-ups, and close faster.",
    features: [
      {
        title: "Lead Capture",
 description:
          "Auto-capture leads from Facebook, Google, WhatsApp, and your website into one pipeline.",
      },
      {
        title: "Property Catalog",
        description:
          "Upload properties with images, videos, floor plans, and virtual tour links.",
      },
      {
        title: "Pipeline Management",
        description:
          "Track every lead from inquiry to closing with stage-based automation.",
      },
      {
        title: "WhatsApp Automation",
        description:
          "Instant replies, follow-up reminders, and broadcast messages via WhatsApp Business API.",
      },
      {
        title: "Site Visit Scheduler",
        description:
          "Clients book site visits online. Agents get notified and can manage schedules.",
      },
      {
        title: "Reports & Analytics",
        description:
          "Sales performance, source attribution, conversion rates, and revenue forecasts.",
      },
    ],
    pricing: [
      {
        plan: "Agent",
        price: "Rs. 1,999/mo",
        features: [
          "1 agent",
          "Up to 100 leads/mo",
          "Property Catalog",
          "WhatsApp Integration",
          "Email Support",
        ],
        cta: "Get Started",
      },
      {
        plan: "Team",
        price: "Rs. 7,999/mo",
        features: [
          "Up to 10 agents",
          "Unlimited leads",
          "All Agent features",
          "Site Visit Scheduler",
          "Automated Follow-ups",
          "Priority Support",
        ],
        cta: "Most Popular",
      },
      {
        plan: "Developer",
        price: "Custom",
        features: [
          "Unlimited agents",
          "All Team features",
          "Multi-project Support",
          "White-label Portal",
          "API Access",
          "Dedicated Manager",
        ],
        cta: "Request Quote",
      },
    ],
    faqs: [
      {
        question: "Can I import leads from Excel?",
        answer:
          "Yes, bulk import is supported with duplicate detection.",
      },
      {
        question: "Does it integrate with Facebook Lead Ads?",
        answer:
          "Yes, Facebook and Google lead form integrations are available.",
      },
      {
        question: "Can buyers browse properties without logging in?",
        answer:
          "Yes, the public property portal is fully searchable. Login is only required for agents.",
      },
    ],
  },
  {
    slug: "interior-design-crm",
    name: "Interior Design CRM",
    tagline: "Deliver Stunning Projects On Time",
    description:
      "A project management and CRM platform built for interior designers. Manage clients, vendors, materials, approvals, and timelines effortlessly.",
    features: [
      {
        title: "Client Portal",
        description:
          "Clients view mood boards, 3D renders, and approve designs with comments.",
      },
      {
        title: "Vendor Management",
        description:
          "Track vendor contacts, quotations, and delivery status in one place.",
      },
      {
        title: "Material Library",
        description:
          "Catalog of materials with prices, availability, and supplier details.",
      },
      {
        title: "Project Timeline",
        description:
          "Gantt-style timelines with milestones, dependencies, and automated reminders.",
      },
      {
        title: "Budget Tracker",
        description:
          "Real-time budget vs actual spend tracking with alerts for overruns.",
      },
      {
        title: "Invoice & Payments",
        description:
          "Generate professional invoices and track payment milestones.",
      },
    ],
    pricing: [
      {
        plan: "Freelancer",
        price: "Rs. 1,499/mo",
        features: [
          "1 designer",
          "Up to 5 active projects",
          "Client Portal",
          "Material Library",
          "Email Support",
        ],
        cta: "Get Started",
      },
      {
        plan: "Studio",
        price: "Rs. 5,999/mo",
        features: [
          "Up to 5 designers",
          "Unlimited projects",
          "All Freelancer features",
          "Vendor Management",
          "Budget Tracker",
          "Priority Support",
        ],
        cta: "Most Popular",
      },
      {
        plan: "Agency",
        price: "Custom",
        features: [
          "Unlimited designers",
          "All Studio features",
          "White-label Client Portal",
          "Custom Integrations",
          "API Access",
          "Dedicated Manager",
        ],
        cta: "Request Quote",
      },
    ],
    faqs: [
      {
        question: "Can clients approve designs in the portal?",
        answer:
          "Yes, clients can view, comment, and digitally approve designs.",
      },
      {
        question: "Does it handle 3D renders?",
        answer:
          "You can upload and share 3D renders, walkthroughs, and 360-degree views.",
      },
      {
        question: "Can I track vendor payments?",
        answer:
          "Yes, all vendor invoices, advances, and balances are tracked.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
