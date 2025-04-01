import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/services" className="text-base text-gray-500 hover:text-gray-900">
              Services
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/testimonials" className="text-base text-gray-500 hover:text-gray-900">
              Testimonials
            </Link>
          </div>
          {/* <div className="px-5 py-2">
            <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </Link>
          </div> */}
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.jivstuban.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 flex items-center gap-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.293 6.293L2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z" />
            </svg>
            <span className="text-[15px]">Jiv Stuban</span>
          </a>
          <a href="https://aldrinvitorillo.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 flex items-center gap-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.293 6.293L2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z" />
            </svg>
            <span className="text-[15px]">Aldrin Vitorillo</span>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} roto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
