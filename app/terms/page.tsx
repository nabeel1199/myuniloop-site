import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use — MyUniLoop",
  description: "Terms and conditions for using MyUniLoop.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Legal</p>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
      </div>

      <div className="space-y-10 text-gray-600 leading-8">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the MyUniLoop mobile application or website
            (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Use
            (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
          </p>
          <p className="mt-3">
            The Service is operated by <strong>Leeban Soft. Dev. (SMC-Private) Limited</strong>{" "}
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms constitute a legally binding agreement between
            you and Leeban Soft. Dev. (SMC-Private) Limited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Eligibility</h2>
          <p>
            You must be at least 17 years of age to use MyUniLoop. By using the Service, you
            represent and warrant that you meet this age requirement. We reserve the right to
            terminate accounts of users found to be underage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account. You agree to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Provide accurate and complete information when creating your account</li>
            <li>Keep your account information up to date</li>
            <li>Not share your account with any other person</li>
            <li>Notify us immediately of any unauthorised use of your account</li>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate your account at any time for violations
            of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Acceptable Use</h2>
          <p className="mb-3">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or obscene</li>
            <li>Impersonate any person or entity, or falsely claim an affiliation with any university</li>
            <li>Post spam, unsolicited advertisements, or repetitive content</li>
            <li>Upload malware, viruses, or any malicious code</li>
            <li>Attempt to gain unauthorised access to other accounts or our systems</li>
            <li>Scrape, crawl, or harvest data from the Service without our written permission</li>
            <li>Use the Service for any unlawful commercial purpose</li>
            <li>Violate the intellectual property rights of any third party</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Premium Subscriptions</h2>
          <p>
            MyUniLoop offers an optional auto-renewable Premium subscription (&quot;MyUniLoop
            Premium&quot;) that unlocks additional features including the Teapot (anonymous posts)
            and other exclusive content.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Subscription plans:</strong> Monthly (RM 11.00/month) and 3-Month
              (RM 9.99/month, billed as RM 29.97 every 3 months)
            </li>
            <li>
              <strong>Auto-renewal:</strong> Subscriptions automatically renew unless cancelled
              at least 24 hours before the end of the current period
            </li>
            <li>
              <strong>Billing:</strong> Payment is charged to your Apple ID account at
              confirmation of purchase
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel anytime via your Apple ID account
              settings. Cancellation takes effect at the end of the current billing period
            </li>
            <li>
              <strong>Refunds:</strong> Refunds are handled by Apple in accordance with their
              App Store refund policy
            </li>
            <li>
              <strong>Free trials:</strong> If a free trial is offered, unused portions are
              forfeited upon purchase of a subscription
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. User-Generated Content</h2>
          <p>
            You retain ownership of content you submit to the Service. By posting content, you
            grant Leeban Soft. Dev. (SMC-Private) Limited a non-exclusive, royalty-free,
            worldwide licence to use, display, and distribute your content solely for the
            purpose of operating and improving the Service.
          </p>
          <p className="mt-3">
            You are solely responsible for the content you post. We reserve the right to remove
            any content that violates these Terms or our Community Guidelines without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Marketplace Transactions</h2>
          <p>
            MyUniLoop provides a platform for students to buy and sell items. We are not a party
            to any transaction between users. We do not verify the condition, safety, or
            legality of items listed. You agree to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Only list items you legally own and have the right to sell</li>
            <li>Not list prohibited, counterfeit, stolen, or illegal items</li>
            <li>Conduct transactions at your own risk</li>
          </ul>
          <p className="mt-3">
            We are not responsible for any losses arising from marketplace transactions between users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Anonymous Features</h2>
          <p>
            The Teapot anonymous posting feature (available to Premium subscribers) allows you
            to post content without your identity being publicly displayed. However, your account
            information remains associated with your anonymous posts on our servers for safety
            and moderation purposes. Anonymity does not exempt you from these Terms or our
            Community Guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Service — including but not limited
            to the MyUniLoop name, logo, mascot (Loopi), design, source code, and text — are
            owned by Leeban Soft. Dev. (SMC-Private) Limited and are protected by copyright,
            trademark, and other intellectual property laws.
          </p>
          <p className="mt-3">
            You may not copy, modify, distribute, sell, or reverse engineer any part of the
            Service without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            express or implied. We do not warrant that the Service will be uninterrupted,
            error-free, or free of viruses or other harmful components. Your use of the Service
            is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Leeban Soft. Dev. (SMC-Private)
            Limited shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your use of the Service, including but not limited
            to loss of data, loss of profits, or business interruption.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Service at our sole
            discretion, with or without notice, for any violation of these Terms or for any
            other reason we deem appropriate. Upon termination, your right to use the Service
            will immediately cease.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of significant
            changes by updating the date at the top of this page or through an in-app
            notification. Your continued use of the Service after changes are posted constitutes
            your acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of Pakistan,
            without regard to its conflict of law principles. Any disputes arising from these
            Terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">15. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="mt-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="font-bold text-gray-900">Leeban Soft. Dev. (SMC-Private) Limited</p>
            <p className="text-gray-500 text-sm mb-2">Operating MyUniLoop</p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:info@leeban.com" className="text-orange-500 hover:underline">
                info@leeban.com
              </a>
            </p>
            <p className="text-gray-600">Website: www.myuniloop.com</p>
          </div>
        </section>

      </div>
    </main>
  )
}
