export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl py-16 px-8 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <span className="text-4xl">🚀</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Start speaking fluently today
            </h2>
            <p className="mt-4 text-violet-200 text-xl max-w-xl mx-auto">
              Join 50,000+ learners and experience the future of language learning. No credit card required.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-white text-violet-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-colors shadow-lg"
              >
                Get Started Free →
              </a>
              <a
                href="#features"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-6 text-violet-300 text-sm">
              Free plan available · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
