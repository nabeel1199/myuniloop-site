import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — MyUniLoop",
  description: "Get in touch with the MyUniLoop team.",
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Get In Touch</p>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-base leading-7">
          Have a question, a bug to report, or a partnership idea? We&apos;d love to hear from you.
          MyUniLoop is developed and operated by{" "}
          <span className="font-semibold text-gray-700">Leeban Soft. Dev. (SMC-Private) Limited</span>.
        </p>
      </div>

      <div className="space-y-6">

        {/* General Support */}
        <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">General Enquiries &amp; Support</p>
          <p className="text-gray-600 text-sm mb-3">
            For app support, account issues, content reports, or any general questions about MyUniLoop.
          </p>
          <a
            href="mailto:info@leeban.com"
            className="text-orange-500 font-semibold hover:underline text-base"
          >
            info@leeban.com
          </a>
        </div>

        {/* Director / Business */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Business, Legal &amp; Partnerships</p>
          <p className="text-gray-600 text-sm mb-3">
            For business inquiries, partnership opportunities, press, or legal matters — contact the Director directly.
          </p>
          <a
            href="mailto:nabeelkhan@leeban.com"
            className="text-gray-800 font-semibold hover:text-orange-500 transition-colors text-base"
          >
            nabeelkhan@leeban.com
          </a>
        </div>

        {/* Company Info */}
        <div className="p-6 rounded-2xl border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Company</p>
          <p className="font-bold text-gray-900">Leeban Soft. Dev. (SMC-Private) Limited</p>
          <p className="text-gray-500 text-sm mt-1">Website: www.myuniloop.com</p>
        </div>

      </div>
    </main>
  )
}