import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  const lastUpdated = "March 18, 2026";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-[#021C1E]">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-xl font-bold text-slate-400 mb-12 tracking-tight uppercase">Last Updated: {lastUpdated}</p>

        <div className="prose prose-teal max-w-none space-y-12 text-[#021C1E]/80">
          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using ClubHub, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use the application or website.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">2. Community Guidelines & UGC</h2>
            <p className="leading-relaxed mb-6 font-medium">
              ClubHub is built for students. To ensure a positive experience, we enforce a zero-tolerance policy for objectionable User Generated Content (UGC):
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold text-[#021C1E]">Prohibited Content:</span> You may not post any content that is abusive, offensive, harassing, defamatory, or otherwise inappropriate.
              </li>
              <li>
                <span className="font-bold text-[#021C1E]">Language Standards:</span> Our platform includes mechanisms to detect and restrict common abusive or curse words. Such content is strictly prohibited.
              </li>
              <li>
                <span className="font-bold text-[#021C1E]">Enforcement:</span> We reserve the right to remove any content and suspend or terminate accounts that violate these guidelines.
              </li>
              <li>
                <span className="font-bold text-[#021C1E]">UGC Definition:</span> Includes but is not limited to posts, comments, public messages, articles, images, and similar user-submitted material.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">3. Reporting Violations</h2>
            <p className="leading-relaxed">
              Users are encouraged to report any violations of these terms immediately using the in-app flagging tools. We investigate all reports and take appropriate action to protect our community members.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">4. Account Responsibility</h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              ClubHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
