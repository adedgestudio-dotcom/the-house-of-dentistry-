import {
  Stethoscope,
  Sparkles,
  Bone,
  Smile,
  Baby,
  Scissors,
  Crown,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Routine check-ups, cleanings, fillings, and preventive care for all ages.",
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    desc: "Painless, single-sitting root canals using advanced rotary techniques.",
  },
  {
    icon: Bone,
    title: "Dental Implants",
    desc: "Permanent tooth replacements that look, feel, and function naturally.",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    desc: "Custom-fit ceramic crowns and bridges for a flawless, durable finish.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Brighten your smile by several shades with safe, professional whitening.",
  },
  {
    icon: Smile,
    title: "Braces & Aligners",
    desc: "Traditional braces and clear aligners for perfectly straight teeth.",
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    desc: "Wisdom tooth removal and minor surgical procedures with expert care.",
  },
  {
    icon: Baby,
    title: "Paediatric Dentistry",
    desc: "Friendly, gentle dental care designed specifically for children.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-linear-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Complete Dental Care{" "}
            <span className="text-emerald-600">Under One Roof</span>
          </h2>
          <p className="text-lg text-slate-600 mt-5 leading-relaxed">
            From routine cleanings to complex procedures — we offer a full range
            of treatments to keep your smile healthy for life.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-500 to-teal-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-500 group-hover:to-teal-600 flex items-center justify-center mb-5 transition-all">
                <service.icon
                  className="text-emerald-600 group-hover:text-white transition-colors"
                  size={26}
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="tel:+918072982811"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
