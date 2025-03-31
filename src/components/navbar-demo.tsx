"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center p-6">
      <div className={cn(
        "rounded-full transition-colors duration-200 w-fit isolate",
        scrolled ? "bg-white/70 backdrop-blur-sm border border-black/[0.08]" : "bg-white/50"
      )}>
        <Navbar />
      </div>
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  // const isPricingPage = pathname === '/pricing';

  // Simple scroll function to handle smooth scrolling to sections on the page
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position with offset
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 130, // Same offset as in previous implementation
        behavior: 'smooth'
      });
    }
  };

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Services" href="/services">
        <div className="p-6 min-w-[700px]">
          <div className="grid grid-cols-2 gap-6">
            <ProductItem
              title="Lead Generation"
              href="/services#realtor-services"
              src="https://img.freepik.com/free-vector/generating-new-leads-concept-illustration_114360-7394.jpg"
              description="AI-powered lead generation and qualification system"
            />
            <ProductItem
              title="Skip Tracing"
              href="/services#realtor-services"
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=4740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Advanced contact discovery and verification"
            />
            <ProductItem
              title="AI Automation"
              href="/services#ai-automation"
              src="https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration_1284-82523.jpg?semt=ais_hybrid"
              description="Smart workflow automation and optimization"
            />
            <ProductItem
              title="Software Development"
              href="/services#software-development"
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=4740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Custom web & mobile applications for your business"
            />
          </div>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Company">
        <div className="flex flex-col space-y-4 text-sm min-w-[180px] p-3">
          <HoveredLink href="/blog">Blog & Updates</HoveredLink>
          <HoveredLink href="/testimonials">Customer Stories</HoveredLink>
          <HoveredLink href="/contact">Contact Sales</HoveredLink>
        </div>
      </MenuItem>
      {/* <MenuItem setActive={setActive} active={active} item="Pricing" href="/pricing">
        <div className="flex flex-col space-y-4 text-sm min-w-[180px] p-3">
          {isPricingPage ? (
            <>
              <button 
                onClick={() => scrollToSection('all-in-one')}
                className="block text-left text-black/60 hover:text-black text-[15px] transition-colors cursor-pointer"
              >
                All-in-One Solution
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="block text-left text-black/60 hover:text-black text-[15px] transition-colors cursor-pointer"
              >
                Business Solutions
              </button>
            </>
          ) : (
            <>
              <Link href="/pricing#all-in-one" className="block text-black/60 hover:text-black text-[15px] transition-colors">
                All-in-One Solution
              </Link>
              <Link href="/pricing#business" className="block text-black/60 hover:text-black text-[15px] transition-colors">
                Business Solutions
              </Link>
            </>
          )}
        </div>
      </MenuItem> */}
    </Menu>
  );
}
