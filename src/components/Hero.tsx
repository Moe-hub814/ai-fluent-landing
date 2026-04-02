export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-200 opacity-30 blur-3xl" />
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-indigo-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-violet-200">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Powered by Advanced AI
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Speak Any Language
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            Fluently with AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
          AI Fluent uses cutting-edge artificial intelligence to personalize your language learning journey — 
          making you conversationally fluent faster than ever before.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#pricing"
            className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-violet-300 hover:-translate-y-0.5"
          >
            Start Learning Free →
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-gray-700 font-semibold hover:text-violet-600 transition-colors"
          >
            <span className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-600 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["bg-violet-400", "bg-pink-400", "bg-indigo-400", "bg-amber-400"].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white`} />
              ))}
            </div>
            <span><strong className="text-gray-700">50,000+</strong> learners worldwide</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1"><strong className="text-gray-700">4.9/5</strong> rating</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <span>🌍 <strong className="text-gray-700">30+</strong> languages supported</span>
        </div>
      </div>
    </section>
  );
}
