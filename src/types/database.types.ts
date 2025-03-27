export type ContactSubmission = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  interest: string;
  created_at: string;
};

export type NewsletterSubscriber = {
  id: number;
  email: string;
  created_at: string;
};

export type LeadSubmission = {
  id: number;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  leadGoal: string;
  created_at: string;
};

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
  created_at: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  title: string;
  quote: string;
  category: string;
  created_at: string;
};

export interface Database {
  contact_submissions: ContactSubmission[];
  newsletter_subscribers: NewsletterSubscriber[];
  lead_submissions: LeadSubmission[];
  blog_posts: BlogPost[];
  testimonials: Testimonial[];
} 