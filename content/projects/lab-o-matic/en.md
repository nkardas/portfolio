# Lab-O-Matic - Professional LIMS

## Overview

Web application for industrial laboratory management. Sample tracking, analysis planning and automated report generation. Freelance mission in production.

## Project Context

The project unfolded in two phases: a **2nd-year engineering internship** of 4 months in April 2025 to develop the MVP and establish technical foundations, then an **autonomous freelance mission** started in September 2025 to extend features, integrate external systems, and ensure production deployment.

### Responsibilities
- Requirements analysis and fullstack architecture design
- Complete backend (NestJS) and frontend (Next.js 15) development
- Integration with Firebase Auth and external services
- Production deployment and ongoing maintenance

## Technical Architecture

### Backend Stack
- **NestJS**: Enterprise Node.js framework with modular architecture
- **Prisma ORM**: PostgreSQL management with complete type-safety
- **Swagger/OpenAPI**: API documentation and automatic SDK generation
- **Firebase Admin**: Authentication and user management

### Frontend Stack
- **Next.js 15 + React 19**: SSR, Turbopack, modern optimizations
- **Tailwind CSS v4 + shadcn/ui**: Design system with Radix UI components
- **TanStack Query**: Intelligent cache and server synchronization
- **Zustand**: Lightweight and performant state management
- **React Hook Form + Zod**: Robust form validation

### Infrastructure
- **Docker**: Containerization for reproducible environments
- **Google Cloud Platform**: Hosting with automated CI/CD
- **Auto-generated SDK**: Complete type-safety frontend ↔ backend

## Main Features

### Laboratory Management
- Complete sample tracking with traceability
- Real-time analysis planning and assignment
- Automatic compliant PDF report generation
- Dashboards with operational KPIs and metrics
- Data export (Excel, CSV)

### User Experience
- Intuitive interface with dark/light mode
- Responsive design (desktop, tablet, mobile)
- Loading time < 2s thanks to SSR and code splitting
- Real-time notifications and progress indicators

### Security
- Firebase authentication with secure sessions
- Double validation (client + server) with Zod
- End-to-end type-safety (TypeScript)
- Unit and integration tests (Jest, NestJS Testing)

## Technical Challenges

**Scalable architecture**: Clear frontend/backend separation, DB query optimization and cache strategy with TanStack Query to maintain performance.

**Data synchronization**: Complex state management between client, server and DB with optimistic updates for reactive UI and intelligent concurrent conflict resolution.

**External integrations**: Firebase Authentication integrated into NestJS, transactional email system (Brevo) with fine-grained template and error management.

**Developer Experience**: Auto-generated SDK from OpenAPI, instant hot reload (Turbopack), strict tooling (ESLint, Prettier, TypeScript).

## Results & Impact

**Successful deployment**: Application in production used daily with high stability, active monitoring and optimal performance.

**Business value**: Manual process automation, complete traceability, compliant reports, scalable architecture.

**Professional experience**: First client project from design to deployment, autonomous management validated by internship → freelance transition, expertise on modern production-ready stack.

## Technologies Used

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Query, Zustand, React Hook Form, Zod

**Backend**: NestJS, Prisma ORM, PostgreSQL, Swagger/OpenAPI, Firebase Admin, Brevo

**DevOps**: Docker, Google Cloud Platform, CI/CD, Git, npm, ESLint, Prettier
