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
          placeholder="your@email.com"
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
      {success && <p className="text-sm font-semibold text-emerald-500">🎉 You&apos;re on the list — we&apos;ll be in touch!</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function Phone({
  src,
  alt,
  dark = false,
  className = "",
}: {
  src: string
  alt: string
  dark?: boolean
  className?: string
}) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div
        className={`relative overflow-hidden ${
          dark ? "phone-frame-dark" : "phone-frame-light"
        }`}
        style={{ borderRadius: 38 }}
      >
        {/* Dynamic island / notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: 10,
            width: 82,
            height: 20,
            background: "#000",
            borderRadius: 999,
          }}
        />
        {/* Screenshot */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top block"
          style={{ display: "block" }}
        />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════════
          HERO — LIGHT (main app warm white theme)
      ══════════════════════════════════════════════════════ */}
      <section className="hero-light relative overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-orange-100 blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-64 rounded-full bg-orange-50 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Copy */}
            <div className="flex flex-col items-start gap-6">
              <span className="badge-light">🎓 Built for university students</span>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-gray-900 md:text-6xl lg:text-[4rem]">
                Your campus.
                <span className="gradient-text block">All in one place.</span>
              </h1>

              <p className="text-lg leading-8 text-gray-500 max-w-lg">
                MyUniLoop is the all-in-one app for university students — social feed,
                marketplace, campus loops, real-time chat, vibes, rent listings, and
                anonymous tea posts. Everything. One app.
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

            {/* Hero phone — Home Feed light */}
            <div className="flex justify-center">
              <Phone
                src="/HomeBright.png"
                alt="MyUniLoop Home Feed"
                dark={false}
                className="w-[220px] md:w-[240px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="divider-light" />
      <section className="section-light py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "1 App", label: "for your entire campus life" },
              { value: "9+", label: "features built for students" },
              { value: "Multi-Country", label: "MY · UK · PK · DE · AU & more" },
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

      {/* ══════════════════════════════════════════════════════
          FEATURES GRID — DARK (app dark mode theme)
      ══════════════════════════════════════════════════════ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

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
              { icon: "🏠", title: "Personalised Home Feed", tag: "Smart Algorithm",
                text: "Your feed learns from who you vibe with. Content from your social graph and university floats to the top automatically — no manual curation needed." },
              { icon: "🔥", title: "Vibes — Campus Connections", tag: "Social Graph",
                text: "Vibe with people you like and see their posts in a dedicated Vibes Feed. Your campus social graph, not random strangers or ads." },
              { icon: "🛒", title: "Student Marketplace", tag: "Buy & Sell",
                text: "Textbooks, electronics, furniture, and more. Filter by country to find deals from students near you. No middleman, just students." },
              { icon: "🔁", title: "Loops & Groups", tag: "Campus Life",
                text: "Create or join campus-verified groups. Discover what's happening around you on an interactive map with university badges." },
              { icon: "🏡", title: "Rent & Room Replacement", tag: "Housing",
                text: "Post or find room listings, contract replacements, and apartment rentals. Filter by country, chat directly with students." },
              { icon: "💬", title: "Real-Time Chat", tag: "Messaging",
                text: "Message anyone 1-on-1 or in group chats. Share images and videos, react with emojis, and get instant push notifications." },
              { icon: "☕", title: "Spill the Tea", tag: "Anonymous · Premium",
                text: "Fully anonymous 24-hour posts for campus confessions and hot takes. React and reply without revealing who you are. Premium exclusive." },
              { icon: "📍", title: "Location-Based Filtering", tag: "Local First",
                text: "Filter posts, listings, loops, and rent offers by country — Malaysia, Pakistan, UK, Germany, Australia, Singapore, and more." },
              { icon: "🌙", title: "Beautiful Dark Mode", tag: "Design",
                text: "Fully adaptive dark and light mode across every single screen. Every colour, card, and button adapts — native iOS, smooth and warm." },
            ].map((f) => (
              <div key={f.title} className="card-dark rounded-2xl p-5 hover:bg-white/[0.05] transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="feature-icon-dark">{f.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
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

      {/* ══════════════════════════════════════════════════════
          LIGHT MODE SCREENS GALLERY — LIGHT THEME
          Shows: HomeBright, MarketplaceBright, LoopBright,
                 chatBright, VibeFeedBright, ProfileBright
      ══════════════════════════════════════════════════════ */}
      <section className="section-light-warm py-28 relative overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-light mb-5 inline-flex">☀️ Light Mode</span>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl mt-4">
              Clean, warm &{" "}
              <span className="gradient-text">built for daylight</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto">
              Every screen designed for clarity and comfort — warm whites, soft orange accents, and effortless navigation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:grid-cols-6">
            {[
              { src: "/HomeBright.png",        label: "Home Feed",   desc: "Personalised posts" },
              { src: "/MarketplaceBright.png", label: "Marketplace", desc: "Buy & sell listings" },
              { src: "/LoopBright.png",        label: "Loops",       desc: "Campus groups & map" },
              { src: "/chatBright.png",        label: "Chat",        desc: "Real-time messaging" },
              { src: "/VibeFeedBright.png",    label: "Vibes Feed",  desc: "Your vibes' posts" },
              { src: "/ProfileBright.png",     label: "Profile",     desc: "Your campus identity" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <Phone src={s.src} alt={s.label} dark={false} className="w-full max-w-[120px] sm:max-w-[140px]" />
                <div className="text-center">
                  <p className="text-xs font-bold text-gray-700">{s.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS — DARK
      ══════════════════════════════════════════════════════ */}
      <div className="divider-dark" />
      <section className="section-dark-warm py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700/5 rounded-full blur-3xl pointer-events-none" />
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
              { n: "01", icon: "🎓", title: "Sign up with your personal email", text: "Create your student profile, pick your university, and you're in. Verified and safe from day one." },
              { n: "02", icon: "🔥", title: "Explore your personalised feed", text: "Discover posts, listings, loops, and people. Your feed gets smarter the more you use it." },
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

      {/* ══════════════════════════════════════════════════════
          HOME FEED SPOTLIGHT — LIGHT
          Screenshots: HomeBright (large) + VibeFeedBright (side)
      ══════════════════════════════════════════════════════ */}
      <section className="section-light py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            <div>
              <span className="badge-light mb-5 inline-flex">🧠 Smart Feed Algorithm</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl mt-4 mb-5">
                A feed that actually{" "}
                <span className="gradient-text">knows you</span>
              </h2>
              <p className="text-gray-500 leading-8 mb-7">
                MyUniLoop&apos;s personalised home feed uses your social graph to surface
                content you actually care about — not just the latest posts from everyone.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🔥", text: "Posts from people you vibe with score highest in your feed" },
                  { icon: "🎓", text: "Content from your own university gets a visibility boost" },
                  { icon: "📈", text: "Trending posts surface with smart popularity scoring" },
                  { icon: "⏱", text: "Freshness decay keeps your feed always current" },
                  { icon: "🌍", text: "Filter anytime by country or your specific university" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HomeBright + VibeFeedBright side by side */}
            <div className="flex justify-center gap-5 items-end">
              <Phone src="/HomeBright.png" alt="Home Feed" dark={false} className="w-[170px]" />
              <div className="flex flex-col gap-2 pb-8">
                <Phone src="/VibeFeedBright.png" alt="Vibes Feed" dark={false} className="w-[150px]" />
                <p className="text-center text-xs text-gray-400 font-medium">Vibes Feed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARKETPLACE & HOUSING — DARK
          Screenshots: marketplaceDark + MarketplaceBright
      ══════════════════════════════════════════════════════ */}
      <section className="section-dark py-28 relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-80 h-80 bg-orange-600/6 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            {/* Two marketplace phones — dark + light */}
            <div className="flex justify-center gap-5 items-end order-2 md:order-1">
              <Phone src="/MarketplaceBright.png" alt="Marketplace Light" dark={false} className="w-[150px] mb-6" />
              <Phone src="/marketplaceDark.png" alt="Marketplace Dark" dark={true} className="w-[170px]" />
            </div>

            <div className="order-1 md:order-2">
              <span className="badge-dark mb-5 inline-flex">🛒 Buy, Sell & Housing</span>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl mt-4 mb-5">
                The student{" "}
                <span className="gradient-text-dark">marketplace & housing hub</span>
              </h2>
              <p className="text-white/40 leading-8 mb-7">
                More than just listings. Buy and sell anything as a student, and find
                your next place to live — all within your verified campus community.
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

      {/* ══════════════════════════════════════════════════════
          LOOPS & CHAT — LIGHT
          Screenshots: LoopBright + chatBright
      ══════════════════════════════════════════════════════ */}
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
                Loops are campus-verified groups where students meet, share, and organise.
                Chat is instant — one-on-one or in groups, with image and video support.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🗺", text: "Interactive map showing active loops near you" },
                  { icon: "✅", text: "University verification badge on every loop" },
                  { icon: "🔍", text: "Filter loops by university for purely local groups" },
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

            {/* LoopBright + chatBright */}
            <div className="flex justify-center gap-5 items-end">
              <Phone src="/LoopBright.png" alt="Loops" dark={false} className="w-[155px]" />
              <Phone src="/chatBright.png" alt="Chat" dark={false} className="w-[155px] mb-5" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIBES & PROFILE — DARK
          Screenshots: VibeFeedDark + ProfileDark
      ══════════════════════════════════════════════════════ */}
      <section className="section-dark py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            <div>
              <span className="badge-dark mb-5 inline-flex">🔥 Vibes & Profile</span>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl mt-4 mb-5">
                Your campus{" "}
                <span className="gradient-text-dark">social identity</span>
              </h2>
              <p className="text-white/40 leading-8 mb-7">
                Build your campus presence. Vibe with people you connect with and watch
                your personalised feed come alive. Your profile shows your posts, listings,
                and the people who vibe with you.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🔥", text: "Vibe with anyone — your own campus follow system" },
                  { icon: "👥", text: "See who's vibing you and who you're vibing" },
                  { icon: "📌", text: "Profile shows posts, listings, and vibe count" },
                  { icon: "💬", text: "Message anyone directly from their profile" },
                  { icon: "🔒", text: "Block and report tools for a safe experience" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VibeFeedDark + ProfileDark */}
            <div className="flex justify-center gap-5 items-end">
              <Phone src="/VibeFeedDark.png" alt="Vibes Feed Dark" dark={true} className="w-[155px] mb-5" />
              <Phone src="/ProfileDark.png" alt="Profile Dark" dark={true} className="w-[155px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SPILL THE TEA — DARK (deep warm)
          Screenshot: Anonymous.png
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #100800, #0d0d0d 60%)" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700/8 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            {/* Anonymous.png — centred, prominent */}
            <div className="flex justify-center order-2 md:order-1">
              <Phone src="/Anonymous.png" alt="Spill the Tea — Anonymous Posts" dark={true} className="w-[220px] md:w-[240px]" />
            </div>

            <div className="order-1 md:order-2">
              <span className="badge-dark mb-5 inline-flex">☕ Premium Feature</span>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl mt-4 mb-3">
                Spill the{" "}
                <span className="gradient-text-dark">Tea</span>
              </h2>
              <p className="text-base text-orange-400/60 font-semibold mb-5 italic">
                &quot;Anonymous. 24 hours. Campus-only.&quot;
              </p>
              <p className="text-white/40 leading-8 mb-7">
                Got something to say but don&apos;t want your name on it? Tea posts are
                completely anonymous, disappear after 24 hours, and are visible only
                to your campus. React, reply, keep it messy — no one will ever know it
                was you. Exclusive to Premium members.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: "🔒", text: "Fully anonymous" },
                  { icon: "⏳", text: "24-hour posts" },
                  { icon: "🎓", text: "Campus-only" },
                  { icon: "🔥", text: "React & reply" },
                  { icon: "⭐", text: "Premium only" },
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

      {/* ══════════════════════════════════════════════════════
          DARK MODE SHOWCASE — DARK
          Screenshots: HomeDark, marketplaceDark, VibeFeedDark, ProfileDark
          Side-by-side with light counterparts to show the difference
      ══════════════════════════════════════════════════════ */}
      <section className="section-dark-warm py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center mb-14">
            <span className="badge-dark mb-5 inline-flex">🌙 Dark Mode</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl mt-4">
              Beautiful at midnight.{" "}
              <span className="gradient-text-dark">Beautiful at noon.</span>
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-xl mx-auto">
              MyUniLoop adapts to your system theme automatically. Every screen, every
              colour, every card — perfectly tuned for dark mode.
            </p>
          </div>

          {/* 4 dark mode phones */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-16">
            {[
              { src: "/HomeDark.png",        label: "Home Feed",   desc: "Dark mode feed" },
              { src: "/marketplaceDark.png", label: "Marketplace", desc: "Dark listings" },
              { src: "/VibeFeedDark.png",    label: "Vibes Feed",  desc: "Dark vibes" },
              { src: "/ProfileDark.png",     label: "Profile",     desc: "Dark profile" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <Phone src={s.src} alt={s.label} dark={true} className="w-full max-w-[140px]" />
                <div className="text-center">
                  <p className="text-xs font-bold text-white/55">{s.label}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Light vs Dark comparison row */}
          <div className="divider-dark mb-12" />
          <p className="text-center text-sm text-white/30 font-semibold mb-10 tracking-wide uppercase">Light vs Dark — Same screen, both modes</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10 justify-items-center">
            {[
              { light: "/HomeBright.png",     dark: "/HomeDark.png",        label: "Home Feed" },
              { light: "/VibeFeedBright.png", dark: "/VibeFeedDark.png",    label: "Vibes Feed" },
              { light: "/MarketplaceBright.png", dark: "/marketplaceDark.png", label: "Marketplace" },
              { light: "/ProfileBright.png",  dark: "/ProfileDark.png",     label: "Profile" },
            ].map((pair) => (
              <div key={pair.label} className="flex flex-col items-center gap-3 w-full max-w-[180px]">
                <div className="flex gap-2 w-full justify-center">
                  <Phone src={pair.light} alt={`${pair.label} light`} dark={false} className="w-[72px] sm:w-[80px]" />
                  <Phone src={pair.dark}  alt={`${pair.label} dark`}  dark={true}  className="w-[72px] sm:w-[80px]" />
                </div>
                <p className="text-[11px] font-semibold text-white/35 text-center">{pair.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROFILE SPOTLIGHT — LIGHT
          Screenshots: ProfileBright (large) + ProfileDark (side)
      ══════════════════════════════════════════════════════ */}
      <section className="section-light py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            {/* ProfileBright large + ProfileDark smaller offset */}
            <div className="flex justify-center gap-4 items-end">
              <Phone src="/ProfileBright.png" alt="Profile Light Mode" dark={false} className="w-[175px]" />
              <Phone src="/ProfileDark.png"   alt="Profile Dark Mode"  dark={true}  className="w-[150px] mb-8" />
            </div>

            <div>
              <span className="badge-light mb-5 inline-flex">👤 Your Campus Profile</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl mt-4 mb-5">
                Your campus{" "}
                <span className="gradient-text">social identity</span>
              </h2>
              <p className="text-gray-500 leading-8 mb-7">
                Your profile is your campus card. Showcase your posts, marketplace
                listings, vibe count, and university — in both beautiful light and dark mode.
              </p>
              <ul className="space-y-3.5">
                {[
                  { icon: "🎓", text: "University badge on every profile" },
                  { icon: "🔥", text: "Vibe count — your campus social score" },
                  { icon: "📋", text: "Posts and listings all in one place" },
                  { icon: "💬", text: "Tap to message directly from any profile" },
                  { icon: "🌙", text: "Perfectly styled in both light and dark mode" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — LIGHT WARM
      ══════════════════════════════════════════════════════ */}
      <section className="section-light-warm py-28 relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-orange-50 rounded-full blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <span className="badge-light mb-6 inline-flex">🍎 Available on iOS</span>
          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-6xl mt-4 mb-5">
            Ready to join your{" "}
            <span className="gradient-text">campus?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Download MyUniLoop and connect with thousands of students at your
            university — wherever in the world that campus is.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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

          <p className="mt-8 text-sm text-gray-300">iOS · iPhone · Dark Mode · Multi-Country · Student-Verified</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT — DARK
      ══════════════════════════════════════════════════════ */}
      <section className="section-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-white/30 text-sm leading-8">
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
