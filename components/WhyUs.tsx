import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Highly experienced and certified dental surgeons",
  "Modern equipment and pain-free treatment techniques",
  "Affordable pricing with transparent cost estimates",
  "Two convenient branches — Ayanavaram & Perambur",
  "Open 7 days a week from 10 AM to 9 PM",
  "Hospital-grade sterilization for every procedure",
  "Personalized treatment plans for every patient",
  "Trusted by 10,000+ patients with 4.8★ rating",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl bg-linear-to-br from-emerald-500 to-teal-700 p-1 shadow-2xl shadow-emerald-500/30">
              <div className="w-full h-full rounded-3xl bg-white flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="text-8xl">🦷</div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Excellence in
                  <br />
                  Every Smile
                </h3>
                <p className="text-slate-600">Where care meets craftsmanship</p>
                <div className="flex gap-3 pt-4">
                  <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
                    8+ Years
                  </div>
                  <div className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold">
                    4.8 ★ Rated
                  </div>
                </div>
              </div>
            </div>
            {/* decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200/50 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200/50 rounded-full blur-2xl" />
          </div>

          {/* Right - Reasons */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Reasons Patients{" "}
              <span className="text-emerald-600">Choose Us</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We&apos;ve built our reputation one smile at a time. Here&apos;s
              what makes The House of Dentistry stand apart.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors"
                >
                  <CheckCircle2
                    size={20}
                    className="text-emerald-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
