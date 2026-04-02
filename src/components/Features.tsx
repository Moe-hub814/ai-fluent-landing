const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "AI Conversation Partner",
    description: "Practice real conversations with our intelligent AI tutor that adapts to your level and corrects your mistakes in real-time.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Personalized Learning Path",
    description: "Our AI analyzes your strengths and weaknesses to create a custom curriculum that maximizes your learning efficiency.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.344m0 0A7.975 7.975 0 0120 12m-8 8a7.975 7.975 0 01-5.657-2.344m0 0A7.975 7.975 0 014 12m8-6V3m0 18v-3" />
      </svg>
    ),
    title: "Speech Recognition",
    description: "Perfect your pronunciation with our advanced speech recognition that gives instant feedback and scores your accent.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Spaced Repetition",
    description: "Our smart flashcard system uses science-backed spaced repetition to ensure vocabulary sticks in your long-term memory.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "30+ Languages",
    description: "From Spanish and French to Japanese and Arabic — master any language with the same proven AI-powered methodology.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Learn Anytime, Anywhere",
    description: "Bite-sized lessons designed for busy schedules. Just 10 minutes a day is all it takes to make steady progress.",
    color: "from-cyan-500 to-sky-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Everything you need to become fluent
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            AI Fluent combines the latest AI technology with proven language learning methods to deliver results faster than traditional courses.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl border ${feature.border} ${feature.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-5 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
