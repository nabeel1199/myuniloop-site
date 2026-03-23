import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyUniLoop",
  description: "The all-in-one social and marketplace app for university students.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                MyUniLoop
              </Link>

              <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
                <Link href="/" className="hover:text-orange-500">Home</Link>
                <Link href="/about" className="hover:text-orange-500">About</Link>
                <Link href="/privacy" className="hover:text-orange-500">Privacy</Link>
                <Link href="/contact" className="hover:text-orange-500">Contact</Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-orange-100 bg-orange-50">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
              <p>© 2026 MyUniLoop. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-orange-500">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}