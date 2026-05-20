import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyUniLoop — Your Campus, All In One Place",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description:
    "MyUniLoop is the all-in-one social and marketplace app for university students. Feed, marketplace, loops, real-time chat, vibes, anonymous tea posts, and more — all built for campus life.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen flex flex-col">

          {/* Navbar — light theme */}
          <header className="sticky top-0 z-50 border-b border-orange-100/60 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="MyUniLoop"
                  className="w-9 h-9 rounded-2xl object-cover shadow-sm ring-1 ring-orange-100"
                />
                <span className="text-xl font-black gradient-text">MyUniLoop</span>
              </Link>

              <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
                <Link href="/" className="hidden sm:block hover:text-orange-500 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hidden sm:block hover:text-orange-500 transition-colors">
                  About
                </Link>
                <Link href="/community" className="hidden md:block hover:text-orange-500 transition-colors">
                  Guidelines
                </Link>
                <Link href="/privacy" className="hidden md:block hover:text-orange-500 transition-colors">
                  Privacy
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl btn-orange py-2 px-5 text-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer — dark theme */}
          <footer className="section-dark border-t border-white/[0.06]">
            <div className="mx-auto max-w-6xl px-6 py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="MyUniLoop" className="w-7 h-7 rounded-xl object-cover ring-1 ring-white/10" />
                  <div>
                    <span className="font-black gradient-text-dark block leading-tight">MyUniLoop</span>
                    <span className="text-[11px] text-white/25">Leeban Soft. Dev. (SMC-Private) Limited</span>
                  </div>
                </div>
                <p className="text-xs text-white/25">
                  © 2026 Leeban Soft. Dev. (SMC-Private) Limited. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-5 text-xs text-white/35">
                  <Link href="/privacy"   className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms"     className="hover:text-white transition-colors">Terms of Use</Link>
                  <Link href="/copyright" className="hover:text-white transition-colors">Copyright</Link>
                  <Link href="/community" className="hover:text-white transition-colors">Community Guidelines</Link>
                  <Link href="/contact"   className="hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}
