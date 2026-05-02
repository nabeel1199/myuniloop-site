"use client"
import Link from "next/link"
import { useState } from "react"

const features = [
  {
    icon: "📱",
    title: "Social Feed",
    text: "Share posts, react with emojis, comment, and stay updated with your entire campus community in real time.",
  },
  {
    icon: "🛒",
    title: "Marketplace",
    text: "Buy and sell items with fellow students. Textbooks, electronics, furniture, rent replacements and more.",
  },
  {
    icon: "🔁",
    title: "Loops & Events",
    text: "Create or join local events and group activities. See what's happening around campus on an interactive map.",
  },
  {
    icon: "💬",
    title: "Real-Time Chat",
    text: "Message anyone directly or in group chats. Share images, videos, and react to messages instantly.",
  },
  {
    icon: "🍵",
    title: "Tea Posts",
    text: "Share anonymous 24-hour posts. React and interact without revealing who you are.",
  },
  {
    icon: "⭐",
    title: "Premium",
    text: "Unlock exclusive features and support the platform that connects your campus.",
  },
]

const steps = [
  {
    n: "1",
    title: "Sign up with your university email",
    text: "Create your student profile and connect to your campus community in seconds.",
  },
  {
    n: "2",
    title: "Explore your campus feed",
    text: "Discover posts, listings, loops, and people from your university.",
  },
  {
    n: "3",
    title: "Buy, sell, connect",
    text: "Chat, trade items, join events, and stay connected — all in one place.",
  },
]

function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!email) return
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess(true)
        setEmail("")
      } else {
        setError(data.error || "Something went wrong.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your university email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-full rounded-2xl border border-orange-200 bg-white px-5 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 sm:w-72"
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !email}
          className="rounded-2xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-orange-600 disabled:opacity-60 transition-colors"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {success && (
        <p className="text-sm font-semibold text-green-600">🎉 You&apos;re on the waitlist!</p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
              Built for university students
            </span>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
              Your campus life,
              <span className="block text-orange-500">all in one app.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              MyUniLoop combines social connection, a student marketplace, group loops,
              and real-time chat into one beautifully simple platform made for university life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WaitlistForm />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["🎓 Student-Only", "🔒 Safe & Verified", "⚡ Real-Time"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* App preview card */}
          <div>
            <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/50">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>

              <div className="space-y-3">
                {[
                  { label: "Feed", text: "Discover updates and posts from your student community." },
                  { label: "Marketplace", text: "Find books, furniture, electronics, and student deals." },
                  { label: "Loops", text: "Join campus events and group activities on the map." },
                  { label: "Chat", text: "Message instantly with sellers, friends, and groups." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-orange-50 px-4 py-3">
                    <p className="text-xs font-bold text-orange-600">{item.label}</p>
                    <p className="mt-1 text-sm text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Built around real student needs, not generic social media.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Get Started in Minutes
            </h2>
            <p className="mt-4 text-lg text-gray-500">Simple, fast, and built around student needs.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-xl font-black text-white shadow-lg shadow-orange-200">
                  {step.n}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-14 md:text-5xl">
            See MyUniLoop in Action
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { src: "/app1.png", label: "Social Feed" },
              { src: "/app2.png", label: "Marketplace" },
              { src: "/app3.png", label: "Chat & Loops" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                </div>
                <p className="mt-3 text-center text-sm font-semibold text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Ready to Join Your Campus?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Download MyUniLoop today and connect with thousands of students.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-white hover:bg-gray-900 transition-colors shadow-xl"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-xs text-white/70">Download on the</p>
                <p className="text-base font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-white hover:bg-gray-900 transition-colors shadow-xl"
            >
              <span className="text-2xl">▶</span>
              <div className="text-left">
                <p className="text-xs text-white/70">Get it on</p>
                <p className="text-base font-bold">Google Play</p>
              </div>
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">Available on iOS and Android · Coming soon</p>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-black text-gray-900">Built with purpose</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            MyUniLoop is developed by{" "}
            <a href="https://leeban.co" className="font-semibold text-orange-500 hover:underline">
              Leeban Soft.Dev.
            </a>{" "}
            with the goal of improving how students connect, trade, and communicate within
            their campus environment.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-orange-500 hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </section>
    </main>
  )
}
