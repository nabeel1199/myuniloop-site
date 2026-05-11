import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — MyUniLoop",
  description: "How MyUniLoop collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Legal</p>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
      </div>

      <div className="space-y-10 text-gray-600 leading-8">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Welcome to MyUniLoop (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy explains how we
            collect, use, store, and share your information when you use our mobile application
            and related services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mt-3">
            By using MyUniLoop, you agree to the collection and use of information as described
            in this policy. If you do not agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account Information:</strong> Your name, email address, username, university,
              age, gender, and profile photo when you create an account.
            </li>
            <li>
              <strong>User Content:</strong> Posts, photos, videos, comments, messages, marketplace
              listings, and any other content you submit to the Service.
            </li>
            <li>
              <strong>Location Data:</strong> Approximate or precise location when you use
              location-based features such as Vibes or marketplace filtering. We only access
              location with your permission.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system, and device
              identifiers used to operate the app and improve performance.
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with the app — features used, screens
              visited, and actions taken — to improve the Service.
            </li>
            <li>
              <strong>Payment Information:</strong> If you purchase a MyUniLoop Premium subscription
              or create sponsored posts, payment is processed securely via Apple In-App Purchases
              or Stripe. We do not store your full card details.
            </li>
            <li>
              <strong>Phone Number:</strong> If you choose to verify your account via phone
              number, we collect and verify it through Firebase Authentication.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account</li>
            <li>Provide, operate, and improve the Service</li>
            <li>Personalise your feed and content recommendations</li>
            <li>Enable real-time messaging, Loops, and social features</li>
            <li>Process premium subscriptions and payments</li>
            <li>Send notifications about activity, messages, and updates</li>
            <li>Moderate content and enforce our Community Guidelines</li>
            <li>Detect and prevent fraud, abuse, and security threats</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Anonymous Features (Teapot)</h2>
          <p>
            MyUniLoop includes an anonymous posting feature called the Teapot. While your identity
            is not displayed publicly on anonymous posts, your account information is still
            associated with your content on our servers for moderation and safety purposes.
            Anonymous posts expire automatically after a set period.
          </p>
          <p className="mt-3">
            We may use anonymous post data to investigate reports of abuse, harassment, or
            violations of our Community Guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. How We Share Your Information</h2>
          <p className="mb-3">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors that help us operate the
              Service, including Firebase (Google) for authentication and database storage,
              RevenueCat for subscription management, and Stripe for payment processing.
            </li>
            <li>
              <strong>Other Users:</strong> Content you post publicly (posts, marketplace listings,
              profile) is visible to other users of the Service.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required
              by law, court order, or to protect the rights and safety of our users or the public.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as
            needed to provide the Service. You may request deletion of your account and
            associated data at any time by contacting us. Some data may be retained for a
            limited period for legal and safety purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@myuniloop.com" className="text-orange-500 hover:underline">
              support@myuniloop.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children&apos;s Privacy</h2>
          <p>
            MyUniLoop is intended for users aged 17 and older. We do not knowingly collect
            personal information from children under 17. If we become aware that a child under
            17 has provided us with personal information, we will take steps to delete such
            information promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Security</h2>
          <p>
            We implement industry-standard security measures to protect your information,
            including encrypted data transmission (HTTPS/TLS) and secure cloud infrastructure
            provided by Google Firebase. However, no method of transmission over the internet
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Third-Party Services</h2>
          <p className="mb-3">
            MyUniLoop uses the following third-party services, each with their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://firebase.google.com/support/privacy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Firebase
              </a>{" "}— Authentication, database, and storage
            </li>
            <li>
              <a href="https://www.revenuecat.com/privacy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                RevenueCat
              </a>{" "}— Subscription management
            </li>
            <li>
              <a href="https://stripe.com/privacy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Stripe
              </a>{" "}— Payment processing
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by updating the date at the top of this page or through an
            in-app notification. Your continued use of the Service after changes are posted
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy,
            please contact us at:
          </p>
          <div className="mt-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="font-bold text-gray-900">MyUniLoop</p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:support@myuniloop.com" className="text-orange-500 hover:underline">
                support@myuniloop.com
              </a>
            </p>
            <p className="text-gray-600">Website: www.myuniloop.com</p>
          </div>
        </section>

      </div>
    </main>
  )
}
