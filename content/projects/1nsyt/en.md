# 1NSYT - AI Chrome Extension for LinkedIn

## Overview

Chrome extension using artificial intelligence to analyze LinkedIn profiles. Complete application with admin dashboard.

## Project Context

Educational project developed to master the modern Chrome extension ecosystem and artificial intelligence integration. The goal was to create a complete application with admin dashboard, GDPR compliance and serverless architecture.

**⚠️ Note**: Educational project only, not intended for commercial use.

### Responsibilities
- Chrome extension design and development
- Backend API and caching system creation
- AI integration for content generation
- GDPR compliance implementation
- Admin dashboard development

## Main Features

### Chrome Extension
- Automatic LinkedIn profile detection
- Real-time personalized insights generation
- 4 analysis modes (networking, recruiting, job search, sales)
- Caching system for optimal performance
- Complete GDPR consent management

### Admin Dashboard
- Real-time statistics
- Usage charts
- User management
- Data export
- Cost analysis

## Technical Architecture

### Extension
- Chrome Manifest V3
- Intelligent profile detection
- Backend API communication
- Local storage for caching

### Backend
- Serverless API with Next.js 15
- PostgreSQL database
- Distributed Redis cache
- Mistral AI artificial intelligence
- Scheduled automated tasks

### Security and Compliance
- Explicit consent before collection
- Data access and deletion rights
- Personal data export
- Automatic purge after 1 year
- Detailed privacy policy

## Technical Challenges

**Serverless architecture**: Design of scalable infrastructure without dedicated servers, cost optimization and distributed cache management.

**GDPR compliance**: Complete data protection implementation with consent system, automatic exports and deletions.

**Cost optimization**: Two-level cache strategy reducing AI calls by over 70%.

**Chrome extension**: Compliance with strict security constraints imposed by Chrome.

## Results & Impact

**Functional application**: Operational extension with insight generation in under 2 seconds and cache rate over 70%.

**Technical skills**: Mastery of Chrome extensions, serverless architecture, AI integration and GDPR compliance.

**Complete documentation**: Over 30 pages of technical documentation covering architecture, APIs and user guides.

## Technologies Used

**Extension**: Chrome Manifest V3, JavaScript, Chrome APIs

**Backend**: Next.js 15, PostgreSQL, Redis, Mistral AI

**Interface**: Tailwind CSS, Recharts

**Infrastructure**: Vercel serverless, automatic deployment

**Documentation**: Docusaurus
