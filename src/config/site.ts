export const siteConfig = {
  name: 'Barket',

  shortName: 'Barket',

  description:
    'Connect customers with trusted partners, products, and services through one powerful platform.',

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  apiUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:4000/api/v1',

  navigation: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Features',
      href: '/features',
    },
    {
      label: 'Partner',
      href: '/partner',
    },
    {
      label: 'Company',
      href: '/company',
    },
  ],

  links: {
    customerApp: process.env.NEXT_PUBLIC_CUSTOMER_APP_URL ?? 'http://localhost:3000',

    login: process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_URL ?? 'http://localhost:3000/login',

    register: process.env.NEXT_PUBLIC_CUSTOMER_REGISTER_URL ?? '/partner-onboarding',
  },
} as const;
