import { MapPin, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Perambur Branch",
    address:
      "No. 69, Hemavathi Complex, Paper Mills Road, Perambur, Chennai - 600011",
    phone: "+91 80729 82811",
  },
  {
    name: "Ayanavaram Branch",
    address: "Ayanavaram, Chennai, Tamil Nadu",
    phone: "044 - 47820177",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-linear-to-br from-slate-900 via-emerald-950 to-teal-950 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Book Your Visit <span className="text-emerald-400">Today</span>
          </h2>
          <p className="text-lg text-slate-300 mt-5">
            Walk in, call, or book online — we&apos;re here 7 days a week.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Branch Cards */}
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <MapPin className="text-white" size={22} />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">
                {branch.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {branch.address}
              </p>
              <a
                href={`tel:${branch.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <Phone size={16} />
                {branch.phone}
              </a>
            </div>
          ))}

          {/* Hours */}
          <div className="p-7 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <Clock size={22} />
            </div>
            <h3 className="font-bold text-xl mb-3">Working Hours</h3>
            <p className="text-emerald-50 text-sm mb-2">Monday – Sunday</p>
            <p className="text-2xl font-bold">10:00 AM – 9:00 PM</p>
            <p className="text-emerald-100 text-sm mt-3">
              Open all 7 days · No prior appointment needed
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Ready for a Healthier Smile?
            </h3>
            <p className="text-slate-300">
              Call us now and book your appointment in under a minute.
            </p>
          </div>
          <a
            href="tel:+918072982811"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-emerald-700 font-bold shadow-xl hover:scale-105 transition-transform whitespace-nowrap"
          >
            <Phone size={18} />
            +91 80729 82811
          </a>
        </div>
      </div>
    </section>
  );
}
