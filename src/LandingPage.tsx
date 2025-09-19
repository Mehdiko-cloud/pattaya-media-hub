import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-slate-800 mb-4 text-center">
        Pattaya Media Hub
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl text-center mb-8">
        Helping bars, clubs, and restaurants boost their social
        media presence with AI-edited videos — automatically posted across all
        platforms.
      </p>
      <a
        href="#signup"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Get Started
      </a>
    </div>
  );
}
