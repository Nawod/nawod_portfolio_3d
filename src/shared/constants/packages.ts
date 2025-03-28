export const CustomPackages = [
    {
        id:'starter',
        title: "Starter Package",
        description: "Ideal for small businesses and personal brands looking for a simple, modern static website.",
        price: 50000,
        features: [
            "Up to 5 pages (Home, About, Services, Contact, Portfolio)",
            "Static contents",
            "Fully responsive design",
            "Static site generation (SSG) for fast loading speeds",
            "Basic SEO optimization",
            "Contact form integration",
            "Social media links integration",
            "Free hosting for 6 months",
            "1 rounds of revisions",
        ],
        deliveryTime: "2 weeks",
        additionalCost : [
            {
                title : "Figma Design",
                cost : 10000,
            },
            {
                title : "Extra Page",
                cost : 5000,
            },
            {
                title : "Extra Content",
                cost : 500,
            },
        ]
    },
    {
        id:'business',
        title: "Business Package",
        description: "Ideal for growing businesses that need more functionality and performance optimization.",
        price: 120000,
        features: [
            "Up to 10 pages (Home, About, Services, Store, Blog, FAQ, etc.)",
            "Fully responsive design",
            "Server-side rendering (SSR), static site generation (SSG)",
            "Advanced SEO optimization",
            "Dashboard to manage products",
            "Custom contact forms and inquiry forms",
            "Google Analytics setup",
            "Free hosting for 1 year",
            "3 rounds of revisions",
        ],
        deliveryTime: "4 weeks",
        additionalCost : [
            {
                title : "Extra Page",
                cost : 5000,
            },
            {
                title : "Payment Gateway Integration",
                cost : 10000,
            },
        ]
    },
    {
        id:'enterprise',
        title: "Enterprise Package",
        description: "Ideal for established businesses or organizations that require a high-end, fully customized website with advanced features.",
        price: 350000,
        features: [
            "Unlimited pages (customizable structure)",
            "Fully responsive and custom design",
            "Advanced SEO and performance optimization",
            "Full e-commerce functionality (unlimited products, payment gateway integration)",
            "Custom CMS (Content Management System) using Payload, Strapi, or similar",
            "Advanced security features (firewall, malware protection)",
            "Integration with third-party tools (CRM, email marketing, etc.)",
            "Social media integration and live chat support",
            "Free SSL certificate and domain registration (1 year)",
            "Free hosting for 1 year",
            "Priority support for 6 months",
            "5 rounds of revisions",
        ],
        deliveryTime: "6+ weeks",
    },
];