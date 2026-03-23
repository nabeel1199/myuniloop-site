import Link from "next/link"

const features = [
  {
    title: "Student Community",
    text: "Share updates, connect with other students, and stay part of your campus circle.",
  },
  {
    title: "Marketplace",
    text: "Buy, sell, and discover useful items within your university community.",
  },
  {
    title: "Instant Chat",
    text: "Message buyers, sellers, and friends directly inside the app.",
  },
]

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              Built for university students
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Your campus life,
              <span className="block text-orange-500">all in one app.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              MyUniLoop combines social connection, student marketplace activity,
              and direct messaging into one simple platform made for university life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#coming-soon"
                className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                Join the waitlist
              </a>

              <Link
                href="/about"
                className="rounded-2xl border border-orange-200 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/40">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-200" />
                <div className="h-3 w-3 rounded-full bg-orange-300" />
                <div className="h-3 w-3 rounded-full bg-orange-400" />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-orange-600">Feed</p>
                  <p className="mt-2 text-gray-700">
                    Discover updates, posts, and conversations from your student community.
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-orange-600">Loop Marketplace</p>
                  <p className="mt-2 text-gray-700">
                    Find books, furniture, electronics, rentals, and student deals around campus.
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-orange-600">Messaging</p>
                  <p className="mt-2 text-gray-700">
                    Chat instantly with sellers, buyers, and friends without leaving the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        How MyUniLoop works
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Simple, fast, and built around student needs.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold">Join your campus</h3>
        <p className="mt-2 text-gray-600">
          Sign up and connect with students in your university community.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold">Explore & interact</h3>
        <p className="mt-2 text-gray-600">
          Discover posts, listings, and people around your campus.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold">Buy, sell, connect</h3>
        <p className="mt-2 text-gray-600">
          Chat, trade items, and stay connected — all in one place.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-orange-50">
  <div className="mx-auto max-w-6xl px-6 py-20 text-center">
    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
      Designed for real student life
    </h2>

    <p className="mt-4 text-lg text-gray-600">
      A simple, modern interface built to make campus interaction effortless.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="h-64 rounded-3xl bg-white border border-orange-100 flex items-center justify-center text-gray-400">
        App Screen 1
      </div>

      <div className="h-64 rounded-3xl bg-white border border-orange-100 flex items-center justify-center text-gray-400">
        App Screen 2
      </div>

      <div className="h-64 rounded-3xl bg-white border border-orange-100 flex items-center justify-center text-gray-400">
        App Screen 3
      </div>
    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">
    See MyUniLoop in action
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl shadow p-4">
      <img src="/app1.png" className="rounded-xl" />
      <p className="mt-3 text-sm text-gray-600">Feed & posts</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-4">
      <img src="/app2.png" className="rounded-xl" />
      <p className="mt-3 text-sm text-gray-600">Marketplace</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-4">
      <img src="/app3.png" className="rounded-xl" />
      <p className="mt-3 text-sm text-gray-600">Chat</p>
    </div>
  </div>
</section>

<section className="bg-white">
  <div className="mx-auto max-w-4xl px-6 py-20 text-center">
    <h2 className="text-3xl font-bold text-gray-900">
      Built with purpose
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-8">
      MyUniLoop is developed by Leeban Soft Dev with the goal of improving
      how students connect, trade, and communicate within their campus environment.
    </p>

    <p className="mt-4 text-gray-500">
      Designed for real-world student needs, not just another social app.
    </p>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything students actually need
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built to make campus life more connected, more practical, and easier to manage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="coming-soon" className="bg-orange-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Launching soon
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            MyUniLoop is currently in active development and preparing for release.
          </p>
          <p className="mt-2 text-gray-500">
            More product details, support information, and official release links will be added here.
          </p>
        </div>
      </section>
    </main>
  )
}