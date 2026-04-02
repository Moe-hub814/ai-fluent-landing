const testimonials = [
  {
    quote: "I tried so many apps before AI Fluent. Nothing came close. I went from zero to having a full conversation in Spanish in just 3 months.",
    name: "Sarah M.",
    role: "Software Engineer",
    avatar: "SM",
    color: "bg-violet-500",
    lang: "🇪🇸 Spanish",
  },
  {
    quote: "The AI tutor is incredibly smart. It catches mistakes I didn't even realize I was making and explains grammar in a way that finally makes sense.",
    name: "James K.",
    role: "Marketing Manager",
    avatar: "JK",
    color: "bg-indigo-500",
    lang: "🇫🇷 French",
  },
  {
    quote: "As a busy parent, I only have 15 minutes a day to study. AI Fluent makes every minute count. My Japanese has improved dramatically.",
    name: "Aiko T.",
    role: "Business Owner",
    avatar: "AT",
    color: "bg-pink-500",
    lang: "🇯🇵 Japanese",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Loved by language learners
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Join thousands of learners who reached their fluency goals with AI Fluent.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role} · {t.lang}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white shadow-xl">
          {[
            { stat: "50K+", label: "Active Learners" },
            { stat: "30+", label: "Languages" },
            { stat: "4.9★", label: "App Store Rating" },
            { stat: "3×", label: "Faster than Traditional Classes" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold mb-1">{item.stat}</p>
              <p className="text-violet-200 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
