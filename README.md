# Roto - AI-Powered Solutions for Realtors and Businesses

Roto provides AI automation services for realtors and businesses, helping them streamline operations, generate qualified leads, and automate customer interactions.

## Technologies Used

- **Next.js 15** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend-as-a-Service with PostgreSQL database

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd roto
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Copy the `.env.local.example` file to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.local.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
/public           # Static assets
/src
  /app            # Next.js app router
    /(routes)     # Application routes
  /components     # Reusable UI components
  /lib            # Utility functions and API client
```

## Database Schema

### Tables

1. **contact_submissions**
   - firstName (text)
   - lastName (text)
   - email (text)
   - phone (text)
   - company (text)
   - message (text)
   - interest (text)
   - created_at (timestamp)

2. **newsletter_subscribers**
   - email (text)
   - created_at (timestamp)

3. **lead_submissions**
   - name (text)
   - email (text)
   - phone (text)
   - businessType (text)
   - leadGoal (text)
   - created_at (timestamp)

4. **blog_posts**
   - title (text)
   - description (text)
   - content (text)
   - date (text)
   - category (text)
   - author (text)
   - readTime (text)
   - image (text)
   - slug (text)
   - created_at (timestamp)

5. **testimonials**
   - name (text)
   - role (text)
   - image (text)
   - rating (integer)
   - title (text)
   - quote (text)
   - category (text)
   - created_at (timestamp)

## Features

- **Realtor Services**: Lead generation, skip tracing, professional follow-up calls
- **Business Solutions**: Customer service automation, workflow automation, email marketing automation
- **Client Dashboard**: Track leads and campaign performance
- **Responsive Design**: Works on mobile, tablet, and desktop

## Deployment

The application is set up for easy deployment to Vercel:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
