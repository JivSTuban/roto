"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Sparkles } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {href ? (
        <Link href={href}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-[15px] text-black/70 hover:text-black transition-colors font-medium px-4"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="text-[15px] text-black/70 hover:text-black transition-colors font-medium px-4"
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.75rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const { user } = useAuth();

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <div className="px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-black font-semibold text-xl tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
            onMouseEnter={() => setActive(null)}
          >
            <Image 
              src="/rotoLogo-removebg-preview.png"
              alt="Roto Logo"
              width={80}
              height={40}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-2">
            {children}
          </div>
        </div>
        <div className="flex items-center gap-4 ml-8">
          {user ? (
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              >
                Sign in
              </Link>
              <Link 
                href="/register"
                className="text-sm bg-indigo-600 text-white font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex items-start space-x-4 group">
      <div className="relative w-[140px] h-[80px] rounded-lg overflow-hidden border border-black/[0.08]">
        <Image
          src={src}
          fill
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <h4 className="text-[15px] font-medium mb-1 text-black/90 group-hover:text-black transition-colors">
          {title}
        </h4>
        <p className="text-black/60 text-sm max-w-[12rem] group-hover:text-black/70 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="block text-black/60 hover:text-black text-[15px] transition-colors"
    >
      {children}
    </Link>
  );
};
