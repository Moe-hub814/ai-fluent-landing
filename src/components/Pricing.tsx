const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with a new language.",
    features: [
      "5 lessons per day",
      "1 language",
      "Basic AI conversation",
      "Vocabulary flashcards",
      "Progress tracking",
    ],
    cta: "Get Started Free",
    ctaStyle: "border-2 border-violet-300 text-violet-700 hover:bg-violet-50",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For serious learners who want to reach fluency faster.",
    features: [
      "Unlimited lessons",
      "All 30+ languages",
      "Advanced AI tutor",
      "Pronunciation coach",
      "Offline mode",
      "Priority support",
    ],
    cta: "Start 7-Day Free Trial",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:opacity-90 shadow-lg",
    popular: true,
  },
  {
    name: "Teams",
    price: "$6",
    period: "per user/month",
    description: "For schools and businesses training multiple learners.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Admin controls",
      "Progress reports",
      "Custom content",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaStyle: "border-2 border-violet-300 text-violet-700 hover:bg-violet-50",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Start for free. Upgrade when you&apos;re ready to accelerate your learning.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-violet-600 to-indigo-600 text-white shadow-2xl scale-105"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-violet-200" : "text-gray-500"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm pb-2 ${plan.popular ? "text-violet-200" : "text-gray-400"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-violet-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-violet-200" : "text-violet-500"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.popular ? "text-violet-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full py-3.5 rounded-full text-center font-bold text-sm transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Money back */}
        <p className="text-center mt-10 text-gray-400 text-sm">
          🔒 30-day money-back guarantee · No credit card required for free plan
        </p>
      </div>
    </section>
  );
}
