const steps = [
  {
    number: "01",
    title: "Choose Your Language",
    description: "Pick from 30+ languages and tell us your current level. Beginner, intermediate, or advanced — AI Fluent adapts to you.",
    icon: "🌍",
  },
  {
    number: "02",
    title: "Get Your Personal Plan",
    description: "Our AI builds a custom learning path based on your goals, schedule, and learning style in minutes.",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Practice Daily",
    description: "Engage in AI-powered conversations, vocabulary drills, and pronunciation exercises tailored exactly to your needs.",
    icon: "💬",
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "Watch your fluency grow with detailed analytics, milestones, and streaks that keep you motivated.",
    icon: "📈",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Fluency in 4 simple steps
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Getting started is easy. Our AI does the heavy lifting so you can focus on actually speaking.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-indigo-200 -translate-y-0.5 z-0" style={{ width: "calc(100% - 3rem)" }} />
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                {/* Emoji icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo chat UI mockup */}
        <div className="mt-20 max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div>
              <p className="text-white font-semibold text-sm">AI Fluent Tutor</p>
              <p className="text-violet-200 text-xs">Learning Spanish • Intermediate</p>
            </div>
            <div className="ml-auto flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
          </div>

          <div className="p-6 space-y-4 bg-gray-50">
            {/* AI message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                AI
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-sm">
                <p className="text-gray-800 text-sm">¡Hola! Let&apos;s practice ordering food. Imagine you&apos;re at a restaurant in Madrid. What would you like to order?</p>
              </div>
            </div>

            {/* User message */}
            <div className="flex gap-3 justify-end">
              <div className="bg-gradient-to-r from-violet-600 to-indigo-500 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-sm">
                <p className="text-white text-sm">Quiero una paella, por favor.</p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                AI
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-sm">
                <p className="text-gray-800 text-sm">¡Perfecto! Great sentence! 🎉 For a more natural phrasing, try: <span className="font-semibold text-violet-600">&quot;Me gustaría una paella, por favor.&quot;</span></p>
                <div className="mt-2 flex items-center gap-1 text-xs text-emerald-600 font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  +15 XP earned
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your response in Spanish..."
              className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-700 outline-none border border-gray-200 focus:border-violet-400"
              readOnly
            />
            <button className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
