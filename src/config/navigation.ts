export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Creators",
    href: "/creators",
  },
];

export const footerNavItems = {
  quickLinks: [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    { title: "Pricing", href: "/pricing" },
    { title: "About Us", href: "/about" },
  ],
  aboutUs: [
    { title: "Our Story", href: "/story" },
    { title: "Instructors", href: "/instructors" },
    { title: "Careers", href: "/careers" },
    { title: "Press", href: "/press" },
  ],
  resources: [
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/faq" },
    { title: "Support", href: "/support" },
    { title: "Terms of Service", href: "/terms" },
  ],
};
