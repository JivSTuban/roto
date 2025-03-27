-- This file contains the SQL schema for the Supabase database
-- Execute these commands in the Supabase SQL editor to set up your tables

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lead form submissions
CREATE TABLE IF NOT EXISTS lead_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  businessType TEXT NOT NULL,
  leadGoal TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  readTime TEXT NOT NULL,
  image TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image TEXT NOT NULL,
  rating INTEGER NOT NULL,
  title TEXT NOT NULL,
  quote TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sample data for blog posts
INSERT INTO blog_posts (title, description, date, category, author, readTime, image, slug, content)
VALUES 
  (
    'How AI Transforms Real Estate Lead Generation',
    'Learn how artificial intelligence is revolutionizing the way realtors find and qualify leads, saving time and increasing conversion rates.',
    'March 15, 2023',
    'Lead Generation',
    'Jessica Miller',
    '5 min read',
    '/images/blog-1.jpg',
    'how-ai-transforms-lead-generation',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  (
    'The Future of Customer Service: AI Automation',
    'Discover how businesses are leveraging AI to provide 24/7 customer service without increasing team size or sacrificing quality.',
    'April 3, 2023',
    'Customer Service',
    'Michael Chen',
    '7 min read',
    '/images/blog-2.jpg',
    'future-customer-service-ai-automation',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  (
    'Email Marketing: How AI Personalizes at Scale',
    'Explore the ways AI is transforming email marketing by creating truly personalized experiences for each recipient, leading to higher conversion rates.',
    'May 18, 2023',
    'Marketing',
    'Amanda Foster',
    '6 min read',
    '/images/blog-3.jpg',
    'email-marketing-ai-personalization',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  (
    'Running Your Business on Autopilot with Workflow Automation',
    'Learn how to streamline your business operations with AI-powered workflow automation, allowing you to focus on growth rather than repetitive tasks.',
    'June 22, 2023',
    'Workflow',
    'Robert Hamilton',
    '8 min read',
    '/images/blog-4.jpg',
    'business-autopilot-workflow-automation',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  (
    'The Ethics of AI in Business: Balancing Automation and Human Touch',
    'A deep dive into the ethical considerations of implementing AI in your business operations, and how to maintain the human element that customers value.',
    'July 10, 2023',
    'Business Strategy',
    'Sarah Johnson',
    '10 min read',
    '/images/blog-5.jpg',
    'ethics-ai-business-human-touch',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  (
    'Case Study: How a Realtor Doubled Closings with AI',
    'Read the success story of a realtor who implemented AI-powered lead generation and conversion tools, resulting in twice the number of closings in half the time.',
    'August 5, 2023',
    'Case Study',
    'Jennifer Lee',
    '7 min read',
    '/images/blog-6.jpg',
    'case-study-realtor-doubled-closings',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

-- Sample data for testimonials
INSERT INTO testimonials (name, role, image, rating, title, quote, category)
VALUES 
  (
    'Sarah Johnson',
    'Realtor, Century 21',
    '/images/testimonial-1.jpg',
    5,
    'Lead generation game-changer',
    'roto''s AI saved me 20 hours a week and doubled my closings. The lead generation and automated follow-ups allow me to focus on what I do best - closing deals. It''s like having a full-time assistant working 24/7.',
    'realtor'
  ),
  (
    'Michael Rodriguez',
    'Independent Realtor',
    '/images/testimonial-2.jpg',
    5,
    'AI cold calling that works',
    'I was skeptical about AI cold calling, but the results speak for themselves. The system not only identifies potential sellers but also pre-qualifies them before they reach me. I''ve tripled my lead conversion rate since using roto.',
    'realtor'
  ),
  (
    'Jennifer Lee',
    'Keller Williams Realty',
    '/images/testimonial-3.jpg',
    5,
    'Running my business on autopilot',
    'I recently took a two-week vacation and came back to find four deals ready to close, all generated by roto while I was away. The system truly allows my business to run on autopilot. It''s worth every penny.',
    'realtor'
  ),
  (
    'David Chen',
    'CEO, TechSolve Inc.',
    '/images/testimonial-4.jpg',
    5,
    'Customer service transformation',
    'roto''s customer service automation has transformed our business. We now offer 24/7 support without increasing our team size. Customer satisfaction scores are up 45% and our team can focus on complex issues while the AI handles routine inquiries.',
    'business'
  ),
  (
    'Amanda Foster',
    'Marketing Director, GrowFast',
    '/images/testimonial-5.jpg',
    5,
    'Email marketing on another level',
    'roto''s email marketing automation has increased our open rates by 62% and conversion rates by 38%. The AI personalizes each email based on user behavior, creating a truly unique experience for each recipient. Best investment we''ve made.',
    'business'
  ),
  (
    'Robert Hamilton',
    'Operations Manager, LogisticsPro',
    '/images/testimonial-6.jpg',
    5,
    'Workflow automation excellence',
    'We implemented roto''s workflow automation solution and saw an immediate 40% reduction in processing time. The custom integration with our existing systems was seamless, and the scalable infrastructure easily handles our growing business needs.',
    'business'
  ); 