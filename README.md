# Akash Jasrotia — Cinematic Scrollytelling Portfolio

A bold, high-performance, responsive React portfolio built for Akash Jasrotia, a visionary Web Developer & Machine Learning Enthusiast. This project breaks away from generic card grids and standard layouts, employing cinematic GSAP ScrollTrigger animations, massive brutalist typography, and an intense, handcrafted monochromatic/neon aesthetic.

## Features

- **Built with Vite & React**: For lightning-fast module replacement and state-of-the-art building.
- **GSAP ScrollTrigger**: Highly choreographed, cinematic scroll animations (pinned horizontal scrolling, staggered reveals, clip-path entries).
- **Framer Motion**: Smooth component-level micro-interactions.
- **Tailwind CSS V3**: Customized entirely for a raw, dark aesthetic with electric lime accents and exotic typography (`Cabinet Grotesk` & `Satoshi`).
- **Dynamic Scrollytelling**: Each section (Hero, About, Arsenal, Selected Works, Milestones, Academic Journey, and Contact) feels alive, responding intelligently to scroll.
- **Fully Responsive**: Carefully tuned for all devices.

---

## Prerequisites

Make sure you have Node.js and npm installed on your device.

## Installation & Setup

1. **Navigate to the Project Directory**
   \`\`\`bash
   cd portfolio
   \`\`\`

2. **Install Dependencies**
   Run the following command to install all necessary packages (GSAP, Framer Motion, Tailwind CSS, Lucide Icons, etc.):
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the Development Server**
   Start the Vite dev server to view the application in your browser:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for Production**
   When you're ready to deploy, run the build command. This will output minified, production-ready files into the \`dist\` directory:
   \`\`\`bash
   npm run build
   \`\`\`
   
   To preview the optimized production build locally:
   \`\`\`bash
   npm run preview
   \`\`\`

---

## File Structure

The workspace is organized logically around the React architectural principles:

- \`src/App.jsx\`: The main container wiring up all sections.
- \`src/index.css\`: Global styles, font imports, and custom Tailwind layers.
- \`src/components/\`: Contains isolated, interactive UI sections:
    - \`Navbar.jsx\`: Global floating navigation with smooth scrolling
    - \`Hero.jsx\`: Cinematic entry point
    - \`About.jsx\`: Scrubbed text-reveal about section
    - \`Skills.jsx\`: Arsenal list with massive hover interactions
    - \`Projects.jsx\`: Pinned horizontal scrolling showcase
    - \`Achievements.jsx\`: Split-screen layout for milestones
    - \`Education.jsx\`: Timeline for Academic Journey
    - \`Contact.jsx\`: Bold footer with direct reach-outs

## Customization

To tweak the theme colors or fonts, modify \`tailwind.config.js\` and edit the \`@layer base\` within \`src/index.css\`.

Enjoy crafting the web!
