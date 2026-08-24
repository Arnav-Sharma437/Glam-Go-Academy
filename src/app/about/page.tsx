import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-32 pb-24 font-sans text-text">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2 block">
            About Our Academy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Glam and Go London
          </h1>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm">
            <p>
              Welcome to <strong>Glam and Go London</strong>, a premier beauty education hub located in the heart of Central London. We specialize in providing intensive, hands-on cosmetics training, wellness injections, and advanced skin therapies.
            </p>
            <p>
              Our academy is dedicated to training aspiring aesthetics practitioners, salon staff, and beauty specialists. We bridge the gap between classroom theory and real-world clinical practice by matching classroom modules with supervised live model sessions in our sterile Soho studio.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">Our Training Philosophy</h2>
            <p>
              We believe that cosmetic education should focus heavily on safety, anatomy understanding, and actual hands-on injection technique. That is why all of our needle-based courses are kept in small, structured student groups and led by active clinical experts.
            </p>
            <p>
              By learning in small cohorts, each student receives personalized guidance, direct feedback on needle depth, and comprehensive mentoring on complication management and safety aftercare protocols.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">Accredited Career Pathways</h2>
            <p>
              All training programs delivered at Glam and Go London are fully accredited by leading professional boards. Our modules provide certified CPD points recognized by cosmetic insurance underwriters, allowing you to secure public liability coverage immediately upon completion of your training.
            </p>

            <h2 className="text-xl font-bold text-text pt-4">Our Soho Studio Location</h2>
            <p>
              Glam and Go London operates from a modern, clinical aesthetic studio located at <strong>Suite 4, 12 Old Compton Street, Soho, London, W1D 4TQ</strong>. Easily accessible via nearby tube stations, our studio provides a sterile, high-end environment equipped with professional medical-grade tools.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
