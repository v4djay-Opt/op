export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  painPoints: string[];
  solutions: string[];
  relevantServices: string[];
  relevantProducts: string[];
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Close More Deals with Smarter Digital Tools",
    painPoints: [
      "Leads slip through the cracks without a proper CRM",
      "Multiple property listings are hard to manage",
      "Follow-ups are inconsistent and manual",
      "Buyers expect instant WhatsApp responses",
    ],
    solutions: [
      "Real Estate CRM with automated lead assignment",
      "Property listing portals with advanced search",
      "WhatsApp API integration for instant replies",
      "Marketing automation for new listings",
    ],
    relevantServices: [
      "Web Design & Development",
      "CRM & Custom Portals",
      "Digital Marketing",
      "SEO",
    ],
    relevantProducts: ["Real Estate CRM"],
    faqs: [
      {
        question: "Can the CRM handle multiple agents?",
        answer:
          "Yes, with role-based access so each agent sees only their assigned leads.",
      },
      {
        question: "Can buyers search properties on the portal?",
        answer:
          "Absolutely. Our portals include advanced filters, map view, and saved searches.",
      },
    ],
  },
  {
    slug: "schools-education",
    name: "Schools & Education",
    tagline: "Digitize Your Campus Operations",
    painPoints: [
      "Admission process is paperwork-heavy and slow",
      "Fee collection and receipt tracking is chaotic",
      "Parent communication is fragmented",
      "Student records are scattered across files",
    ],
    solutions: [
      "Online admission forms with automated workflows",
      "Fee management with payment gateway integration",
      "Parent mobile app for announcements and results",
      "Centralized student database with attendance tracking",
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Social Media Management",
    ],
    relevantProducts: ["School Management System"],
    faqs: [
      {
        question: "Can parents pay fees online?",
        answer:
          "Yes, we integrate Razorpay and other payment gateways for seamless online fee collection.",
      },
      {
        question: "Is there a mobile app for parents?",
        answer:
          "Yes, we can build both Android and iOS apps or a progressive web app.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Streamline Patient Care and Hospital Operations",
    painPoints: [
      "Patient appointment scheduling is disorganized",
      "Medical records are difficult to access and share",
      "Billing and insurance claims are error-prone",
      "No digital presence for online bookings",
    ],
    solutions: [
      "Online appointment booking with doctor availability",
      "Electronic health records with role-based access",
      "Automated billing and insurance claim workflows",
      "Patient portal for reports and prescriptions",
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Digital Marketing",
    ],
    relevantProducts: ["Hospital Management System"],
    faqs: [
      {
        question: "Is patient data HIPAA compliant?",
        answer:
          "We implement encryption, access controls, and audit logs to ensure data security and compliance.",
      },
      {
        question: "Can doctors access records remotely?",
        answer:
          "Yes, the system is cloud-based and accessible from any device with proper authentication.",
      },
    ],
  },
  {
    slug: "fitness-gym",
    name: "Fitness & Gym",
    tagline: "Grow Your Gym with Smart Management",
    painPoints: [
      "Membership renewals are tracked manually",
      "Class scheduling causes double-bookings",
      "Member engagement drops after the first month",
      "No way to track member progress digitally",
    ],
    solutions: [
      "Automated membership renewals and reminders",
      "Class booking system with capacity limits",
      "Member app for schedules, payments, and progress",
      "Marketing automation for re-engagement",
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Digital Marketing",
      "Social Media Management",
    ],
    relevantProducts: ["Gym Management System"],
    faqs: [
      {
        question: "Can members book classes through the app?",
        answer:
          "Yes, members can view schedules, book slots, and receive confirmation via WhatsApp.",
      },
      {
        question: "Does it support multiple gym branches?",
        answer:
          "Yes, the system supports multi-location management with centralized reporting.",
      },
    ],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    tagline: "Impress Clients with Professional Project Management",
    painPoints: [
      "Client approvals are slow and disorganized",
      "Vendor and material tracking is manual",
      "Project timelines frequently slip",
      "No centralized place for mood boards and designs",
    ],
    solutions: [
      "Client portal for design approvals and feedback",
      "Vendor and material inventory tracking",
      "Project timeline with milestone reminders",
      "Digital mood board and 3D view sharing",
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Social Media Management",
    ],
    relevantProducts: ["Interior Design CRM"],
    faqs: [
      {
        question: "Can clients approve designs in the portal?",
        answer:
          "Yes, clients can view, comment, and approve designs with digital signatures.",
      },
      {
        question: "Does it track vendor payments?",
        answer:
          "Yes, vendor invoices, payment status, and material costs are all tracked.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    tagline: "Boost Online Sales with a High-Converting Store",
    painPoints: [
      "Cart abandonment rates are high",
      "Product catalog management is time-consuming",
      "No integration between online and offline inventory",
      "Customer retention is weak",
    ],
    solutions: [
      "Conversion-optimized e-commerce storefront",
      "Automated inventory sync across channels",
      "Abandoned cart recovery via email and WhatsApp",
      "Loyalty program and referral system",
    ],
    relevantServices: [
      "Web Design & Development",
      "Digital Marketing",
      "SEO",
      "Social Media Management",
    ],
    relevantProducts: [],
    faqs: [
      {
        question: "Which platforms do you build stores on?",
        answer:
          "We build custom stores with Next.js or use Shopify depending on your needs.",
      },
      {
        question: "Can you integrate with my existing POS?",
        answer:
          "Yes, we can integrate with most major POS and inventory management systems.",
      },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Digital Transformation for Modern Enterprises",
    painPoints: [
      "Internal processes are slow and paper-based",
      "Employee onboarding is inconsistent",
      "Department silos prevent collaboration",
      "No real-time visibility into operations",
    ],
    solutions: [
      "Custom internal portals and dashboards",
      "Automated approval workflows",
      "Employee self-service portals",
      "Data analytics and executive reporting",
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "SEO",
    ],
    relevantProducts: [],
    faqs: [
      {
        question: "Can you integrate with our existing ERP?",
        answer:
          "Yes, we build APIs and middleware to connect with SAP, Oracle, and other ERPs.",
      },
      {
        question: "Is SSO supported?",
        answer:
          "Yes, we support SAML, OAuth, and Active Directory integration for single sign-on.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
