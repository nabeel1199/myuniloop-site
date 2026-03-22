export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">
          MyUniLoop
        </h1>

        <p className="text-lg max-w-xl text-gray-600 mb-8">
          The all-in-one social and marketplace app built for university students.
          Connect, buy, sell, and interact — all in one place.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Coming Soon on iOS
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="p-6 rounded-xl shadow bg-white">
          <h3 className="font-semibold text-lg mb-2">Connect</h3>
          <p className="text-gray-600 text-sm">
            Meet students, share posts, and interact with your university community.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h3 className="font-semibold text-lg mb-2">Marketplace</h3>
          <p className="text-gray-600 text-sm">
            Buy, sell, and rent items easily within your campus.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h3 className="font-semibold text-lg mb-2">Chat</h3>
          <p className="text-gray-600 text-sm">
            Message instantly with buyers, sellers, and friends.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2026 MyUniLoop · Built by Leeban Soft Dev
      </footer>

    </main>
  )
}