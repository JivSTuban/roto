"use client"

import Link from "next/link"
import { useInView } from "@/hooks/useInView"
import { Suspense, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Model } from "@/components/3d_robot"

export default function Home() {
  const { ref, isInView } = useInView()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Set muted state based on visibility
      videoRef.current.muted = !isInView;
      
      // Try to play the video when it becomes visible
      if (isInView) {
        const playPromise = videoRef.current.play();
        
        // Handle autoplay restrictions
        if (playPromise !== undefined) {
          playPromise.catch(_ => {
            // Auto-play was prevented, keep the video muted and try again
            videoRef.current!.muted = true;
            videoRef.current!.play().catch(e => console.log("Could not autoplay video even when muted:", e));
          });
        }
      }
    }
  }, [isInView]);
  
  // Play video as soon as it loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Ensure video is muted initially to allow autoplay
    video.muted = true;
    
    const handleLoadedData = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay prevented on initial load");
        });
      }
    };
    
    video.addEventListener('loadeddata', handleLoadedData);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-blue-50 pt-16">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Run Your Business on Autopilot
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Focus on closing deals while we handle lead generation and conversions. roto provides AI-powered solutions to automate tedious tasks for realtors and businesses.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link href="/services" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get Started
                </Link>
                <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                  Start Free Trial <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 h-[500px]">
              <Suspense fallback={
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-200 opacity-25"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-l-indigo-600 animate-spin"></div>
                  </div>
                  <p className="mt-4 text-indigo-600 font-medium">Loading 3D visualization</p>
                  <p className="text-sm text-gray-500">Please wait a moment...</p>
                </div>
              }>
                <Canvas camera={{ position: [0, 7, 10], fov: 40 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                  <directionalLight position={[-5, 5, -5]} intensity={1} castShadow />
                  <pointLight position={[0, 5, 0]} intensity={1.2} />
                  <pointLight position={[0, -5, 0]} intensity={0.8} />
                  <spotLight 
                    position={[0, 10, 10]} 
                    angle={0.4} 
                    penumbra={0.8} 
                    intensity={1.5} 
                    castShadow 
                    distance={20}
                  />
                  <hemisphereLight 
                    args={['#ffffff', '#bbbbff', 0.7]} 
                  />
                  <Model 
                    position={[0, -1, 2]} 
                    rotation={[0.3, 0.7, 0]} 
                    scale={2.4} 
                  />
                  <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={false}
                    autoRotateSpeed={1}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 2.5}
                  />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mt-8 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful AI Automation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to succeed</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI-powered solutions automate the entire lead generation and conversion process, so you can focus on what matters most.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Lead Generation
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Automatically find and qualify leads using our advanced AI algorithms.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  Skip Tracing
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Find accurate contact information for your leads, eliminating the need for manual research.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  Lead Conversion
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Convert leads into clients through professional follow-up calls, automated email marketing, and SMS campaigns.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Business Automation
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">External automation services including customer service, email marketing, and workflow optimization.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-900 px-6 pt-16 pb-8 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-20">
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#3B82F6" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your business.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start today and see how our AI solutions can transform your real estate business or automate your workflow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link href="/services" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200">
                Get started
              </Link>
              <Link href="/testimonials" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors duration-200">
                View testimonials <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-[300px] lg:h-[400px] lg:flex-1 lg:mt-0 z-20 overflow-hidden rounded-lg shadow-xl" ref={ref}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover bg-white/5 ring-1 ring-white/10"
              src="/videos/IMG_8169.MOV"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
