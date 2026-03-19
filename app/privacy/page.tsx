import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const lastUpdated = "March 18, 2026";
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-[#021C1E]">
          Privacy <span className="text-teal-600">Policy</span>
        </h1>
        <p className="text-zinc-500 mb-12 font-medium">Last Updated: {lastUpdated}</p>
        
        <div className="prose prose-teal max-w-none space-y-12 text-[#021C1E]/80">
          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to ClubHub. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">2. Data Collection</h2>
            <p className="leading-relaxed">
              We collect information that you provide directly to us when you create an account, join a club, or participate in events. This includes your name, email address, university affiliation, and any User Generated Content (UGC) you submit.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-teal-50 border border-teal-100">
            <h2 className="text-2xl font-black mb-4 text-teal-900">3. User Generated Content (UGC) Safety</h2>
            <p className="leading-relaxed mb-6 text-teal-800 font-medium">
              To maintain a safe and inclusive environment for all students, ClubHub implements strict UGC safety protocols as required by global safety standards:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-teal-900/80">
              <li>
                <span className="font-bold">Reporting & Flagging:</span> Users have the ability to report or flag any content (posts, comments, messages, images) that they find inappropriate, offensive, or in violation of our Community Guidelines.
              </li>
              <li>
                <span className="font-bold">Blocking Users:</span> Every user has the option to block other users who engage in abusive or inappropriate behavior. Once blocked, the abusive user will no longer be able to interact with you.
              </li>
              <li>
                <span className="font-bold">Content Moderation:</span> We employ automated and manual mechanisms to detect and prevent the posting of objectionable content, including abusive language, offensive material, and curse words.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">4. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights or have questions about our data practices, please contact us at support@clubhub.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-[#021C1E]">5. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
