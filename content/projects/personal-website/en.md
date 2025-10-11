# nkardas.fr - Personal Portfolio

## Overview

Personal portfolio website showcasing my projects and professional background. Built with modern web technologies focusing on performance and user experience.

## Project Context

Creation of a modern portfolio website serving as a professional showcase. The goal was to design an intuitive platform to effectively present my work while exploring the latest web technologies, particularly Next.js 15 with Turbopack and Tailwind CSS v4.

### Responsibilities
- Complete website design and development
- Light/dark theme system integration
- FR/EN internationalization configuration
- Performance and SEO optimization
- Technical documentation

## Technical Architecture

### Frontend
The site uses Next.js 15 with App Router for server-side rendering and static page generation. The interface is built with React 19 and TypeScript to ensure code reliability. Tailwind CSS v4 handles styling with a consistent design system, while Framer Motion provides smooth animations.

### Internationalization
The application natively supports French and English through next-intl. The system automatically detects browser language and generates localized URLs for better SEO. All pages and components are translated, including error messages and SEO metadata.

### Design System
A complete theme system allows switching between light and dark modes with preference persistence. The design automatically adapts to all screen sizes with a mobile-first approach. Animated logos exist in two variants depending on usage context.

## Main Features

### Project Showcase
Complete project management system with Markdown support for detailed content. Each project has a dedicated page with images, multilingual descriptions and metadata. A category filtering system facilitates navigation between different project types.

### Contact Form
Functional form with client and server-side validation using React Hook Form and Zod. Email sending is handled by Resend API with dual notification: confirmation for visitor and alert for owner. Error messages are contextual and translated.

### Interactive CV Page
Complete curriculum vitae with sections for education, professional experience and technical skills. Integrated PDF download feature for easy sharing. Display adapts to different screen sizes.

## Technical Challenges

**Performant animations**: Advanced use of Framer Motion to create smooth animations without impacting performance. Optimization of page transitions and layout animations with scroll management.

**Tailwind CSS v4 beta**: Early adoption of Tailwind v4 with custom PostCSS configuration and native CSS variables support. Adaptation to syntax changes and compatibility issue resolution.

**Complete internationalization**: Translation management across the entire site with static generation of localized pages. next-intl middleware configuration for automatic routing.

## Results & Impact

**Operational professional site**: Fully functional portfolio effectively presenting projects and skills with intuitive navigation and modern design.

**Optimal performance**: Fast loading times thanks to static generation and automatic code splitting. Images optimized in WebP format with lazy loading.

**Polished user experience**: Responsive interface working on all devices with smooth animations and visual feedback for all interactions.

## Technologies Used

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion

**Internationalization**: next-intl with FR/EN support

**Forms**: React Hook Form, Zod, Resend API

**Infrastructure**: Vercel serverless, automatic deployment

**Documentation**: Docusaurus with Git versioning
