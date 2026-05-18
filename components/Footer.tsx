import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-white font-semibold">
              The House of Dentistry
            </span>
          </div>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="#home"
              className="hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="hover:text-emerald-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Crafted by Zorivo */}
        <div className="pt-6 border-t border-slate-800 flex justify-center">
          <a
            href="https://portfolio-zorivo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 transition-all"
          >
            <Sparkles
              size={16}
              className="text-emerald-400 group-hover:rotate-12 transition-transform"
            />
            <span className="text-slate-300 group-hover:text-white transition-colors">
              Crafted by{" "}
              <span className="font-bold text-emerald-400">Zorivo</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
