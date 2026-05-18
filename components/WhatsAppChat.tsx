"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918072982811"; // WhatsApp number without + or spaces
  const defaultMessage =
    "Hi! I'd like to book an appointment at The House of Dentistry.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                  🦷
                </div>
                <div>
                  <h3 className="text-white font-bold">House of Dentistry</h3>
                  <p className="text-emerald-50 text-xs">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-slate-50">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                <p className="text-sm text-slate-700 mb-2">
                  👋 Hello! Welcome to The House of Dentistry.
                </p>
                <p className="text-sm text-slate-600">
                  How can we help you today? Click below to start a conversation
                  on WhatsApp.
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                Start Chat on WhatsApp
              </button>

              <p className="text-xs text-slate-500 text-center mt-3">
                We're available 7 days a week, 10 AM - 9 PM
              </p>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? (
            <X
              size={28}
              className="group-hover:rotate-90 transition-transform"
            />
          ) : (
            <MessageCircle
              size={28}
              className="group-hover:scale-110 transition-transform"
            />
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
