export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  images: string[];
  painPoints: string[];
  solutions: { title: string; description: string }[];
  relevantServices: string[];
  relevantProducts: string[];
  faqs: { question: string; answer: string }[];
  caseStudy?: { client: string; result: string; metric: string; description: string; slug: string };
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Close More Deals with Smarter Digital Tools",
    description: "CRM, lead tracking, and automated follow-ups built for agents.",
    icon: "Building2",
    images: [
      "/images/industries/real-estate-1.jpg",
      "/images/industries/real-estate-2.jpg",
      "/images/industries/real-estate-3.jpg",
    ],
    painPoints: [
      "Leads slip through the cracks without a proper CRM",
      "Multiple property listings are hard to manage",
      "Follow-ups are inconsistent and manual",
      "Buyers expect instant WhatsApp responses",
      "Lost deals due to slow response times",
      "No way to track marketing ROI per listing",
    ],
    solutions: [
      { title: "Real Estate CRM with automated lead assignment", description: "Capture leads from every source and auto-assign them to the right agent — no lead goes cold." },
      { title: "Property listing portals with advanced search", description: "Let buyers filter by location, price, and amenities with map view and saved searches." },
      { title: "WhatsApp API integration for instant replies", description: "Auto-reply to inquiries and send property updates directly to buyer WhatsApp." },
      { title: "Marketing automation for new listings", description: "Notify potential buyers the moment a new property hits the market." },
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
      {
        question: "Can I import existing leads?",
        answer:
          "Yes, we support bulk import from Excel, Google Sheets, and most existing CRMs.",
      },
      {
        question: "Does it integrate with 99acres or MagicBricks?",
        answer:
          "Yes, we can set up automated lead capture from major property portals.",
      },
      {
        question: "Is the portal mobile-friendly?",
        answer:
          "Every portal we build is fully responsive and works flawlessly on mobile devices.",
      },
    ],
    caseStudy: {
      client: "Prime Realty",
      result: "2.5x",
      metric: "Faster Closings",
      description: "Deployed a custom real estate CRM that streamlined the entire sales pipeline.",
      slug: "prime-realty",
    },
  },
  {
    slug: "schools-education",
    name: "Schools & Education",
    tagline: "Digitize Your Campus Operations",
    description: "Admissions, fee collection, attendance, and parent communication — all in one system.",
    icon: "GraduationCap",
    images: [
      "/images/industries/education-1.jpg",
      "/images/industries/education-2.jpg",
      "/images/industries/education-3.jpg",
    ],
    painPoints: [
      "Admission process is paperwork-heavy and slow",
      "Fee collection and receipt tracking is chaotic",
      "Parent communication is fragmented",
      "Student records are scattered across files",
      "Attendance tracking is manual and error-prone",
      "No centralized dashboard for administrators",
    ],
    solutions: [
      { title: "Online admission forms with automated workflows", description: "Parents apply online, documents are verified digitally, and status updates are automatic." },
      { title: "Fee management with payment gateway integration", description: "Collect fees online via Razorpay or Stripe with automatic receipt generation and reminders." },
      { title: "Parent mobile app for announcements and results", description: "Push notifications for announcements, instant result access, and two-way communication." },
      { title: "Centralized student database with attendance tracking", description: "One record per student — attendance, grades, behavior, and fees all in one place." },
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Social Media Management",
      "SEO",
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
      {
        question: "Can teachers mark attendance on mobile?",
        answer:
          "Yes, teachers can mark attendance via web or mobile app with just a few taps.",
      },
      {
        question: "Is student data secure?",
        answer:
          "All data is encrypted at rest and in transit with role-based access controls.",
      },
      {
        question: "Can we send bulk SMS to parents?",
        answer:
          "Yes, we integrate with SMS gateways for fee reminders, announcements, and emergency alerts.",
      },
    ],
    caseStudy: {
      client: "EduPro Academy",
      result: "3x",
      metric: "Lead Generation",
      description: "Redesigned their digital presence and implemented a custom CRM that tripled qualified leads in 6 months.",
      slug: "edupro-academy",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Streamline Patient Care and Hospital Operations",
    description: "Online appointments, patient records, billing, and digital prescriptions.",
    icon: "Heart",
    images: [
      "/images/industries/healthcare-1.jpg",
      "/images/industries/healthcare-2.jpg",
      "/images/industries/healthcare-3.jpg",
    ],
    painPoints: [
      "Patient appointment scheduling is disorganized",
      "Medical records are difficult to access and share",
      "Billing and insurance claims are error-prone",
      "No digital presence for online bookings",
      "Long patient wait times hurt reputation",
      "Prescription refills require in-person visits",
    ],
    solutions: [
      { title: "Online appointment booking with doctor availability", description: "Patients book 24/7, see real-time doctor schedules, and receive confirmation via WhatsApp." },
      { title: "Electronic health records with role-based access", description: "Doctors, nurses, and admins see only what they need — fully secure and compliant." },
      { title: "Automated billing and insurance claim workflows", description: "Generate invoices automatically and track insurance claim status in real time." },
      { title: "Patient portal for reports and prescriptions", description: "Patients download lab reports and prescriptions anytime from their personal dashboard." },
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Digital Marketing",
      "SEO",
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
      {
        question: "Can patients reschedule appointments online?",
        answer:
          "Yes, patients can reschedule or cancel through the portal or app with automated notifications.",
      },
      {
        question: "Is there a pharmacy module?",
        answer:
          "Yes, we can add pharmacy inventory, prescription fulfillment, and digital medicine orders.",
      },
      {
        question: "Can we send lab reports digitally?",
        answer:
          "Lab reports are auto-uploaded to the patient portal with SMS and email notifications.",
      },
    ],
  },
  {
    slug: "fitness-gym",
    name: "Fitness & Gym",
    tagline: "Grow Your Gym with Smart Management",
    description: "Memberships, class bookings, trainer schedules, and payment tracking.",
    icon: "Dumbbell",
    images: [
      "/images/industries/fitness-1.jpg",
      "/images/industries/fitness-2.jpg",
      "/images/industries/fitness-3.jpg",
    ],
    painPoints: [
      "Membership renewals are tracked manually",
      "Class scheduling causes double-bookings",
      "Member engagement drops after the first month",
      "No way to track member progress digitally",
      "Payment collection is inconsistent and delayed",
      "No digital way to upsell personal training",
    ],
    solutions: [
      { title: "Automated membership renewals and reminders", description: "Members get renewal reminders via WhatsApp and email with one-click payment links." },
      { title: "Class booking system with capacity limits", description: "Members book classes online, trainers see their schedule, and caps prevent overcrowding." },
      { title: "Member app for schedules, payments, and progress", description: "A branded app where members track workouts, pay fees, and book sessions." },
      { title: "Marketing automation for re-engagement", description: "Win back inactive members with targeted offers and progress-based rewards." },
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Digital Marketing",
      "Social Media Management",
      "Web Design & Development",
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
      {
        question: "Can trainers manage their own schedules?",
        answer:
          "Trainers get a dedicated dashboard to set availability, view bookings, and track client progress.",
      },
      {
        question: "Does it support diet plan sharing?",
        answer:
          "Yes, trainers can upload personalized diet and workout plans directly to each member's profile.",
      },
      {
        question: "Is there a check-in kiosk feature?",
        answer:
          "We can integrate QR-based check-in kiosks or mobile check-in for seamless entry tracking.",
      },
    ],
    caseStudy: {
      client: "FitLife Gym",
      result: "150%",
      metric: "Membership Growth",
      description: "Built an integrated management system with automated renewals and lead tracking.",
      slug: "fitlife-gym",
    },
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    tagline: "Impress Clients with Professional Project Management",
    description: "Client approvals, vendor tracking, timelines, and digital mood boards.",
    icon: "Sofa",
    images: [
      "/images/industries/interior-1.jpg",
      "/images/industries/interior-2.jpg",
      "/images/industries/interior-3.jpg",
    ],
    painPoints: [
      "Client approvals are slow and disorganized",
      "Vendor and material tracking is manual",
      "Project timelines frequently slip",
      "No centralized place for mood boards and designs",
      "Material cost overruns are discovered too late",
      "Design revisions create version chaos",
    ],
    solutions: [
      { title: "Client portal for design approvals and feedback", description: "Clients review designs, leave comments, and approve with digital signatures — all in one place." },
      { title: "Vendor and material inventory tracking", description: "Track orders, deliveries, and payments for every vendor in real time." },
      { title: "Project timeline with milestone reminders", description: "Visual Gantt charts with automated reminders keep every project on schedule." },
      { title: "Digital mood board and 3D view sharing", description: "Share inspiration boards and 3D renders with clients before a single brick is laid." },
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "Social Media Management",
      "SEO",
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
      {
        question: "Can we generate quotations automatically?",
        answer:
          "Yes, the system auto-generates itemized quotations based on selected materials and labor costs.",
      },
      {
        question: "Does it support 3D render uploads?",
        answer:
          "Clients can view high-resolution 3D renders and walkthroughs directly in their portal.",
      },
      {
        question: "Is there a payment milestone tracker?",
        answer:
          "Yes, you can set payment milestones tied to project phases with automated invoice generation.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    tagline: "Boost Online Sales with a High-Converting Store",
    description: "Conversion-optimized storefronts with inventory sync and abandoned cart recovery.",
    icon: "ShoppingBag",
    images: [
      "/images/industries/retail-1.jpg",
      "/images/industries/retail-2.jpg",
      "/images/industries/retail-3.jpg",
    ],
    painPoints: [
      "Cart abandonment rates are high",
      "Product catalog management is time-consuming",
      "No integration between online and offline inventory",
      "Customer retention is weak",
      "Returns and exchanges are poorly tracked",
      "No unified customer view across channels",
    ],
    solutions: [
      { title: "Conversion-optimized e-commerce storefront", description: "Built with Next.js for speed, SEO, and mobile-first shopping experiences that convert." },
      { title: "Automated inventory sync across channels", description: "Online store, POS, and warehouse inventory stay in sync automatically — no overselling." },
      { title: "Abandoned cart recovery via email and WhatsApp", description: "Recover up to 15% of lost sales with automated personalized follow-up messages." },
      { title: "Loyalty program and referral system", description: "Turn one-time buyers into repeat customers with points, rewards, and referral bonuses." },
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
      {
        question: "Can customers track order status?",
        answer:
          "Yes, customers get real-time order tracking via SMS, email, and a branded tracking page.",
      },
      {
        question: "Do you handle return and refund workflows?",
        answer:
          "Yes, we build automated return request portals with refund tracking and exchange options.",
      },
      {
        question: "Is multi-currency supported?",
        answer:
          "Yes, we can configure multi-currency checkout with real-time exchange rates and local payment methods.",
      },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Digital Transformation for Modern Enterprises",
    description: "Internal portals, approval workflows, employee self-service, and executive dashboards.",
    icon: "Briefcase",
    images: [
      "/images/industries/corporate-1.jpg",
      "/images/industries/corporate-2.jpg",
      "/images/industries/corporate-3.jpg",
    ],
    painPoints: [
      "Internal processes are slow and paper-based",
      "Employee onboarding is inconsistent",
      "Department silos prevent collaboration",
      "No real-time visibility into operations",
      "Lack of centralized data across departments",
      "Manual reporting takes hours every week",
    ],
    solutions: [
      { title: "Custom internal portals and dashboards", description: "Built to your workflow — role-based access, live data, zero spreadsheets." },
      { title: "Automated approval workflows", description: "Route requests to the right approver automatically with escalation and audit trails." },
      { title: "Employee self-service portals", description: "Let employees access payslips, request leaves, and update profiles without HR intervention." },
      { title: "Data analytics and executive reporting", description: "Real-time dashboards that show what matters — revenue, efficiency, and team performance." },
    ],
    relevantServices: [
      "CRM & Custom Portals",
      "Web Design & Development",
      "SEO",
      "Digital Marketing",
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
      {
        question: "How long does implementation take?",
        answer:
          "Most corporate projects are delivered within 6–12 weeks depending on complexity. We provide a detailed timeline after the discovery call.",
      },
      {
        question: "Do you provide training for our team?",
        answer:
          "Yes. Every project includes a handover session and documentation. We also offer ongoing support retainers for larger teams.",
      },
      {
        question: "Can you build on top of our existing software?",
        answer:
          "Absolutely. We frequently extend or integrate with existing tools rather than replacing them, depending on what makes the most sense for your operations.",
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
