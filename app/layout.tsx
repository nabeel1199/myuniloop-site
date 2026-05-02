import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyUniLoop — The App for University Students",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description:
    "MyUniLoop is the all-in-one social and marketplace app for university students. Feed, marketplace, loops, chat, and more.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="MyUniLoop"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="text-xl font-black text-orange-500">MyUniLoop</span>
              </Link>

              <nav className="flex items-center gap-5 text-sm font-medium text-gray-600">
                <Link href="/" className="hidden sm:block hover:text-orange-500 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hidden sm:block hover:text-orange-500 transition-colors">
                  About
                </Link>
                <Link href="/privacy" className="hidden sm:block hover:text-orange-500 transition-colors">
                  Privacy
                </Link>
                <Link href="/contact" className="rounded-full bg-orange-500 px-5 py-2 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-orange-100 bg-orange-50">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="MyUniLoop" className="w-6 h-6 rounded-full object-cover" />
                <span className="font-bold text-orange-500">MyUniLoop</span>
              </div>
              <p>© 2025 MyUniLoop by{" "}
                <a href="https://leeban.co" className="hover:text-orange-500 transition-colors font-semibold">
                  Leeban Soft.Dev.
                </a>
              </p>
              <div className="flex gap-5">
                <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
                <a href="https://leeban.co" className="hover:text-orange-500 transition-colors">leeban.co</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
