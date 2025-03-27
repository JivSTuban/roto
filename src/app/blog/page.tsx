"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogPosts, subscribeToNewsletter } from "@/lib/api";

export default function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How AI Transforms Real Estate Lead Generation",
      description:
        "Learn how artificial intelligence is revolutionizing the way realtors find and qualify leads, saving time and increasing conversion rates.",
      date: "March 15, 2023",
      category: "Lead Generation",
      author: "Jessica Miller",
      readTime: "5 min read",
      image: "/images/blog-1.jpg",
      slug: "how-ai-transforms-lead-generation",
    },
    {
      id: 2,
      title: "The Future of Customer Service: AI Automation",
      description:
        "Discover how businesses are leveraging AI to provide 24/7 customer service without increasing team size or sacrificing quality.",
      date: "April 3, 2023",
      category: "Customer Service",
      author: "Michael Chen",
      readTime: "7 min read",
      image: "/images/blog-2.jpg",
      slug: "future-customer-service-ai-automation",
    },
    {
      id: 3,
      title: "Email Marketing: How AI Personalizes at Scale",
      description:
        "Explore the ways AI is transforming email marketing by creating truly personalized experiences for each recipient, leading to higher conversion rates.",
      date: "May 18, 2023",
      category: "Marketing",
      author: "Amanda Foster",
      readTime: "6 min read",
      image: "/images/blog-3.jpg",
      slug: "email-marketing-ai-personalization",
    },
    {
      id: 4,
      title: "Running Your Business on Autopilot with Workflow Automation",
      description:
        "Learn how to streamline your business operations with AI-powered workflow automation, allowing you to focus on growth rather than repetitive tasks.",
      date: "June 22, 2023",
      category: "Workflow",
      author: "Robert Hamilton",
      readTime: "8 min read",
      image: "/images/blog-4.jpg",
      slug: "business-autopilot-workflow-automation",
    },
    {
      id: 5,
      title: "The Ethics of AI in Business: Balancing Automation and Human Touch",
      description:
        "A deep dive into the ethical considerations of implementing AI in your business operations, and how to maintain the human element that customers value.",
      date: "July 10, 2023",
      category: "Business Strategy",
      author: "Sarah Johnson",
      readTime: "10 min read",
      image: "/images/blog-5.jpg",
      slug: "ethics-ai-business-human-touch",
    },
    {
      id: 6,
      title: "Case Study: How a Realtor Doubled Closings with AI",
      description:
        "Read the success story of a realtor who implemented AI-powered lead generation and conversion tools, resulting in twice the number of closings in half the time.",
      date: "August 5, 2023",
      category: "Case Study",
      author: "Jennifer Lee",
      readTime: "7 min read",
      image: "/images/blog-6.jpg",
      slug: "case-study-realtor-doubled-closings",
    },
  ]);
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await getBlogPosts();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setPosts(result.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscribeError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    setSubscribeError("");
    
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setSubscribeSuccess(true);
        setEmail("");
      } else {
        setSubscribeError("Unable to subscribe at this time. Please try again later.");
      }
    } catch (error) {
      setSubscribeError("An error occurred. Please try again later.");
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog & Resources</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re excited to share our latest insights and updates with you.
          </p>
        </div>
        
        {loading ? (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <div className="aspect-[16/9] w-full bg-gray-100 rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2]">
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded-2xl">
                      <span className="text-gray-500">{post.title} Image</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-500">{post.author.charAt(0)}</span>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span>
                          {post.author}
                        </span>
                      </p>
                      <p className="text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter subscription */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay updated on AI trends
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Subscribe to our newsletter for the latest insights on AI automation, lead generation, and business optimization.
            </p>
            
            {subscribeSuccess ? (
              <div className="mx-auto mt-10 max-w-md text-white">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-3 text-lg">Thanks for subscribing!</p>
                <p className="mt-1 text-sm text-gray-300">We&apos;ll send updates to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mx-auto mt-10 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-gray-300"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
            
            {subscribeError && (
              <p className="mt-2 text-sm text-red-300">{subscribeError}</p>
            )}
            
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 