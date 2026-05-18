"use client";

import { MessageCircle, X, Send, Clock } from "lucide-react";
import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918072982811";

  const quickMessages = [
    "Book an appointment",
    "Emergency dental care",
    "Pricing information",
    "Location & timings",
  ];

  const handleQuickMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const handleCustomMessage = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in border border-slate-200">
          {/* Header */}
          <div className="relative bg-[#075E54] p-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    House of Dentistry
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-emerald-100 text-xs">
                      Online • Replies instantly
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="bg-[#E5DDD5] p-5 min-h-[280px] max-h-[400px] overflow-y-auto bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48cGF0aCBkPSJNMzAgMzBtLTggMGE4IDggMCAxIDAgMTYgMGE4IDggMCAxIDAgLTE2IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0QzQzZCRSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiKSIvPjwvc3ZnPg==')]">
            <div className="space-y-3">
              {/* Incoming Message */}
              <div className="flex gap-2 animate-slide-in">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="text-lg">🦷</span>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[75%]">
                  <p className="text-sm text-slate-800 leading-relaxed">
                    Hello! 👋 Welcome to The House of Dentistry. How can we help
                    you today?
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock size={10} className="text-slate-400" />
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                </div>
              </div>

              {/* Quick Reply Buttons */}
              <div className="space-y-2 pt-2">
                <p className="text-xs text-slate-600 font-medium px-1">
                  Quick replies:
                </p>
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left bg-white hover:bg-emerald-50 border border-emerald-200 rounded-xl p-3 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700 group-hover:text-emerald-700 font-medium">
                        {message}
                      </span>
                      <Send
                        size={14}
                        className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white p-4 border-t border-slate-200">
            <button
              onClick={handleCustomMessage}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              <span>Open WhatsApp Chat</span>
            </button>
            <p className="text-xs text-slate-500 text-center mt-3 flex items-center justify-center gap-1">
              <Clock size={12} />
              Available 7 days • 10 AM - 9 PM
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group overflow-hidden"
        aria-label="WhatsApp Chat"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        {isOpen ? (
          <X
            size={28}
            className="relative z-10 group-hover:rotate-90 transition-transform duration-300"
          />
        ) : (
          <MessageCircle
            size={28}
            className="relative z-10 group-hover:scale-110 transition-transform"
          />
        )}

        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-[10px] font-bold">1</span>
          </div>
        )}
      </button>
    </div>
  );
}
