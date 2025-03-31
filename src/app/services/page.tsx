"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Services() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!api) {
      return;
    }
    
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  const handlePrevious = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);
  
  const handleNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);
  
  const handleScrollTo = useCallback((index: number) => {
    if (api) api.scrollTo(index);
  }, [api]);
  
  return (
    <div className="bg-white">
      <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-8 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover how our innovative solutions can transform your business.
            </p>
          </div>
          
          <div className="relative mt-12">
            <div className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-20">
              <button 
                onClick={handlePrevious}
                className="hidden md:flex bg-white/90 hover:bg-indigo-50 border border-indigo-200 text-indigo-600 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-20">
              <button 
                onClick={handleNext}
                className="hidden md:flex bg-white/90 hover:bg-indigo-50 border border-indigo-200 text-indigo-600 w-12 h-12 lg:w-14 lg:h-14 rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-between px-4 absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <button 
                onClick={handlePrevious}
                className="pointer-events-auto bg-white/90 hover:bg-indigo-50 border border-indigo-200 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="pointer-events-auto bg-white/90 hover:bg-indigo-50 border border-indigo-200 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {/* Software Development Section */}
                <CarouselItem className="w-full">
                  <div id="software-development" className="bg-white py-12 sm:py-16 min-h-[800px] flex flex-col">
                    <div className="mx-auto max-w-7xl">
                      <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Software Development</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Custom software and web applications that transform your business operations and create seamless digital experiences for your customers.
                        </p>
                      </div>
                      
                      {/* Digital Transformation Infographic */}
                      <div className="mt-16 overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-md">
                        <div className="p-8">
                          <h3 className="text-xl font-semibold text-gray-900">How Software Powers Business Growth</h3>
                          
                          {/* Circular Infographic */}
                          <div className="mt-15 relative">
                            
                            {/* Outer Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                              {/* Benefit 1: Automation */}
                              <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center shadow-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Automation</h4>
                                <p className="mt-2 text-center text-sm text-gray-600">Eliminate manual tasks and reduce operational costs by up to 70%</p>
                                <div className="mt-4 bg-white/60 rounded-lg p-3">
                                  <ul className="text-xs text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Workflow automation</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Process standardization</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Error reduction</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              {/* Benefit 2: Customer Experience */}
                              <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center shadow-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Customer Experience</h4>
                                <p className="mt-2 text-center text-sm text-gray-600">Create seamless interactions that increase satisfaction and loyalty</p>
                                <div className="mt-4 bg-white/60 rounded-lg p-3">
                                  <ul className="text-xs text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Intuitive interfaces</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Self-service portals</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Mobile accessibility</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              {/* Benefit 3: Data Insights */}
                              <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center shadow-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                  </svg>
                                </div>
                                <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Data Insights</h4>
                                <p className="mt-2 text-center text-sm text-gray-600">Turn raw data into actionable business intelligence</p>
                                <div className="mt-4 bg-white/60 rounded-lg p-3">
                                  <ul className="text-xs text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Custom reporting</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Real-time analytics</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Predictive modeling</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              {/* Benefit 4: Scalability */}
                              <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center shadow-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Scalability</h4>
                                <p className="mt-2 text-center text-sm text-gray-600">Grow your business without growing your overhead</p>
                                <div className="mt-4 bg-white/60 rounded-lg p-3">
                                  <ul className="text-xs text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Cloud infrastructure</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Modular architecture</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2 text-indigo-600">✓</span>
                                      <span>Future-proof solutions</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
                              <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#818cf8" />
                                  <stop offset="100%" stopColor="#6366f1" />
                                </linearGradient>
                              </defs>
                              
                              {/* Desktop Connectors */}
                              <g className="hidden lg:block">
                                {/* Top Left Connection */}
                                <line x1="25%" y1="60px" x2="50%" y2="60px" stroke="url(#lineGradient)" strokeWidth="2" />
                                <line x1="25%" y1="60px" x2="25%" y2="40px" stroke="url(#lineGradient)" strokeWidth="2" />
                                
                                {/* Top Right Connection */}
                                <line x1="50%" y1="60px" x2="75%" y2="60px" stroke="url(#lineGradient)" strokeWidth="2" />
                                <line x1="75%" y1="60px" x2="75%" y2="40px" stroke="url(#lineGradient)" strokeWidth="2" />
                                
                                {/* Bottom Left Connection */}
                                <line x1="25%" y1="180px" x2="50%" y2="180px" stroke="url(#lineGradient)" strokeWidth="2" />
                                <line x1="25%" y1="180px" x2="25%" y2="200px" stroke="url(#lineGradient)" strokeWidth="2" />
                                
                                {/* Bottom Right Connection */}
                                <line x1="50%" y1="180px" x2="75%" y2="180px" stroke="url(#lineGradient)" strokeWidth="2" />
                                <line x1="75%" y1="180px" x2="75%" y2="200px" stroke="url(#lineGradient)" strokeWidth="2" />
                              </g>
                              
                              {/* Mobile Connectors */}
                              <g className="block lg:hidden">
                                <line x1="50%" y1="40px" x2="50%" y2="160px" stroke="url(#lineGradient)" strokeWidth="2" />
                              </g>
                            </svg>
                          </div>
                          
                          {/* Implementation Process */}
                          <div className="mt-20">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Our Development Process</h4>
                            
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                             
                              {/* Stage 1 */}
                              <div className="md:w-1/5 relative z-10 flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">1</div>
                                <h5 className="mt-3 text-sm font-medium text-gray-900 text-center">Discovery</h5>
                                <p className="mt-1 text-xs text-gray-600 text-center">Understanding your business needs and goals</p>
                              </div>
                              
                              {/* Stage 2 */}
                              <div className="md:w-1/5 relative z-10 flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">2</div>
                                <h5 className="mt-3 text-sm font-medium text-gray-900 text-center">Planning</h5>
                                <p className="mt-1 text-xs text-gray-600 text-center">Architecture and feature roadmap creation</p>
                              </div>
                              
                              {/* Stage 3 */}
                              <div className="md:w-1/5 relative z-10 flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">3</div>
                                <h5 className="mt-3 text-sm font-medium text-gray-900 text-center">Development</h5>
                                <p className="mt-1 text-xs text-gray-600 text-center">Agile implementation with regular updates</p>
                              </div>
                              
                              {/* Stage 4 */}
                              <div className="md:w-1/5 relative z-10 flex flex-col items-center mb-8 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">4</div>
                                <h5 className="mt-3 text-sm font-medium text-gray-900 text-center">Testing</h5>
                                <p className="mt-1 text-xs text-gray-600 text-center">Quality assurance and performance optimization</p>
                              </div>
                              
                              {/* Stage 5 */}
                              <div className="md:w-1/5 relative z-10 flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">5</div>
                                <h5 className="mt-3 text-sm font-medium text-gray-900 text-center">Launch & Support</h5>
                                <p className="mt-1 text-xs text-gray-600 text-center">Deployment and ongoing maintenance</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Success Metrics */}
                          <div className="mt-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 p-px shadow-lg">
                            <div className="rounded-xl bg-white p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Business Impact of Custom Software</h4>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 text-center">
                                  <div className="text-3xl font-bold text-indigo-600">73%</div>
                                  <div className="text-sm text-gray-600 mt-1">Increase in operational efficiency</div>
                                </div>
                                
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 text-center">
                                  <div className="text-3xl font-bold text-indigo-600">58%</div>
                                  <div className="text-sm text-gray-600 mt-1">Reduction in processing costs</div>
                                </div>
                                
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 text-center">
                                  <div className="text-3xl font-bold text-indigo-600">92%</div>
                                  <div className="text-sm text-gray-600 mt-1">Improved data accuracy</div>
                                </div>
                                
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 text-center">
                                  <div className="text-3xl font-bold text-indigo-600">2.7x</div>
                                  <div className="text-sm text-gray-600 mt-1">Faster decision making</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-12 text-center">
                        <Link href="/contact" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Schedule a Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
                {/* For Realtors Section */}
                <CarouselItem className="w-full">
                  <div id="realtor-services" className="bg-white py-12 sm:py-16 min-h-[800px] flex flex-col">
                    <div className="mx-auto max-w-7xl">
                      <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Realtors</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Our complete solution automates your lead pipeline and delivers qualified clients, so you can focus on closing deals.
                        </p>
                      </div>
                      
                      {/* Process Flow Diagram */}
                      <div className="relative mt-16 overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-md flex-grow flex flex-col">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                        <div className="p-8 flex-grow flex flex-col">
                          <h3 className="text-xl font-semibold text-gray-900">Your Lead Pipeline Visualization</h3>
                          
                          <div className="mt-8 flex flex-col items-center space-y-16 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:space-x-8 flex-grow">
                            {/* Step 1: Lead Generation */}
                            <div className="relative flex w-full max-w-xs flex-col items-center">
                              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                              </div>
                              <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Lead Generation</h4>
                              <div className="mt-2 h-20 text-center text-sm text-gray-600">AI algorithms find potential leads in target areas</div>
                              <div className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 shadow-sm">
                                <ul className="list-inside list-disc text-xs text-indigo-700">
                                  <li>Targeted zip search</li>
                                  <li>Owner identification</li>
                                  <li>Seller filtering</li>
                                </ul>
                              </div>
                              
                              {/* Right Arrow - visible only on large screens */}
                              <div className="absolute -right-12 top-10 hidden animate-pulse lg:block">
                                <svg className="h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                              
                              {/* Down Arrow - visible only on mobile */}
                              <div className="mt-8 block animate-bounce lg:hidden">
                                <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Step 2: Skip Tracing */}
                            <div className="relative flex w-full max-w-xs flex-col items-center">
                              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                              </div>
                              <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Skip Tracing</h4>
                              <div className="mt-2 h-20 text-center text-sm text-gray-600">Advanced contact discovery and verification for maximum reach rate</div>
                              <div className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 shadow-sm">
                                <ul className="list-inside list-disc text-xs text-indigo-700">
                                  <li>Phone numbers</li>
                                  <li>Email addresses</li>
                                  <li>Social profiles</li>
                                </ul>
                              </div>
                              
                              {/* Right Arrow - visible only on large screens */}
                              <div className="absolute -right-12 top-10 hidden animate-pulse lg:block">
                                <svg className="h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                              
                              {/* Down Arrow - visible only on mobile */}
                              <div className="mt-8 block animate-bounce lg:hidden">
                                <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Step 3: Lead Conversion */}
                            <div className="relative flex w-full max-w-xs flex-col items-center">
                              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                              </div>
                              <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Lead Conversion</h4>
                              <div className="mt-2 h-20 text-center text-sm text-gray-600">Multi-channel follow-up system to convert leads into clients</div>
                              <div className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 shadow-sm">
                                <ul className="list-inside list-disc text-xs text-indigo-700">
                                  <li>Professional calling</li>
                                  <li>Email sequences</li>
                                  <li>SMS campaigns</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          {/* Results Section */}
                          <div className="mt-20 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 p-px shadow-lg">
                            <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 p-6 text-white backdrop-blur-sm">
                              <div className="flex flex-col items-center justify-between lg:flex-row">
                                <div className="mb-6 text-center lg:mb-0 lg:text-left">
                                  <h4 className="text-2xl font-bold">The Result</h4>
                                  <p className="mt-2 text-white/90">Qualified clients delivered to you, ready to close</p>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                  <div className="transform rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                                    <div className="text-3xl font-bold">40%</div>
                                    <div className="text-sm text-white/90">Higher Conversion</div>
                                  </div>
                                  <div className="transform rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                                    <div className="text-3xl font-bold">24/7</div>
                                    <div className="text-sm text-white/90">Automated Working</div>
                                  </div>
                                  <div className="transform rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                                    <div className="text-3xl font-bold">20h+</div>
                                    <div className="text-sm text-white/90">Weekly Time Saved</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-12 text-center">
                        <Link href="/pricing" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          View Realtor Pricing
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* For Businesses Section */}
                <CarouselItem className="w-full">
                  <div id="ai-automation" className="bg-white py-12 sm:py-16 min-h-[800px] flex flex-col">
                    <div className="mx-auto max-w-7xl">
                      <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Businesses</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Streamline your operations with AI-powered automation and software solutions designed to help your business run like clockwork.
                        </p>
                      </div>
                      
                      {/* Visual Business Solutions Hub */}
                      <div className="mt-16 relative pb-20 flex-grow flex flex-col">
                        {/* SVG Connector Lines */}
                        <svg 
                          className="absolute top-0 left-0 w-full h-full" 
                          style={{ zIndex: 1 }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          {/* Vertical line from hub */}
                          <line 
                            x1="50%" 
                            y1="170px" 
                            x2="50%" 
                            y2="250px" 
                            stroke="url(#hubLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* Desktop: Horizontal connector line */}
                          <line 
                            className="hidden lg:block" 
                            x1="17.5%" 
                            y1="250px" 
                            x2="82.5%" 
                            y2="250px" 
                            stroke="url(#horizontalLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* Desktop: Vertical lines to each card */}
                          <line 
                            className="hidden lg:block" 
                            x1="17.5%" 
                            y1="250px" 
                            x2="17.5%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          <line 
                            className="hidden lg:block" 
                            x1="40%" 
                            y1="250px" 
                            x2="40%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          <line 
                            className="hidden lg:block" 
                            x1="60%" 
                            y1="250px" 
                            x2="60%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          <line 
                            className="hidden lg:block" 
                            x1="82.5%" 
                            y1="250px" 
                            x2="82.5%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* Tablet: Horizontal connector line */}
                          <line 
                            className="hidden sm:block lg:hidden" 
                            x1="25%" 
                            y1="250px" 
                            x2="75%" 
                            y2="250px" 
                            stroke="url(#horizontalLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* Tablet: Vertical lines to cards (2-column layout) */}
                          <line 
                            className="hidden sm:block lg:hidden" 
                            x1="25%" 
                            y1="250px" 
                            x2="25%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          <line 
                            className="hidden sm:block lg:hidden" 
                            x1="75%" 
                            y1="250px" 
                            x2="75%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* Mobile: Single vertical line */}
                          <line 
                            className="block sm:hidden" 
                            x1="50%" 
                            y1="250px" 
                            x2="50%" 
                            y2="370px" 
                            stroke="url(#cardLineGradient)" 
                            strokeWidth="2.5"
                          />
                          
                          {/* SVG Gradient Definitions */}
                          <defs>
                            <linearGradient id="hubLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#818cf8" />
                            </linearGradient>
                            
                            <linearGradient id="horizontalLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#a5b4fc" />
                              <stop offset="50%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#a5b4fc" />
                            </linearGradient>
                            
                            <linearGradient id="cardLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#818cf8" />
                              <stop offset="100%" stopColor="#c7d2fe" />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Central Hub Visualization */}
                        <div className="mx-auto max-w-md relative z-10">
                          <div className="relative rounded-xl bg-white p-6 shadow-xl">
                            {/* Central Circle */}
                            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                              </svg>
                            </div>
                            <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">AI Business Hub</h3>
                            <p className="mt-2 text-center text-sm text-gray-500">Centralized intelligence powering all your business operations</p>
                          </div>
                        </div>
                        
                        {/* Solution Cards - improved with better interaction patterns */}
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                          {/* Card 1: Customer Service */}
                          <div className="group relative rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                            </div>
                            <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Customer Service</h4>
                            <p className="mt-2 text-center text-sm text-gray-600">AI-powered chatbots and virtual assistants that handle customer inquiries 24/7.</p>
                            
                            <div className="mt-4 rounded-md bg-indigo-50/80 p-3 opacity-100 transition-all duration-300 group-hover:bg-indigo-50 sm:opacity-80">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-700">85% queries resolved automatically</span>
                              </div>
                              <div className="mt-2 flex items-center">
                                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                <span className="ml-2 text-xs text-gray-700">24/7 availability</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Card 2: Email Marketing */}
                          <div className="group relative rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">                
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Email Marketing</h4>
                            <p className="mt-2 text-center text-sm text-gray-600">Personalized email campaigns that nurture leads and drive conversions.</p>
                            
                            <div className="mt-4 rounded-md bg-indigo-50/80 p-3 opacity-100 transition-all duration-300 group-hover:bg-indigo-50 sm:opacity-80">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-700">45% higher open rates with AI</span>
                              </div>
                              <div className="mt-2 flex items-center">
                                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                <span className="ml-2 text-xs text-gray-700">Auto-optimizing subject lines</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Card 3: Workflow Automation */}
                          <div className="group relative rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">                
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Workflow Automation</h4>
                            <p className="mt-2 text-center text-sm text-gray-600">Streamline repetitive tasks and business processes to increase efficiency.</p>
                            
                            <div className="mt-4 rounded-md bg-indigo-50/80 p-3 opacity-100 transition-all duration-300 group-hover:bg-indigo-50 sm:opacity-80">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-700">30+ hours saved per employee monthly</span>
                              </div>
                              <div className="mt-2 flex items-center">
                                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                <span className="ml-2 text-xs text-gray-700">Custom automation workflows</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Card 4: Custom Solutions */}
                          <div className="group relative rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">                
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                              </svg>
                            </div>
                            <h4 className="mt-4 text-center text-lg font-medium text-gray-900">Custom Solutions</h4>
                            <p className="mt-2 text-center text-sm text-gray-600">Tailored AI applications designed specifically for your business needs.</p>
                            
                            <div className="mt-4 rounded-md bg-indigo-50/80 p-3 opacity-100 transition-all duration-300 group-hover:bg-indigo-50 sm:opacity-80">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-700">Built for your specific industry</span>
                              </div>
                              <div className="mt-2 flex items-center">
                                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                <span className="ml-2 text-xs text-gray-700">Seamless integration with existing tools</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Results Metrics - improved with data visualization */}
                        <div className="mx-auto mt-12 max-w-5xl">
                          <div className="overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-600 p-1 shadow-lg">
                            <div className="rounded-lg bg-white p-6">
                              <h3 className="text-center text-2xl font-bold text-gray-900">AI Business Impact</h3>
                              
                              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {/* Metric 1 with mini chart */}
                                <div className="relative overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center shadow-sm">
                                  <div className="mb-1 text-3xl font-bold text-indigo-600">40%</div>
                                  <div className="text-sm text-gray-600">Reduction in Processing Time</div>
                                  <div className="mt-2 flex h-6 items-end justify-center space-x-1">
                                    <div className="h-2 w-1 bg-indigo-200"></div>
                                    <div className="h-3 w-1 bg-indigo-300"></div>
                                    <div className="h-4 w-1 bg-indigo-400"></div>
                                    <div className="h-5 w-1 bg-indigo-500"></div>
                                    <div className="h-6 w-1 bg-indigo-600"></div>
                                  </div>
                                </div>
                                
                                {/* Metric 2 with mini chart */}
                                <div className="relative overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center shadow-sm">
                                  <div className="mb-1 text-3xl font-bold text-indigo-600">62%</div>
                                  <div className="text-sm text-gray-600">Increased Conversion Rate</div>
                                  <div className="mt-2 flex h-6 items-end justify-center space-x-1">
                                    <div className="h-1 w-1 bg-indigo-200"></div>
                                    <div className="h-2 w-1 bg-indigo-300"></div>
                                    <div className="h-3 w-1 bg-indigo-400"></div>
                                    <div className="h-4 w-1 bg-indigo-500"></div>
                                    <div className="h-6 w-1 bg-indigo-600"></div>
                                  </div>
                                </div>
                                
                                {/* Metric 3 with mini chart */}
                                <div className="relative overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center shadow-sm">
                                  <div className="mb-1 text-3xl font-bold text-indigo-600">24/7</div>
                                  <div className="text-sm text-gray-600">Automated Availability</div>
                                  <div className="mt-2 flex h-6 items-end justify-center space-x-1">
                                    <div className="h-6 w-1 bg-indigo-600"></div>
                                    <div className="h-6 w-1 bg-indigo-500"></div>
                                    <div className="h-6 w-1 bg-indigo-400"></div>
                                    <div className="h-6 w-1 bg-indigo-500"></div>
                                    <div className="h-6 w-1 bg-indigo-600"></div>
                                  </div>
                                </div>
                                
                                {/* Metric 4 with mini chart */}
                                <div className="relative overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center shadow-sm">
                                  <div className="mb-1 text-3xl font-bold text-indigo-600">85%</div>
                                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                                  <div className="mt-2 flex h-6 items-end justify-center space-x-1">
                                    <div className="h-4 w-1 bg-indigo-300"></div>
                                    <div className="h-5 w-1 bg-indigo-400"></div>
                                    <div className="h-6 w-1 bg-indigo-600"></div>
                                    <div className="h-5 w-1 bg-indigo-400"></div>
                                    <div className="h-4 w-1 bg-indigo-300"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Link href="/pricing" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Start Free Trial
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
} 