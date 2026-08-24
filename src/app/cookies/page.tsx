import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
            Browser Storage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm">
            <p>
              This Cookie Policy explains how <strong>Glam and Go London</strong> uses cookies and similar browser tracking technologies to store configuration settings and provide user experience optimizations.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you browse websites. They help the site identify active logins, hold item cart contents, or remember dark/light theme choices.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">2. How We Use Cookies</h2>
            <p>
              We use first-party, essential cookies to store styling choices (such as preserving your dark mode toggle configuration across page shifts) and coordinate security during credit card booking transactions.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">3. Managing Cookie Preferences</h2>
            <p>
              You can choose to disable cookies at any time through your individual web browser settings. Please note that disabling essential cookies may impact checkout functionality and disable auto-login controls.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
