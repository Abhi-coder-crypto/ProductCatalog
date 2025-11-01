# Forever Living Products Digital Catalogue

## Overview

This is a digital catalogue application for Forever Living Products, an e-commerce platform showcasing health and wellness products across multiple categories (Drinks, Bee Products, Nutritionals, Weight Management, Skincare, Personal Care, and Household items). The application provides a clean, modern interface with a yellow-white brand theme for browsing products with detailed information including features, benefits, ingredients, and usage instructions.

## Recent Updates (November 2025)

- **Yellow-White Theme**: Implemented brand colors throughout the website with yellow (#FFB81C) as primary color
- **Hero Banner**: Added Forever Living banner image to homepage
- **Search Functionality**: Fully functional search on all pages supporting product names and product IDs/hashcodes (#XXX format)
- **Mobile Responsive**: Optimized for all screen sizes with mobile-first design approach
- **Enhanced UI**: Updated category cards, product cards, and product detail pages with improved styling and hover effects

## User Preferences

Preferred communication style: Simple, everyday language.

**Database Preference**: ALWAYS USE MONGODB - Do not migrate to PostgreSQL. The MONGODB_URI is configured in secrets.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type safety and modern component patterns
- Wouter for lightweight client-side routing (alternative to React Router)
- Mobile-first responsive design approach

**State Management**
- TanStack Query (React Query) v5 for server state management and caching
- Query client configured with infinite stale time and disabled automatic refetching
- Custom query functions with 401 handling for authentication scenarios

**UI Component System**
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (yellow-white brand theme implemented)
- Typography system using Inter (body/UI) and Poppins (headings) from Google Fonts
- Responsive breakpoints: mobile-first with md (768px) and lg breakpoints

**Design Principles**
- Yellow-white brand theme (#FFB81C primary yellow, white backgrounds)
- Visual clarity through generous whitespace and structured grids
- 1-4 column responsive product grids (mobile to desktop)
- Hover and active state elevations for interactive elements
- Gradient backgrounds (white to amber-50) for depth
- Border accents in amber-200 for subtle visual separation

**Search Functionality**
- Global search in header (desktop and mobile)
- Search by product name (partial matching)
- Search by product ID (e.g., "715")
- Search by hashcode (e.g., "#715")
- Real-time filtering on category pages
- Direct navigation to product when exact match found

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Vite integration for development with HMR (Hot Module Replacement)
- Custom middleware for request logging and JSON body parsing
- Static file serving in production mode

**API Design**
- RESTful API endpoints under `/api` prefix
- Product endpoints: GET all products, GET by ID, GET by category
- Category endpoints: GET all categories, GET by ID
- CRUD operations with POST/PUT/DELETE support (for future admin features)

**Development Tools**
- Custom error overlay plugin for development
- Cartographer plugin for Replit integration
- Request/response logging with duration tracking

### Data Storage

**Database Strategy**
- **Database**: MongoDB with Mongoose ODM (DO NOT MIGRATE TO POSTGRESQL)
  - Product and Category schemas with timestamps
  - Unique ID constraints on both models
  - Lean queries for performance (returns plain JavaScript objects)
  - Connection via MONGODB_URI environment variable

**Data Validation**
- Zod schemas for runtime validation (insertProductSchema, insertCategorySchema)
- Shared types between frontend and backend via `@shared` path alias
- Type safety enforced through TypeScript interfaces (ProductType, CategoryType)

**Seeding & Initial Data**
- Seed script for populating initial categories and products
- Seven product categories with detailed descriptions
- Sample products with comprehensive metadata (features, benefits, ingredients, usage)

### External Dependencies

**UI & Styling**
- Radix UI component primitives (dialogs, dropdowns, tabs, etc.)
- Tailwind CSS with PostCSS for processing
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for className utilities
- Embla Carousel for image galleries
- Lucide React for icons

**Data Fetching & Forms**
- TanStack Query v5 for data fetching and caching
- React Hook Form with Hookform Resolvers for form validation
- Zod for schema validation and type inference

**Database & Backend**
- MongoDB via Mongoose (current implementation)
- Neon Database serverless driver (for potential PostgreSQL migration)
- Drizzle ORM with drizzle-zod for PostgreSQL support
- Connect-pg-simple for PostgreSQL session storage

**Development Environment**
- Vite for build tooling and development server
- esbuild for server bundling in production
- tsx for TypeScript execution in development
- Replit-specific plugins for development experience

**Utilities**
- date-fns for date manipulation
- nanoid for unique ID generation
- wouter for routing (lightweight alternative to React Router)