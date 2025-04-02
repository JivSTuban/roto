'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Pricing() {
  // Handle hash fragment scrolling with offset when navigating from another page
  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== 'undefined' && window.location.hash) {
      // Get the element with that id
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop - 130, // Same offset as in ScrollLink
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Realtor Pricing Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Investor  Package</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A complete solution to automate your lead pipeline and deliver qualified clients. Pay only for qualified leads.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-auto lg:flex lg:max-w-none">
            <div id="all-in-one" className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">All-in-One Solution</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our comprehensive package includes lead generation, skip tracing, and lead conversion services to automate your entire sales pipeline.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What&apos;s included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  AI Lead Generation
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Skip Tracing
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Professional Cold Calling
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Email Marketing
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  SMS Campaigns
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Lead Dashboard
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                <p className="mt-1 text-md font-semibold text-indigo-600">
                    Free trial for first 5 costumers!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl font-bold tracking-tight text-gray-500 relative inline-block">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="ml-6 h-[5px] w-[100%] bg-red-600 absolute transform rotate-[40deg] -translate-y-[px] shadow-sm"></span>
                      </span>
                      $99
                    </span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900 relative inline-block">
                      $0
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">per qualified lead</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold text-green-600">
                    - 5 free prequalified leads!
                  </p>
                  <p className="mt-1 text-sm font-semibold text-green-600">
                    - 100 free skip tracing!
                  </p>  
                
                  <p className="mt-3 text-xs leading-5 text-gray-600">
                  <strong className="font-semibold  text-gray-800">No monthly fees</strong>. No minimum commitment. Cancel anytime.
                  </p>
                  <Link href="/contact" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Pricing Section */}
      <div id="business" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Business Solutions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI-powered automation and software solutions for businesses of all sizes. Start with a free trial, no credit card required.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2">
              <div className="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-12 bg-white hover:shadow-md transition-shadow duration-300 flex flex-col">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Automation</h3>
                <p className="mt-5 text-base leading-7 text-gray-600">AI automation solutions for customer service, email marketing, and workflows.</p>
                
                <div className="mt-6">
                  <p className="text-4xl font-bold tracking-tight text-gray-900">$0 <span className="text-lg font-semibold tracking-normal text-gray-600">setup fee</span></p>
                  <p className="mt-1 flex items-baseline gap-x-1">
                    <span className="text-xl font-medium tracking-tight text-gray-500 relative inline-block">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="ml-0.5 h-[2px] w-[110%] bg-red-500 absolute transform rotate-[15deg] -translate-y-[1px]"></span>
                      </span>
                      
                    </span>
                  </p>
                </div>

                <p className="mt-2 text-sm font-semibold text-green-600 flex items-center gap-x-1">
                  ✓ 10 days free trial
                  <span className="group relative">
                    <svg className="h-4 w-4 text-gray-500 cursor-help ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                    </svg>
                    <span className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 z-10 shadow-md">
                      Monthly plan starts after trial & agreement. No hidden fees.
                    </span>
                  </span>
                </p>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-600 flex-grow">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Customer service automation
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Email marketing automation
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Workflow automation
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    AI-powered chatbots
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Custom Zapier/Make/n8n integrations
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Data entry automation
                  </li>
                </ul>
                <Link href="/contact" className="mt-auto block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Start free trial
                </Link>
              </div>
              <div className="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-12 bg-white hover:shadow-md transition-shadow duration-300 flex flex-col">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Software Solutions</h3>
                <div className="mt-2 inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600 ring-1 ring-inset ring-indigo-500/10 w-fit">
                  Enterprise Ready
                </div>
                <p className="mt-5 text-base leading-7 text-gray-600">Custom software and integration solutions tailored to your business needs.</p>
                <p className="mt-8 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
                </p>
                <div className="mt-10 grid grid-cols-1 gap-6 text-sm leading-6 text-gray-600 flex-grow">
                  <div className="group relative">
                    {/* Header */}
                    <div className="flex items-center justify-between cursor-pointer bg-indigo-50/50 rounded-lg p-3 transition-all duration-300 hover:bg-indigo-50">
                      <h4 className="text-sm font-medium text-gray-900">Core Solutions</h4>
                      <svg className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {/* Dropdown Content */}
                    <ul className="absolute top-full left-0 z-10 mt-1 w-full space-y-2 rounded-md bg-white p-3 shadow-lg ring-1 ring-gray-900/5 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Custom AI solutions
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Integration services
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Scalable infrastructure
                      </li>
                    </ul>
                  </div>
                  
                  <div className="group relative">
                    {/* Header */}
                    <div className="flex items-center justify-between cursor-pointer bg-indigo-50/50 rounded-lg p-3 transition-all duration-300 hover:bg-indigo-50">
                      <h4 className="text-sm font-medium text-gray-900">Web & Mobile</h4>
                      <svg className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {/* Dropdown Content */}
                    <ul className="absolute top-full left-0 z-10 mt-1 w-full space-y-2 rounded-md bg-white p-3 shadow-lg ring-1 ring-gray-900/5 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Custom websites
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Mobile applications
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Progressive web apps
                      </li>
                    </ul>
                  </div>

                  <div className="group relative">
                    {/* Header */}
                    <div className="flex items-center justify-between cursor-pointer bg-indigo-50/50 rounded-lg p-3 transition-all duration-300 hover:bg-indigo-50">
                      <h4 className="text-sm font-medium text-gray-900">Browser & E-commerce</h4>
                      <svg className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {/* Dropdown Content */}
                    <ul className="absolute top-full left-0 z-10 mt-1 w-full space-y-2 rounded-md bg-white p-3 shadow-lg ring-1 ring-gray-900/5 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Chrome extensions
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        E-commerce solutions
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Browser automation tools
                      </li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-[1.02]">
                  Contact for quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Can&apos;t find the answer you&apos;re looking for? Contact our{' '}
                <Link href="/contact" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </Link>{' '}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">How does the pay-per-qualified-lead model work?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">You only pay when we deliver a qualified lead who is actively interested in selling their property. <strong className="font-semibold">No monthly fees</strong>, no setup costs, and no risk.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">What happens after the 10-day free trial?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">After your trial period ends, you can choose to continue with a paid subscription or cancel at any time. There&apos;s no automatic billing – we&apos;ll reach out to discuss your options before the trial ends.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Can I customize the automation solutions for my business?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Yes, all of our automation packages can be customized to meet your specific business needs. We&apos;ll work with you to ensure our solution integrates seamlessly with your existing processes.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">How does the cold calling service work?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Our professional team handles follow-up calls to qualified leads. While our emails and SMS are automated with AI, our cold calling is done by trained professionals who can effectively engage with potential clients and schedule appointments with you for serious prospects.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
