# UB Stack — Premium Freelance Portfolio

A production-ready, award-quality portfolio website built for a freelance Full Stack Developer & UI/UX Designer.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion, GSAP
- **3D**: React Three Fiber, Three.js, @react-three/drei
- **Smooth Scroll**: Lenis
- **Deployment**: Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, SEO
│   ├── page.tsx            # Main page
│   ├── globals.css         # Design system
│   ├── loading.tsx         # Loading state
│   └── not-found.tsx       # 404 page
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   ├── Process.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── three/              # 3D components
│   │   └── HeroScene.tsx
│   └── ui/                 # Reusable UI components
│       ├── Navbar.tsx
│       ├── CustomCursor.tsx
│       ├── ScrollProgress.tsx
│       ├── ParticleBackground.tsx
│       ├── MagneticButton.tsx
│       └── ...
├── hooks/                  # Custom hooks
│   ├── useMousePosition.ts
│   ├── useScrollDirection.ts
│   └── useSmoothScroll.ts
└── lib/
    └── animations.ts       # Shared animation variants
```

## Design Language

- **Theme**: Semi-minimalistic, dark mode, luxury aesthetic
- **Colors**: Matte Gold, Bronze, Copper accents on dark backgrounds
- **Typography**: Geist (body), Space Grotesk (headings)
- **Inspired by**: Apple, Linear, Vercel, Framer

## License

© 2026 UB Stack. All rights reserved.
