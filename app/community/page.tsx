import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Guidelines — MyUniLoop",
  description:
    "MyUniLoop's Community Guidelines. We have zero tolerance for objectionable content, harassment, or abusive behaviour.",
}

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Safety</p>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Community Guidelines</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
      </div>

      {/* Zero-tolerance banner */}
      <div className="mb-10 p-5 bg-red-50 rounded-2xl border border-red-100 flex gap-4 items-start">
        <span className="text-2xl mt-0.5">🚫</span>
        <div>
          <p className="font-bold text-red-700 mb-1">Zero-Tolerance Policy</p>
          <p className="text-red-600 text-sm leading-relaxed">
            MyUniLoop has <strong>zero tolerance</strong> for objectionable content, hate speech,
            harassment, or abusive behaviour. Violations result in <strong>immediate content
            removal and permanent account ban</strong>. All reports are reviewed by our moderation
            team within <strong>24 hours</strong>.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-gray-600 leading-8">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who These Guidelines Apply To</h2>
          <p>
            These Community Guidelines apply to every person who uses MyUniLoop — including
            the feed, Teapot anonymous posts, Loops, Marketplace, and private messages. By
            creating an account you agree to follow these guidelines at all times.
          </p>
          <p className="mt-3">
            MyUniLoop is intended for users aged <strong>17 and older</strong>. Accounts found
            to belong to users under 17 will be removed immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Objectionable Content</h2>
          <p className="mb-3">
            The following types of content are <strong>strictly prohibited</strong> and will be
            removed immediately. The account responsible will be permanently banned:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nudity &amp; Sexual Content</strong> — Explicit sexual imagery, solicitation,
              or content of a sexual nature involving minors (child sexual abuse material is
              reported to the relevant authorities immediately).
            </li>
            <li>
              <strong>Hate Speech</strong> — Content that promotes discrimination, hatred, or
              violence against individuals or groups based on race, ethnicity, religion, gender,
              sexual orientation, disability, or national origin.
            </li>
            <li>
              <strong>Harassment &amp; Bullying</strong> — Targeted harassment, threats, stalking,
              doxxing (sharing someone's private information without consent), or sustained
              hostile behaviour directed at any person.
            </li>
            <li>
              <strong>Violence &amp; Threats</strong> — Graphic violent content, threats of
              physical harm, glorification of violence, or content that incites others to
              commit violent acts.
            </li>
            <li>
              <strong>Misinformation</strong> — Deliberately false information that could cause
              harm, including impersonation of real individuals, institutions, or public figures.
            </li>
            <li>
              <strong>Spam &amp; Manipulation</strong> — Repetitive unsolicited messages,
              artificial engagement, scam links, or coordinated inauthentic behaviour.
            </li>
            <li>
              <strong>Illegal Content</strong> — Content that promotes or facilitates illegal
              activity, including the sale of prohibited items, drug trafficking, or fraud.
            </li>
            <li>
              <strong>Intellectual Property Violations</strong> — Posting content you do not
              own or have rights to, including copyrighted material shared without permission.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Anonymous Posting (Teapot)</h2>
          <p>
            The Teapot feature allows Premium subscribers to post content without displaying
            their identity publicly. Anonymous posting does <strong>not</strong> exempt you from
            these guidelines.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Your account is always linked to your anonymous posts on our servers</li>
            <li>
              Reports of abusive anonymous content will be investigated and the responsible
              account actioned accordingly
            </li>
            <li>
              Anonymous posts expire after 24 hours and cannot be used to target, harass, or
              intimidate specific individuals
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Marketplace Rules</h2>
          <p className="mb-3">
            The Marketplace is for legitimate student-to-student transactions. You may not list:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Counterfeit or stolen goods</li>
            <li>Prohibited, illegal, or regulated items (weapons, drugs, etc.)</li>
            <li>Items with deliberately misleading descriptions or photos</li>
            <li>Digital goods, accounts, or services designed to deceive</li>
          </ul>
          <p className="mt-3">
            Fraudulent listings will be removed and the account permanently banned. We encourage
            users to meet in safe, public locations for in-person transactions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Loops &amp; Group Spaces</h2>
          <p>
            Group admins are responsible for moderating content within their Loops. Groups that
            consistently host content violating these guidelines will be disbanded and their
            admins banned. MyUniLoop reserves the right to remove any group at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. How to Report Objectionable Content</h2>
          <p className="mb-3">
            You can report any post, listing, group, or user directly in the app:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Post or Listing</strong> — Tap the <strong>⋯</strong> menu on the content
              and select <em>Report</em>
            </li>
            <li>
              <strong>User</strong> — Visit the user&apos;s profile, tap the <strong>⋯</strong> menu
              and select <em>Report User</em>
            </li>
            <li>
              <strong>Group / Loop</strong> — Open the group, tap the <strong>⋯</strong> menu
              and select <em>Report Group</em>
            </li>
            <li>
              <strong>Email</strong> — For urgent or sensitive reports, contact us directly at{" "}
              <a
                href="mailto:myuniloop@leeban.com"
                className="text-orange-500 hover:underline font-medium"
              >
                myuniloop@leeban.com
              </a>
            </li>
          </ul>
          <p className="mt-3">
            All reports are confidential. We review every report and take action within{" "}
            <strong>24 hours</strong>. Repeated false or malicious reports may result in
            action against the reporting account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Blocking Users</h2>
          <p>
            You can block any user from your profile. Blocked users cannot see your posts,
            message you, or interact with your content. To block someone, visit their profile
            and select <em>Block User</em> from the menu. You can manage your blocked list in
            Settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Removing Content from Your Feed</h2>
          <p>
            You can immediately remove any post from your feed by tapping the <strong>⋯</strong>{" "}
            menu on the post and selecting <em>Not Interested</em>. The post is hidden from
            your feed instantly and will not reappear.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Enforcement &amp; Consequences</h2>
          <p className="mb-3">
            When a violation is confirmed, we take one or more of the following actions depending
            on the severity:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="font-semibold text-gray-800">Content Removal</p>
                <p className="text-sm text-gray-600">
                  The specific post, listing, or message is removed immediately.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <span className="text-lg">🔇</span>
              <div>
                <p className="font-semibold text-gray-800">Temporary Suspension</p>
                <p className="text-sm text-gray-600">
                  The account is suspended for a defined period, during which the user cannot
                  post or interact.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
              <span className="text-lg">🚫</span>
              <div>
                <p className="font-semibold text-gray-800">Permanent Ban</p>
                <p className="text-sm text-gray-600">
                  Severe or repeat violations result in a permanent account ban. The user is
                  ejected from the platform immediately.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-red-100 rounded-xl border border-red-200">
              <span className="text-lg">🚨</span>
              <div>
                <p className="font-semibold text-gray-800">Law Enforcement Referral</p>
                <p className="text-sm text-gray-600">
                  Content involving illegal activity, credible threats of violence, or child
                  sexual abuse material is reported to the relevant law enforcement authorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Account Appeals</h2>
          <p>
            If you believe your account was suspended or banned in error, you may submit an
            appeal through the app or by emailing{" "}
            <a
              href="mailto:myuniloop@leeban.com?subject=Account%20Appeal"
              className="text-orange-500 hover:underline font-medium"
            >
              myuniloop@leeban.com
            </a>{" "}
            with the subject line <em>Account Appeal</em>. Please include your username and a
            brief explanation. We will review your appeal within 48 hours.
          </p>
          <p className="mt-3">
            Appeals for accounts banned for CSAM, credible threats of violence, or hate speech
            will not be considered.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to These Guidelines</h2>
          <p>
            We may update these Community Guidelines from time to time to reflect the evolving
            needs of our community. We will notify you of significant changes via an in-app
            notice or by updating the date at the top of this page. Continued use of MyUniLoop
            after changes are posted constitutes acceptance of the updated guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact &amp; Reporting</h2>
          <p>
            For any safety concern, abuse report, or question about these guidelines, please
            reach out to our team:
          </p>
          <div className="mt-4 p-5 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="font-bold text-gray-900">MyUniLoop Safety Team</p>
            <p className="text-gray-500 text-sm mb-2">
              Leeban Soft. Dev. (SMC-Private) Limited
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href="mailto:myuniloop@leeban.com"
                className="text-orange-500 hover:underline"
              >
                myuniloop@leeban.com
              </a>
            </p>
            <p className="text-gray-600">Website: www.myuniloop.com</p>
            <p className="mt-3 text-sm text-gray-500">
              We respond to all reports within <strong className="text-gray-700">24 hours</strong>.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
