import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { NavbarDemo } from "@/components/navbar-demo"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/context/AuthContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "roto | AI-Powered Solutions for Realtors & Businesses",
  description: "Automate your real estate business with AI. roto provides lead generation, skip tracing, and lead conversion services for realtors and AI automation for businesses.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <NavbarDemo />
          <div className="flex-1">
            <main>{children}</main>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
