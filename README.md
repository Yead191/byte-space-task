# 🚀 ByteSpace — Modern E-Learning & Creator Platform

<div align="center">

![ByteSpace Hero Banner](https://res.cloudinary.com/dknmebeee/image/upload/v1790779433/Screenshot_2026-09-30_204329_gdcrrj.png)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**ByteSpace** is a high-performance e-learning platform and creator ecosystem built to connect lifelong learners with industry-leading creators. Designed with pixel-perfect fidelity, smooth animations, and a rich design system.

[Explore Demo](#-getting-started) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## 🌟 Key Features

### 🎓 1. Interactive Course Directory & Discovery
- **Dynamic Category Filtering**: Browse courses across Development, Design, Business, Marketing, IT, and more.
- **Responsive Course Cards**: Badge indicators for lesson counts, duration, comment stats, difficulty level, and avatar previews.
- **Comprehensive Course Details**: Syllabus accordion breakdown, instructor bio, overview metrics, and sticky enrollment sidebar.
- **Skeleton Loaders**: Polished skeleton loading states for enhanced perceived performance.

### 👩‍🏫 2. Creator Showcase & Profiles
- **Dedicated Creator Profiles**: View instructor bios, student counts, average ratings, active course count, and credentials.
- **Dual Routing**: Direct access via `/creator-profile` and `/creators`.
- **Creator Growth Section**: Two-row interactive narrative highlighting autonomy, community building, and course management.

### 🔐 3. Authentication & User Onboarding
- **Branded Auth Layout**: Dual-column layout on an authentic brand-blue background with a 96px translucent grid and 3D preview cards.
- **Functional Sign In (`/login`)**: Client-side form validation, mock session persistence, and social login connectors (Google & Facebook).
- **Functional Registration (`/register`)**: Seamless account creation flow with field validation and immediate routing.
- **Custom Sonner Notifications**: Custom-themed toasts with signature ByteSpace Royal Blue and Neon Lime badges.

### 🎨 4. Premium Design System
- **Curated Color Tokens**: Royal Blue (`#003BE2`), Neon Lime (`#D4FB20`), and subtle neutral accents.
- **Fluid Typography**: Custom dual-font system pairing **Poppins** for bold headings with **Satoshi** for clean body text.
- **Atmospheric Gradients**: Subtle 3-color ambient radial gradients (Lime, Lemon-Yellow, Lavender-Blue) on testimonials and hero sections.
- **Responsive Mobile Navigation**: Slide-out drawer with route-change detection and backdrop blur.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Full-stack React framework with server components and optimized routing |
| **React 19** | Component architecture and state management |
| **TypeScript 5** | Strict type safety and maintainable developer experience |
| **Tailwind CSS v4** | Utility-first styling with modern CSS variables |
| **Radix UI** | Accessible headless UI primitives (Accordion, Tabs, Dialog, Dropdown) |
| **Sonner** | Toast notification system customized for ByteSpace |
| **Lucide React** | Clean, consistent SVG iconography |
| **React Fast Marquee** | Infinite animated trusted logos ticker |

---

## 📁 Project Structure

```bash
byte-space-task/
├── public/
│   ├── assets/
│   │   ├── auth/           # 3D illustration cards for login/register
│   │   ├── courses/        # Course thumbnails & preview images
│   │   ├── creator/        # Instructor avatars & badges
│   │   └── home/           # Showcase graphics, boy/girl PNGs, 3D icons, testimonials
│   ├── favicon.ico
│   └── footer-full-logo.png
├── src/
│   ├── app/
│   │   ├── (auth)/         # Auth route group (login, register, auth layout)
│   │   ├── (website)/      # Public website pages (home, courses, creator-profile)
│   │   ├── globals.css     # Global theme variables & Tailwind v4 config
│   │   └── layout.tsx      # Root layout with font definitions & Sonner toaster
│   ├── components/
│   │   ├── features/       # Feature-specific modules (home, courses, etc.)
│   │   ├── layout/         # Reusable shell (Navbar, Footer)
│   │   └── ui/             # Radix primitives and custom Sonner component
│   ├── data/               # Static mocks (courses, testimonials, instructors)
│   └── types/              # Global TypeScript interfaces
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.18.0 or higher recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yead191/byte-space-task.git
   cd byte-space-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📄 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server |
| `npm run build` | Builds the production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint to check for code quality issues |

---

## 🔒 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
