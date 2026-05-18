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
              href="tel:+918072982811"
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
        <div className="relative mt-8 lg:mt-0">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Main circle */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 to-teal-600 shadow-2xl shadow-emerald-500/40" />

            {/* Floating cards - Responsive positioning */}
            <div className="absolute top-4 sm:top-8 left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-2 sm:gap-3 animate-float max-w-[160px] sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                🦷
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                  Treatments Done
                </p>
                <p className="font-bold text-sm sm:text-base text-slate-900">
                  10,000+
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-2 sm:gap-3 animate-float-delayed max-w-[150px] sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-teal-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                ⭐
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                  Patient Rating
                </p>
                <p className="font-bold text-sm sm:text-base text-slate-900">
                  4.8 / 5.0
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-2 sm:gap-3 animate-float max-w-[140px] sm:max-w-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                🏆
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                  Years of Trust
                </p>
                <p className="font-bold text-sm sm:text-base text-slate-900">
                  8+ Years
                </p>
              </div>
            </div>

            {/* Center icon - Responsive size */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                😁
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
