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
                <Link href="/privacy" className="hidden sm:block hover:text-orange-500 transition-colors">
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
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="MyUniLoop" className="w-7 h-7 rounded-xl object-cover ring-1 ring-white/10" />
                <span className="font-black gradient-text-dark">MyUniLoop</span>
              </div>
              <p className="text-sm text-white/35">
                © 2026 MyUniLoop by{" "}
                <a href="https://leeban.co" className="hover:text-orange-400 transition-colors font-semibold text-white/50">
                  Nabeel Khan
                </a>
              </p>
              <div className="flex gap-6 text-sm text-white/35">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/copyright" className="hover:text-white transition-colors">Copyright</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}
