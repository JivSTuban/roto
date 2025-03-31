import './globals.css';
import 'next-cloudinary/dist/cld-video-player.css';
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { NavbarDemo } from "@/components/navbar-demo";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { Providers } from './providers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "roto",
  description: "AI-powered solutions for businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <Providers>
            <NavbarDemo />
            <div className="flex-1">
              <main>{children}</main>
            </div>
          </Providers>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
