import { Award, Users, Clock, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Expert Dentist",
    desc: "Led by Dr. Anandkumar, an experienced dental surgeon trusted by thousands.",
  },
  {
    icon: Users,
    title: "10,000+ Patients",
    desc: "A growing community of smiles served across both our Chennai branches.",
  },
  {
    icon: Clock,
    title: "Open 7 Days",
    desc: "Flexible timings from 10 AM to 9 PM, every day of the week.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile & Safe",
    desc: "Hospital-grade sterilization and modern equipment in every treatment.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Compassionate Dental Care{" "}
              <span className="text-emerald-600">You Can Trust</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The House of Dentistry has been serving Chennai families for over
              8 years with a single mission — to make quality dental care
              accessible, comfortable, and stress-free.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From your first visit, we focus on understanding your needs.
              Whether it&apos;s a simple cleaning or a complete smile makeover,
              our team blends modern technology with a gentle approach that
              keeps patients coming back — and bringing their families along.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-emerald-600">8+</p>
                <p className="text-sm text-slate-500 mt-1">Years of Service</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-600">2</p>
                <p className="text-sm text-slate-500 mt-1">Branches</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-600">4.8★</p>
                <p className="text-sm text-slate-500 mt-1">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl border border-slate-100 bg-linear-to-br from-white to-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  i % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                  <item.icon className="text-white" size={22} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
