# Starter.diy - Elite Next.js SaaS Starter Kit

A modern, production-ready SaaS starter template for building full-stack applications using Next.js 15, Convex, Clerk, and Clerk Billing. The easiest way to start accepting payments with beautiful UI and seamless integrations.

## Features

- 🚀 **Next.js 15 with App Router** - Latest React framework with server components
- ⚡️ **Turbopack** - Ultra-fast development with hot module replacement
- 🎨 **TailwindCSS v4** - Modern utility-first CSS with custom design system
- 🔐 **Clerk Authentication** - Complete user management with social logins
- 💳 **Clerk Billing** - Integrated subscription management and payments
- 🗄️ **Convex Real-time Database** - Serverless backend with real-time sync
- 🛡️ **Protected Routes** - Authentication-based route protection
- 💰 **Payment Gating** - Subscription-based content access
- 🎭 **Beautiful 404 Page** - Custom animated error page
- 🌗 **Dark/Light Theme** - System-aware theme switching
- 📱 **Responsive Design** - Mobile-first approach with modern layouts
- ✨ **Custom Animations** - React Bits and Framer Motion effects
- 🧩 **shadcn/ui Components** - Modern component library with Radix UI
- 📊 **Interactive Dashboard** - Complete admin interface with charts
- 🎯 **Webhook Integration** - Automated user and payment sync
- 🚢 **Vercel Ready** - One-click deployment

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **Lucide React & Tabler Icons** - Beautiful icon libraries
- **Recharts** - Data visualization components
- **React Bits** - Custom animation components

### Backend & Services
- **Convex** - Real-time database and serverless functions
- **Clerk** - Authentication and user management
- **Clerk Billing** - Subscription billing and payments
- **Svix** - Webhook handling and validation

### Development & Deployment
- **TypeScript** - Type safety throughout
- **Vercel** - Deployment platform
- **Turbopack** - Fast build tool

## Getting Started

### Prerequisites

- Node.js 18+ 
- Clerk account for authentication and billing
- Convex account for database

### Installation

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/artem-lazarev/starter-diy.git
cd starter-diy
npm install
```

2. Set up your environment variables:

```bash
cp .env.example .env.local
```

3. Configure your environment variables in `.env.local`:

```bash
# Convex Configuration
CONVEX_DEPLOYMENT=your_convex_deployment_here
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here

# Clerk Authentication & Billing
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk Frontend API URL
NEXT_PUBLIC_CLERK_FRONTEND_API_URL=https://your-clerk-frontend-api-url.clerk.accounts.dev
```

4. Set up Convex environment variables in your Convex dashboard:

```bash
# In Convex Dashboard Environment Variables
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here
NEXT_PUBLIC_CLERK_FRONTEND_API_URL=https://your-clerk-frontend-api-url.clerk.accounts.dev
```

5. Initialize Convex:

```bash
npx convex dev
```

6. Set up Clerk webhooks:
   - In your Clerk dashboard, configure webhook endpoint: `{your_domain}/api/convex/clerk-users-webhook`
   - Enable events: `user.created`, `user.updated`, `user.deleted`, `paymentAttempt.updated`
   - The webhook secret is already configured in your Convex environment variables

7. Configure Clerk Billing:
   - Set up your pricing plans in Clerk dashboard
   - Configure payment methods and billing settings

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Architecture

### Key Routes
- `/` - Beautiful landing page with pricing
- `/dashboard` - Protected user dashboard
- `/dashboard/payment-gated` - Subscription-protected content
- `/api/convex/clerk-users-webhook` - Clerk webhook handler

### Authentication Flow
- Seamless sign-up/sign-in with Clerk
- Automatic user sync to Convex database
- Protected routes with middleware
- Social login support

### Payment Flow
- Custom Clerk pricing table component
- Subscription-based access control
- Real-time payment status updates
- Webhook-driven payment tracking

### Database Schema
```typescript
// Users table
users: {
  name: string,
  externalId: string // Clerk user ID
}

// Payment attempts tracking
paymentAttempts: {
  payment_id: string,
  userId: Id<"users">,
  payer: { user_id: string },
  // ... additional payment data
}
```

## Project Structure

```
├── app/
│   ├── (landing)/          # Landing page components
│   │   ├── hero-section.tsx
│   │   ├── features-one.tsx
│   │   ├── pricing.tsx
│   │   └── ...
│   ├── dashboard/          # Protected dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── payment-gated/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── custom-clerk-pricing.tsx
│   ├── theme-provider.tsx
│   └── ...
├── convex/                 # Backend functions
│   ├── schema.ts           # Database schema
│   ├── users.ts            # User management
│   ├── paymentAttempts.ts  # Payment tracking
│   └── http.ts             # Webhook handlers
├── lib/
│   └── utils.ts            # Utility functions
└── middleware.ts           # Route protection
```

## Key Components

### Landing Page
- **Hero Section** - Animated hero with CTAs
- **Features Section** - Interactive feature showcase
- **Pricing Table** - Custom Clerk billing integration
- **Testimonials** - Social proof section
- **FAQ Section** - Common questions
- **Footer** - Links and information

### Dashboard
- **Sidebar Navigation** - Collapsible sidebar with user menu
- **Interactive Charts** - Data visualization with Recharts
- **Data Tables** - Sortable and filterable tables
- **Payment Gating** - Subscription-based access control

### Animations & Effects
- **Splash Cursor** - Interactive cursor effects
- **Animated Lists** - Smooth list animations
- **Progressive Blur** - Modern blur effects
- **Infinite Slider** - Continuous scrolling elements

## Environment Variables

### Required for .env.local

- `CONVEX_DEPLOYMENT` - Your Convex deployment URL
- `NEXT_PUBLIC_CONVEX_URL` - Your Convex client URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key
- `NEXT_PUBLIC_CLERK_FRONTEND_API_URL` - Clerk frontend API URL

### Required for Convex Dashboard

- `CLERK_WEBHOOK_SECRET` - Clerk webhook secret (set in Convex dashboard)
- `NEXT_PUBLIC_CLERK_FRONTEND_API_URL` - Clerk frontend API URL (set in Convex dashboard)

## Deployment

### Vercel Deployment (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The project is optimized for Vercel with:
- Automatic builds with Turbopack
- Environment variable management
- Edge function support

### Manual Deployment

Build for production:

```bash
npm run build
npm start
```

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update TailwindCSS configuration
- Customize component themes in `components/ui/`

### Branding
- Update logo in `components/logo.tsx`
- Modify metadata in `app/layout.tsx`
- Customize color scheme in CSS variables

### Features
- Add new dashboard pages in `app/dashboard/`
- Extend database schema in `convex/schema.ts`
- Create custom components in `components/`

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Why Starter.diy?

**THE EASIEST TO SET UP. EASIEST IN TERMS OF CODE.**

- ✅ **Clerk + Convex + Clerk Billing** make it incredibly simple
- ✅ **No complex payment integrations** - Clerk handles everything
- ✅ **Real-time user sync** - Webhooks work out of the box
- ✅ **Beautiful UI** - Tailark.com inspired landing page blocks
- ✅ **Production ready** - Authentication, payments, and database included
- ✅ **Type safe** - Full TypeScript support throughout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Stop rebuilding the same foundation over and over.** Starter.diy eliminates weeks of integration work by providing a complete, production-ready SaaS template with authentication, payments, and real-time data working seamlessly out of the box.

Built with ❤️ using Next.js 15, Convex, Clerk, and modern web technologies.
