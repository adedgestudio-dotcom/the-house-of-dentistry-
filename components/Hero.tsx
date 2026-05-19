import { Phone, MapPin, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-7">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-emerald-100">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">
              4.8 / 5
            </span>
            <span className="text-sm text-slate-500">· 121+ Reviews</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Healthy Smiles,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Happy Lives
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200/60 z-0" />
            </span>{" "}
            Start Here
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Trusted dental care in Chennai for over 8 years. From routine
            check-ups to advanced cosmetic dentistry — experience comfort,
            expertise, and care under one roof.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918072982811?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20The%20House%20of%20Dentistry."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all"
            >
              <Phone size={18} />
              Book Appointment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-slate-800 font-semibold border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-all"
            >
              Our Services
            </a>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin size={16} className="text-emerald-600" />
              <span>2 Branches in Chennai</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone size={16} className="text-emerald-600" />
              <span>+91 80729 82811</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Main circle */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 to-teal-600 shadow-2xl shadow-emerald-500/40" />

            {/* Floating cards - Compact size */}
            <div className="absolute top-8 -left-4 bg-white rounded-xl p-2.5 shadow-xl flex items-center gap-2 animate-float">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-lg flex-shrink-0">
                🦷
              </div>
              <div>
                <p className="text-[9px] text-slate-500 leading-tight">
                  Treatments Done
                </p>
                <p className="font-bold text-xs text-slate-900">10,000+</p>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 bg-white rounded-xl p-2.5 shadow-xl flex items-center gap-2 animate-float-delayed">
              <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-lg flex-shrink-0">
                ⭐
              </div>
              <div>
                <p className="text-[9px] text-slate-500 leading-tight">
                  Patient Rating
                </p>
                <p className="font-bold text-xs text-slate-900">4.8 / 5.0</p>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-2.5 shadow-xl flex items-center gap-2 animate-float">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-lg flex-shrink-0">
                🏆
              </div>
              <div>
                <p className="text-[9px] text-slate-500 leading-tight">
                  Years of Trust
                </p>
                <p className="font-bold text-xs text-slate-900">8+ Years</p>
              </div>
            </div>

            {/* Center icon - Original large size */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl">😁</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
