# 1NSYT - AI-Powered Chrome Extension for LinkedIn

## Overview

**1NSYT** (pronounced "One Insight") is an educational Chrome extension that generates **personalized AI insights** on LinkedIn profiles. The complete system combines web scraping, artificial intelligence (Mistral AI), distributed caching, and GDPR compliance with an admin dashboard.

## Context and Objectives

Personal project developed to explore the modern Chrome extension ecosystem (Manifest V3) while mastering a complete fullstack stack. The educational objective covers extension development, generative AI integration, serverless architecture, and exemplary GDPR compliance implementation.

**⚠️ Educational project only**: Not intended for commercial use, may violate LinkedIn's Terms of Service. Demonstration of technical skills and best practices (GDPR, documentation, architecture).

## Main Features

### Chrome Extension

**Smart detection**: Hover on LinkedIn profile → automatic scraping of public data (name, title, experience, skills) → real-time insights generation.

**Personalized AI generation**:
- 2-sentence summary of professional background
- 3 conversation starters adapted to context (4 modes: networking, recruiting, jobsearch, sales)
- Local cache (Chrome Storage) and remote (Redis) for optimal performance

**GDPR Compliance**:
- Explicit consent flow before any data collection
- Right to access, portability (JSON export), and erasure (account deletion)
- Automatic purge after 1 year
- Detailed privacy policy

### Backend API (Next.js 15)

**Serverless architecture** on Vercel with:
- PostgreSQL (Neon) + Prisma ORM for type-safe persistence
- Redis (Upstash) with 7-day TTL for distributed cache
- Mistral Small API (15x cheaper than GPT-4, ~$0.0003/insight, EU-based)
- Vercel Cron for automatic GDPR purge

### Admin Dashboard

**Real-time analytics**:
- Statistics (users, insights generated, AI costs, cache hit rate)
- Charts (insights/day, mode distribution, evolution)
- User management (search, filters, CSV export)
- Insights (complete list, detailed metadata, JSON/CSV export)
- Prompt analysis for model optimization

## Technical Architecture

### Extension (Manifest V3)

**Content Script** (`linkedin.js`): Detects hover on profiles, scrapes public data, communicates with service worker.

**Service Worker** (`background/service-worker.js`): Checks local cache, calls backend API if cache miss, stores results.

**Popup UI**: Displays insights with clean design, mode switcher, link to settings.

### Backend Stack

- **Next.js 15**: Serverless API Routes with strict TypeScript
- **Prisma**: Type-safe ORM with migrations, 3 tables (User, Insight, UserAnalytics)
- **PostgreSQL**: Serverless database (Neon) with pooling
- **Redis**: Distributed cache (Upstash) to minimize AI costs
- **Mistral Small**: EU-based generative AI (GDPR), $0.2/1M tokens in, $0.6/1M tokens out

### Infrastructure

**Vercel**: Automatic deployment, serverless functions, Cron jobs
**Neon**: Serverless PostgreSQL with auto-scaling
**Upstash**: Serverless Redis without infrastructure management

## Technologies Used

**Extension**: Vanilla JavaScript (Manifest V3), Chrome APIs (storage, scripting, tabs)
**Backend**: Next.js 15, TypeScript, Prisma ORM, PostgreSQL, Redis, Mistral AI API
**Admin UI**: Tailwind CSS v4, Recharts (visualizations), CSV/JSON export
**Documentation**: Docusaurus 3 (30+ pages)
**DevOps**: Vercel (CI/CD), Git, ESLint, Prettier

## Technical Challenges

**Manifest V3 & CSP**: Respect strict Content Security Policy constraints (no eval, limited inline scripts), use Vanilla JS to avoid build issues.

**Distributed caching**: Implement 2-level strategy (local Chrome Storage + remote Redis) to optimize latency and costs while managing invalidation.

**GDPR compliance**: Design complete system for consent management, exports, and deletions with DB cascade, automatic purge, and audit trail.

**Robust scraping**: Handle multiple LinkedIn profile layouts, avoid anti-bot detection, parse inconsistent data.

**AI cost optimization**: Achieve >70% cache hit rate, minimize tokens with optimized prompts, choose Mistral Small (15x cheaper than GPT-4).

## Results

✅ Functional extension with <2s insight generation
✅ >70% cache hit rate drastically reducing AI costs
✅ Complete GDPR compliance (consent, user rights, auto purge)
✅ Admin dashboard with detailed analytics and user management
✅ Exhaustive technical documentation (Docusaurus, 30+ pages)
✅ Scalable and maintainable serverless architecture

**Metrics**:
- ~3000+ lines of code
- 12 API endpoints
- 6 extension pages + 5 admin pages
- Average cost: $0.0003 per insight

## Skills Developed

- Chrome extension development (Manifest V3, Content Scripts, Service Workers)
- Fullstack serverless architecture (Next.js, Vercel, serverless functions)
- Generative AI integration (Mistral AI, prompt engineering, cost optimization)
- Database (PostgreSQL, Prisma ORM, migrations)
- Distributed caching (Redis, invalidation strategies)
- GDPR compliance (consent, user rights, data privacy)
- Admin dashboard (analytics, charts, user management)
- Technical documentation (Docusaurus, architecture, API reference)
- DevOps (Vercel CI/CD, Cron jobs, monitoring)
