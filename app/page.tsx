"use client"
import Link from "next/link"
import { useState } from "react"

// ─── Waitlist Form ────────────────────────────────────────────────────────────

function WaitlistForm({ dark = false }: { dark?: boolean }) {
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
      if (res.ok) { setSuccess(true); setEmail("") }
      else setError(data.error || "Something went wrong.")
    } catch { setError("Something went wrong. Please try again.") }
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="your@university.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className={`w-full rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all sm:w-72 ${
            dark
              ? "bg-white/[0.06] border border-white/10 text-white placeholder-white/30"
              : "bg-white border border-orange-200 text-gray-800 placeholder-gray-400 shadow-sm"
          }`}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !email}
          className="btn-orange disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {success && <p className="text-sm font-semibold text-emerald-500">🎉 You&apos;re on the list — we&apos;ll reach out soon!</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
// Add your screenshots to /public/ — e.g. /public/screen-home.png
// Dimensions: 390×844 (iPhone 14) or any portrait screenshot

function PhoneMock({
  src,
  label,
  hint,
  dark = false,
  size = "md",
}: {
  src: string
  label: string
  hint: string
  dark?: boolean
  size?: "sm" | "md" | "lg"
}) {
  const [hasImg, setHasImg] = useState(true)

  const maxW = size === "sm" ? "max-w-[150px]" : size === "lg" ? "max-w-[260px]" : "max-w-[210px]"
  const frameClass = dark ? "phone-frame phone-frame-dark" : "phone-frame phone-frame-light"
  const innerClass = dark ? "screenshot-inner screenshot-inner-dark" : "screenshot-inner screenshot-inner-light"
  const textColor = dark ? "text-white/15" : "text-orange-200"
  const labelColor = dark ? "text-white/20" : "text-orange-300"
  const notchColor = dark ? "bg-black" : "bg-gray-900"

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`${frameClass} ${maxW} w-full`}>
        <div className={`phone-notch ${notchColor}`} />
        <div className={`${innerClass} w-full`}>
          {hasImg ? (
            <img
              src={src}
              alt={label}
              className="w-full h-full object-cover object-top"
              onError={() => setHasImg(false)}
            />
          ) : (
            <>
              {/* ↓ SCREENSHOT SLOT — replace src prop with your image path */}
              <div className={`text-5xl select-none ${textColor}`}>📱</div>
              <span className={`text-xs font-bold text-center px-3 ${labelColor}`}>{label}</span>
              <span className={`text-[10px] text-center px-4 leading-4 ${dark ? "text-white/10" : "text-orange-200/60"}`}>
                {hint}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="text-center">
        <p className={`text-sm font-bold ${dark ? "text-white/60" : "text-gray-700"}`}>{label}</p>
        <p className={`text-xs mt-0.5 ${dark ? "text-white/30" : "text-gray-400"}`}>{hint}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════════
          HERO — LIGHT THEME (app main warm white)
      ══════════════════════════════════════════════ */}
      <section className="hero-light relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-100 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full bg-orange-50 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            {/* Copy */}
            <div className="flex flex-col items-start gap-6">
              <span className="badge-light">🎓 Built for university students</span>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-gray-900 md:text-6xl lg:text-[4.2rem]">
                Your campus.{" "}
                <span className="gradient-text block">All in one place.</span>
              </h1>

              <p className="text-lg leading-8 text-gray-500 max-w-lg">
                MyUniLoop combines your social feed, student marketplace, campus loops,
                real-time chat, vibes, and more — all beautifully designed, all in one app.
              </p>

              <div className="w-full max-w-md">
                <WaitlistForm dark={false} />
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["🍎 iOS", "🌙 Dark Mode", "⚡ Real-Time", "🔒 Student-Verified", "🌍 Multi-Country"].map((b) => (
                  <span key={b} className="badge-light text-[11px] py-1 px-3">{b}</span>
                ))}
              </div>
            </div>

            {/* Right — phone screenshot slot */}
            <div className="flex justify-center">
              {/*
                SCREENSHOT SLOT — HERO
                Add /public/screen-home.png (or app1.png)
                Recommended: Home feed screenshot
              */}
              <PhoneMock
                src="/app1.png"
                label="Home Feed"
                hint="Add your home feed screenshot"
                dark={false}
                size="lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats strip — light */}
      <div className="divider-light" />
      <section className="section-light py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "1 App", label: "for your entire campus life" },
              { value: "9+", label: "features built for students" },
              { value: "Multi-Country", label: "MY, UK, PK, DE, AU & more" },
              { value: "iOS Native", label: "with full dark mode" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="divider-light" />

      {/* ══════════════════════════════════════════════
          FEATURES — DARK THEME (app dark mode)
      ══════════════════════════════════════════════ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-dark mb-5 inline-flex">⚡ Everything you need</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl mt-4">
              Not just another{" "}
              <span className="gradient-text-dark">social app</span>
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-xl mx-auto">
              Every feature was designed around how students actually live, study, trade, and connect.
            </p>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🏠", title: "Personalised Home Feed", tag: "Smart Algorithm", text: "Your feed learns from who you vibe with. Content from your social graph and university floats to the top automatically." },
              { icon: "🔥", title: "Vibes — Campus Connections", tag: "Social Graph", text: "Vibe with people you like and see their posts in a dedicated Vibes Feed. Your campus network, not random strangers." },
              { icon: "🛒", title: "Student Marketplace", tag: "Buy & Sell", text: "Textbooks, electronics, furniture, and more. Filter by country to find deals from students near you." },
              { icon: "🔁", title: "Loops & Groups", tag: "Campus Life", text: "Create or join campus-verified groups. Discover what's happening around you on an interactive map." },
              { icon: "🏡", title: "Rent & Room Replacement", tag: "Housing", text: "Post or find room listings, contract replacements, and apartment rentals. Filter by country, chat directly." },
              { icon: "💬", title: "Real-Time Chat", tag: "Messaging", text: "Message anyone 1-on-1 or in groups. Share images, videos, react to messages — instant push notifications." },
              { icon: "☕", title: "Spill the Tea", tag: "Anonymous", text: "Anonymous 24-hour posts for campus confessions and hot takes. React without revealing who you are. Premium only." },
              { icon: "📍", title: "Location-Based Filtering", tag: "Local First", text: "Filter posts, listings, loops, and rent offers by country — Malaysia, Pakistan, UK, Germany, Australia & more." },
              { icon: "🌙", title: "Beautiful Dark Mode", tag: "Design", text: "Fully adaptive dark and light mode across every screen. Every colour, every card, every button — native and smooth." },
            ].map((f) => (
              <div key={f.title} className="card-dark rounded-2xl p-5 hover:bg-white/[0.05] transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="feature-icon-dark">{f.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-sm font-bold text-white">{f.title}</h3>
                      <span className="text-[10px] font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/15 rounded-full px-2 py-0.5 whitespace-nowrap">
                        {f.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-white/40">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SCREENSHOTS GALLERY — LIGHT THEME
      ══════════════════════════════════════════════ */}
      <section className="section-light-warm py-28 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-light mb-5 inline-flex">📱 See it in action</span>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl mt-4">
              Every screen,{" "}
              <span className="gradient-text">crafted with care</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto">
              Beautiful light mode. Smooth dark mode. Built for the way you scroll.
            </p>
          </div>

          {/*
            ────────────────────────────────────────────────
            SCREENSHOT SLOTS (light phones — light mode screens)

            Add these files to /public/:
              app1.png  →  Home Feed (light mode)
              app2.png  →  Marketplace (light mode)
              app3.png  →  Loops / Map (light mode)
              app4.png  →  User Profile (light mode)
              app5.png  →  Chat (light mode)
              app6.png  →  Vibes Feed (light mode)
            ────────────────────────────────────────────────
          */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { src: "/app1.png", label: "Home Feed", hint: "Your personalised wall" },
              { src: "/app2.png", label: "Marketplace", hint: "Buy & sell anything" },
              { src: "/app3.png", label: "Loops", hint: "Campus groups & map" },
              { src: "/app4.png", label: "Profile", hint: "Vibes, posts, listings" },
              { src: "/app5.png", label: "Chat", hint: "Real-time messaging" },
              { src: "/app6.png", label: "Vibes Feed", hint: "Posts from your vibes" },
            ].map((s) => (
              <PhoneMock key={s.label} src={s.src} label={s.label} hint={s.hint} dark={false} size="sm" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS — DARK THEME
      ══════════════════════════════════════════════ */}
      <section className="section-dark-warm py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-dark mb-5 inline-flex">🚀 Get started</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl mt-4">
              Up and running{" "}
              <span className="gradient-text-dark">in minutes</span>
            </h2>
            <p className="mt-4 text-lg text-white/40">Three steps. That&apos;s it.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: "🎓", title: "Sign up with your university email", text: "Create your student profile, pick your university, and you're in. Verified and safe from day one." },
              { n: "02", icon: "🔥", title: "Explore your personalised feed", text: "Discover posts, listings, loops, and people. Your feed gets smarter and more personal the more you use it." },
              { n: "03", icon: "⚡", title: "Buy, sell, vibe, connect", text: "Chat with anyone, trade items, join loops, or spill some tea — all inside one beautifully designed app." },
            ].map((step) => (
              <div key={step.n} className="glass-dark rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="step-num">{step.n}</div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-6 text-white/40">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PERSONALISED FEED SPOTLIGHT — LIGHT THEME
      ══════════════════════════════════════════════ */}
      <section className="section-light py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <span className="badge-light mb-5 inline-flex">🧠 Smart Feed</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl mt-4 mb-5">
                A feed that actually{" "}
                <span className="gradient-text">knows you</span>
              </h2>
              <p className="text-gray-500 leading-8 mb-7">
                MyUniLoop&apos;s personalised home feed uses your social graph to surface
                content you actually care about — not just the latest posts.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🔥", text: "Posts from people you vibe with score highest" },
                  { icon: "🎓", text: "Content from your own university gets a boost" },
                  { icon: "📈", text: "Trending posts surface with popularity scoring" },
                  { icon: "⏱", text: "Freshness decay keeps your feed current" },
                  { icon: "🌍", text: "Filter by country or university anytime" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/*
              SCREENSHOT SLOT — Home Feed (light mode)
              Add /public/screen-feed-light.png
            */}
            <div className="flex justify-center">
              <PhoneMock
                src="/app1.png"
                label="Personalised Feed"
                hint="Add home feed screenshot"
                dark={false}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MARKETPLACE & HOUSING — DARK THEME
      ══════════════════════════════════════════════ */}
      <section className="section-dark py-28 relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-orange-600/6 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            {/*
              SCREENSHOT SLOTS — Marketplace + Rent (dark mode)
              Left: /app2.png  — Marketplace
              Right: /app3.png — Rent & Replacement
            */}
            <div className="flex justify-center gap-5 order-2 md:order-1">
              <PhoneMock src="/app2.png" label="Marketplace" hint="Buy & sell screen" dark={true} size="md" />
              <PhoneMock src="/app3.png" label="Rent & Housing" hint="Rent listings screen" dark={true} size="md" />
            </div>

            <div className="order-1 md:order-2">
              <span className="badge-dark mb-5 inline-flex">🛒 Buy, Sell & Housing</span>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl mt-4 mb-5">
                The student{" "}
                <span className="gradient-text-dark">marketplace & housing hub</span>
              </h2>
              <p className="text-white/40 leading-8 mb-7">
                More than just listings. Buy and sell anything as a student, and find
                your next place to live — all within your campus community.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: "📚", title: "Textbooks & Notes", desc: "Second-hand course materials" },
                  { icon: "💻", title: "Electronics", desc: "Laptops, tablets, accessories" },
                  { icon: "🛋", title: "Furniture", desc: "Student-priced home essentials" },
                  { icon: "🏡", title: "Rent & Replacement", desc: "Rooms & contract transfers" },
                ].map((item) => (
                  <div key={item.title} className="glass-dark rounded-xl p-4">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm font-bold text-white mt-2">{item.title}</p>
                    <p className="text-xs text-white/35 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOOPS & CHAT — LIGHT THEME
      ══════════════════════════════════════════════ */}
      <section className="section-light-warm py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <span className="badge-light mb-5 inline-flex">🔁 Loops & Chat</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl mt-4 mb-5">
                Campus groups &{" "}
                <span className="gradient-text">real-time messaging</span>
              </h2>
              <p className="text-gray-500 leading-8 mb-7">
                Loops are campus-verified groups where students meet, share, and
                organise. Chat happens in real time — one-on-one or in groups, with
                image, video, and emoji reaction support.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🗺", text: "Interactive map showing active loops near you" },
                  { icon: "✅", text: "University verification badge on every loop" },
                  { icon: "🔍", text: "Filter loops by university for local groups" },
                  { icon: "📸", text: "Share images and videos in any chat" },
                  { icon: "😍", text: "React to messages with emoji reactions" },
                  { icon: "🔔", text: "Instant push notifications — never miss a message" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/*
              SCREENSHOT SLOTS — Loops map + Chat (light mode)
              Left:  /app4.png — Loops / map screen
              Right: /app5.png — Chat screen
            */}
            <div className="flex justify-center gap-5">
              <PhoneMock src="/app4.png" label="Loops" hint="Campus map & groups" dark={false} size="md" />
              <PhoneMock src="/app5.png" label="Chat" hint="Real-time messaging" dark={false} size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SPILL THE TEA — DARK THEME (premium)
      ══════════════════════════════════════════════ */}
      <section className="section-dark py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120800] via-[#0d0d0d] to-[#0d0d0d] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-800/10 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/*
              SCREENSHOT SLOT — Tea / Teapot feed (dark mode)
              Add /public/screen-tea.png or use app6.png
            */}
            <div className="flex justify-center order-2 md:order-1">
              <PhoneMock src="/app6.png" label="Spill the Tea" hint="Anonymous campus posts" dark={true} size="lg" />
            </div>

            <div className="order-1 md:order-2">
              <span className="badge-dark mb-5 inline-flex">☕ Premium Feature</span>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl mt-4 mb-5">
                Spill the{" "}
                <span className="gradient-text-dark">Tea</span>
              </h2>
              <p className="text-white/40 leading-8 mb-7">
                Got something to say but don&apos;t want your name on it? Tea posts are
                completely anonymous, disappear after 24 hours, and are exclusive to
                your campus. React, reply, keep it messy — all without revealing who
                you are.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: "🔒", text: "Fully anonymous" },
                  { icon: "⏳", text: "24-hour posts" },
                  { icon: "🎓", text: "Campus-only" },
                  { icon: "🔥", text: "React & reply" },
                  { icon: "⭐", text: "Premium exclusive" },
                ].map((b) => (
                  <span key={b.text} className="badge-dark">
                    <span>{b.icon}</span>
                    <span>{b.text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DARK MODE SCREENSHOTS — DARK THEME
      ══════════════════════════════════════════════ */}
      <section className="section-dark-warm py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-dark mb-5 inline-flex">🌙 Dark Mode</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl mt-4">
              Beautiful at midnight,{" "}
              <span className="gradient-text-dark">beautiful at noon</span>
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-lg mx-auto">
              Every screen is fully adaptive. System-matched dark and light mode — smooth, warm, and native.
            </p>
          </div>

          {/*
            SCREENSHOT SLOTS (dark phones — dark mode screens)
            Add these to /public/:
              screen-dark-home.png     → Home Feed dark mode
              screen-dark-market.png  → Marketplace dark mode
              screen-dark-loops.png   → Loops dark mode
              screen-dark-chat.png    → Chat dark mode

            Or reuse existing /app*.png with dark mode screenshots
          */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { src: "/app1.png", label: "Feed — Dark", hint: "Home feed dark mode" },
              { src: "/app2.png", label: "Market — Dark", hint: "Marketplace dark mode" },
              { src: "/app3.png", label: "Loops — Dark", hint: "Campus loops dark mode" },
              { src: "/app5.png", label: "Chat — Dark", hint: "Messaging dark mode" },
            ].map((s) => (
              <PhoneMock key={s.label} src={s.src} label={s.label} hint={s.hint} dark={true} size="sm" />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — LIGHT THEME
      ══════════════════════════════════════════════ */}
      <section className="section-light-warm py-28 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-50 rounded-full blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <span className="badge-light mb-6 inline-flex">🍎 Available on iOS</span>
          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-6xl mt-4 mb-5">
            Ready to join your{" "}
            <span className="gradient-text">campus?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Download MyUniLoop and connect with thousands of students at your university —
            wherever in the world that is.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-gray-900 px-8 py-4 text-white hover:bg-black transition-all shadow-xl hover:-translate-y-0.5"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-xs text-white/50 font-medium">Download on the</p>
                <p className="text-base font-black">App Store</p>
              </div>
            </a>
          </div>

          <div className="mx-auto max-w-sm">
            <p className="text-sm text-gray-400 mb-3 font-medium">Or join the waitlist:</p>
            <WaitlistForm dark={false} />
          </div>

          <p className="mt-7 text-sm text-gray-300">iOS · iPhone · Dark Mode · Student-Verified · Multi-Country</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT STRIP — DARK
      ══════════════════════════════════════════════ */}
      <section className="section-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-white/35 text-sm leading-8">
            MyUniLoop is built with purpose by{" "}
            <a href="https://leeban.co" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
              Leeban Soft.Dev.
            </a>{" "}
            with the goal of improving how students connect, trade, and communicate
            within their campus — wherever in the world that campus is.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-white/25">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
