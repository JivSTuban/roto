"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getTestimonials } from "@/lib/api";
import { useInView } from "@/hooks/useInView";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

interface VideoTestimonial {
  id: number;
  videoId?: string;
  title: string;
  description: string;
  isInvitation?: boolean;
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([
    // Fallback data
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Realtor, Century 21",
      image: "/images/avatarPlaceholder.jpg",
      rating: 5,
      title: "Lead generation game-changer",
      quote: "roto's AI saved me 20 hours a week and doubled my closings. The lead generation and automated follow-ups allow me to focus on what I do best - closing deals. It's like having a full-time assistant working 24/7.",
      category: "realtor"
    },
    // More fallback testimonials...
  ]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { ref, isInView } = useInView();
  
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      videoId: "testimonials/IMG_8169",
      title: "Client Success Story",
      description: "Watch how roto transformed our client's business"
    },
    {
      id: 2,
      isInvitation: true,
      title: "Be Part of Our Growth Story",
      description: "Join our exclusive client roster! We've successfully delivered for our first client and are currently working with a second. You could be next!"
    }
  ];

  const nextSlide = () => {
    // Pause current video if it exists
    const currentVideoId = `video-testimonial-${videoTestimonials[currentSlide].id}`;
    const playerElement = document.getElementById(currentVideoId);
    if (playerElement && !videoTestimonials[currentSlide].isInvitation) {
      try {
        const videoElement = playerElement.querySelector('video');
        if (videoElement) {
          videoElement.pause();
        }
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
    
    setCurrentSlide((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevSlide = () => {
    // Pause current video if it exists
    const currentVideoId = `video-testimonial-${videoTestimonials[currentSlide].id}`;
    const playerElement = document.getElementById(currentVideoId);
    if (playerElement && !videoTestimonials[currentSlide].isInvitation) {
      try {
        const videoElement = playerElement.querySelector('video');
        if (videoElement) {
          videoElement.pause();
        }
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
    
    setCurrentSlide((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const result = await getTestimonials();
        if (result.success && result.data && result.data.length > 0) {
          setTestimonials(result.data as typeof testimonials);
        }
       
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Unable to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchTestimonials();
  }, []);

  // Add this useEffect to handle video initialization
  useEffect(() => {
    if (!isInView) return;
    
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const testimonial = videoTestimonials[currentSlide];
      if (!testimonial.isInvitation && testimonial.videoId) {
        const videoId = `video-testimonial-${testimonial.id}`;
        const videoElement = document.getElementById(videoId);
        
        if (videoElement) {
          // Cloudinary player might have custom API, direct video element manipulation might not work
          // Instead of videoElement.load(), we'll just try to play if it's the current slide
          const videoPlayer = videoElement as HTMLElement;
          
          // Try to play if visible
          try {
            // Find the actual video element inside the Cloudinary player
            const actualVideoElement = videoPlayer.querySelector('video');
            if (actualVideoElement && isInView) {
              actualVideoElement.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // Video will need user interaction to play
              });
            }
          } catch (error) {
            console.error("Error trying to play video:", error);
          }
        }
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isInView, videoTestimonials]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Realtors and Businesses</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about roto&apos;s AI-powered solutions.
          </p>
        </div>
        
        {loading ? (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        ) : error ? (
          <div className="mx-auto mt-16 max-w-2xl text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Dynamic testimonials rendering */}
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <div className="relative flex items-center gap-x-4">
                  <Image 
                    src={"/images/avatarPlaceholder.jpg"} 
                    alt={testimonial.name} 
                    className="h-10 w-10 rounded-full bg-gray-100" 
                    width={40} 
                    height={40}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span>{testimonial.name}</span>
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-2 text-indigo-600">
                  {Array(testimonial.rating || 5).fill(0).map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-4 group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    <span>{testimonial.title}</span>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Video Testimonial Section */}
      <div className="bg-gray-50 py-24 sm:py-32 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Video Testimonials</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hear directly from our satisfied clients about their experience with roto.
            </p>
          </div>

          <div className="mx-auto mt-16 relative" ref={ref}>
            {/* Container for the video and navigation */}
            <div className="relative w-full aspect-video overflow-visible rounded-lg shadow-lg">
              {/* Video testimonials */}
              {videoTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-slide-index={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {testimonial.isInvitation ? (
                    <div className="h-full w-full relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-600 text-white">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>
                      
                      {/* Decorative circles */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
                      
                      <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center z-10">
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">{testimonial.title}</h3>
                        <p className="mb-8 text-white/90 text-lg max-w-xs">
                          {testimonial.description}
                        </p>
                        <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg transform hover:scale-105 flex items-center">
                          Start Your Free Trial
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : testimonial.videoId ? (
                    <div className="relative w-full h-full">
                      <CldVideoPlayer
                        width="1920"
                        height="1080"
                        src={testimonial.videoId}
                        autoplay={isInView ? "always" : "never"}
                        muted={true}
                        loop
                        controls
                        id={`video-testimonial-${testimonial.id}`}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Navigation buttons - now outside the slider container */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-4 rounded-full transition-all duration-200 z-50 border border-white/20"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-4 rounded-full transition-all duration-200 z-50 border border-white/20"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-50">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 h-1.5 bg-white' 
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
} 