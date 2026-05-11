import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Copyright — MyUniLoop",
  description: "Copyright and intellectual property notice for MyUniLoop.",
}

export default function CopyrightPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Legal</p>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Copyright Notice</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
      </div>

      <div className="space-y-10 text-gray-600 leading-8">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ownership</h2>
          <p>
            © 2026 Leeban Soft. Dev. (SMC-Private) Limited. All rights reserved.
          </p>
          <p className="mt-3">
            MyUniLoop, including its name, logo, mascot (Loopi), app design, user interface,
            source code, and all associated content, is the intellectual property of{" "}
            <strong>Leeban Soft. Dev. (SMC-Private) Limited</strong> and is protected by
            copyright, trademark, and other applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">App & Software</h2>
          <p>
            The MyUniLoop mobile application and website are proprietary software owned and operated
            by Leeban Soft. Dev. (SMC-Private) Limited. You may not copy, modify, distribute, sell,
            reverse engineer, or create derivative works based on any part of the application or its
            source code without express written permission from Leeban Soft. Dev. (SMC-Private) Limited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Brand & Mascot</h2>
          <p>
            The MyUniLoop name, logo, and mascot character &quot;Loopi&quot; are original works owned
            exclusively by Leeban Soft. Dev. (SMC-Private) Limited. Unauthorised use, reproduction,
            or distribution of these brand assets is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">User-Generated Content</h2>
          <p>
            Content submitted by users (posts, photos, videos, messages, listings) remains the
            intellectual property of the respective user. By submitting content to MyUniLoop, you
            grant us a non-exclusive, royalty-free, worldwide licence to use, display, and
            distribute your content solely for the purpose of operating and promoting the Service.
          </p>
          <p className="mt-3">
            You represent and warrant that you own or have the necessary rights to the content
            you submit, and that it does not infringe the intellectual property rights of any
            third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Content</h2>
          <p>
            MyUniLoop may reference or integrate third-party services and technologies. All
            third-party names, logos, and trademarks are the property of their respective owners.
            Their inclusion does not imply endorsement or affiliation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Reporting Infringement</h2>
          <p>
            If you believe that any content on MyUniLoop infringes your intellectual property
            rights, please contact us with the following information:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>A description of the copyrighted work you believe has been infringed</li>
            <li>The specific location of the infringing content within the app</li>
            <li>Your contact information</li>
            <li>A statement that you have a good-faith belief the use is not authorised</li>
          </ul>
          <div className="mt-6 p-5 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="font-bold text-gray-900">Leeban Soft. Dev. (SMC-Private) Limited</p>
            <p className="text-gray-600 mt-1">
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
