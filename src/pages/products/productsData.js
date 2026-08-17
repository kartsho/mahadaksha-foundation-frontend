/**
 * ---------------------------------------------------------------------------
 * PLACEHOLDER PRODUCT DATA
 * Replace the `products` array inside each category with real product info
 * once available. `count` drives the badge shown on the category card/banner
 * — update it if the real product count differs from the placeholder list
 * length below.
 * ---------------------------------------------------------------------------
 */
const productsData = [
  {
    slug: "sales",
    name: "Sales",
    count: 10,
    tagline: "Help your sales team be more productive with tools they'd love.",
    products: [
      { name: "SalesHub", tag: "NEW", description: "Comprehensive CRM platform for customer-facing teams." },
      { name: "QuickDeal", description: "Lightweight CRM for small businesses moving from spreadsheets." },
      { name: "SignFlow", description: "Digital signature app for closing deals faster." },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    count: 16,
    tagline: "Engage prospects using multi-channel tools that personalize experiences at scale.",
    products: [
      { name: "Campaigns", description: "Create, send, and track targeted email campaigns that drive sales." },
      { name: "SocialReach", description: "All-in-one social media management software." },
      { name: "EventStage", description: "End-to-end event management software." },
    ],
  },
  {
    slug: "commerce-and-pos",
    name: "Commerce and POS",
    count: 3,
    tagline: "Manage in-person and online sales, streamline operations, and deliver memorable retail experiences.",
    products: [
      { name: "PointOne", tag: "NEW", description: "Modern retail POS to sell better and manage your entire business." },
      { name: "ShopEngine", description: "eCommerce platform to manage and market your online store." },
      { name: "NetConnect", tag: "Related", description: "A platform that connects sellers with popular consumer apps and networks." },
    ],
  },
  {
    slug: "service",
    name: "Service",
    count: 6,
    tagline: "Empower your customer and field service teams to deliver happiness and win trust.",
    products: [
      { name: "DeskPro", description: "Helpdesk software to deliver great customer support." },
      { name: "RemoteAssist", description: "Remote support and unattended remote access software." },
      { name: "ChatIQ", description: "Live chat app to engage and convert website visitors." },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    count: 15,
    tagline: "Keep track of expenses and manage back office operations smoothly.",
    products: [
      { name: "BooksPro", description: "Powerful accounting platform for growing businesses." },
      { name: "ExpenseTrack", description: "Effortless expense reporting platform." },
      { name: "PayRun", description: "Effortless payroll processing software for businesses." },
    ],
  },
  {
    slug: "erp",
    name: "ERP",
    count: 1,
    tagline: "Modern ERP for managing financials, supply chain, and more with contextual intelligence.",
    products: [
      { name: "ERP Core", tag: "NEW", description: "ERP software built for businesses to run faster and smarter operations." },
    ],
  },
  {
    slug: "email-storage-and-collaboration",
    name: "Email, Storage, and Collaboration",
    count: 21,
    tagline: "Create, collaborate, and communicate with your teams and customers.",
    products: [
      { name: "MailSecure", description: "Secure email service for teams of all sizes." },
      { name: "DriveSync", description: "Online file management for teams." },
      { name: "SignFlow", description: "Digital signature app for businesses." },
    ],
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    count: 8,
    tagline: "Simplify HR processes and build a better workplace experience.",
    products: [
      { name: "PeopleHub", description: "Core HR platform for onboarding, records, and workflows." },
      { name: "RecruitFlow", description: "Applicant tracking system for growing teams." },
      { name: "ShiftPlan", description: "Employee scheduling and attendance tracking." },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    count: 2,
    tagline: "Manage contracts and compliance without the paperwork headache.",
    products: [
      { name: "ContractDesk", description: "Contract lifecycle management for legal and business teams." },
      { name: "CompliTrack", description: "Track regulatory compliance across departments." },
    ],
  },
  {
    slug: "security-and-it-management",
    name: "Security and IT Management",
    count: 12,
    tagline: "Protect your infrastructure and manage IT operations from one place.",
    products: [
      { name: "SecureOps", description: "Unified endpoint and threat management console." },
      { name: "AccessGate", description: "Identity and access management for enterprise teams." },
      { name: "PatchWise", description: "Automated patch management for IT fleets." },
    ],
  },
  {
    slug: "manageengine-enterprise-solutions",
    name: "ManageEngine Enterprise Solutions",
    count: 16,
    tagline: "Enterprise-grade IT management tools for large-scale operations.",
    products: [
      { name: "FleetDesk", description: "IT asset and inventory management at scale." },
      { name: "NetWatch", description: "Network monitoring and performance analytics." },
      { name: "ServiceCore", description: "Enterprise service management platform." },
    ],
  },
  {
    slug: "bi-and-analytics",
    name: "BI and Analytics",
    count: 4,
    tagline: "Turn raw data into decisions with self-service analytics.",
    products: [
      { name: "InsightBoard", description: "Self-service BI and dashboarding platform." },
      { name: "DataPulse", description: "Real-time analytics for business metrics." },
      { name: "ReportForge", description: "Automated reporting across teams." },
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    count: 4,
    tagline: "Plan, track, and deliver projects without the chaos.",
    products: [
      { name: "TaskBoard", description: "Visual project and task management for teams." },
      { name: "SprintFlow", description: "Agile sprint planning and tracking." },
      { name: "TimeTrack", description: "Time tracking and billing for project teams." },
    ],
  },
  {
    slug: "developer-platforms",
    name: "Developer Platforms",
    count: 15,
    tagline: "Build, deploy, and scale applications faster.",
    products: [
      { name: "BuildStack", description: "Low-code app builder for internal tools." },
      { name: "APIForge", description: "API design, testing, and documentation platform." },
      { name: "DeployHub", description: "CI/CD pipeline management for dev teams." },
    ],
  },
  {
    slug: "iot",
    name: "IoT",
    count: 1,
    tagline: "Connect, monitor, and manage devices at scale.",
    products: [
      { name: "DeviceLink", tag: "NEW", description: "IoT device management and monitoring platform." },
    ],
  },
  {
    slug: "suites",
    name: "Suites",
    count: 7,
    tagline: "The perfect combination of apps to help with every aspect of your business.",
    products: [
      { name: "CRM Plus", description: "Unified platform to deliver top-notch customer experience." },
      { name: "Service Plus", description: "Unified platform for customer service and support teams." },
      { name: "Finance Plus", description: "All-in-one suite to manage your operations and finances." },
    ],
  },
];

export default productsData;