import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BarChart2, ShieldAlert, ArrowRight, Apple, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col">
      {/* Navigation Header */}
      <header className="glass-nav h-20 w-full fixed top-0 left-0 z-50 px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            HAIRSCOPE AI
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About Science
          </Link>
          {token ? (
            <Link
              to="/dashboard"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 font-semibold text-sm shadow-lg text-white transition-all transform hover:scale-[1.02]"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-dark-card transition-all">
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-xl bg-brand-violet hover:bg-purple-600 font-semibold text-sm shadow-md text-white transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Glow Element */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen Scalp Analysis
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Track Your Hair Health With <br />
          <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AI-Powered Image Analysis
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
          Upload scalp and hairline photos to estimate your Norwood stage, measure hair density, track progression metrics over time, and receive specialized hair-loss meal planning recommendations.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            to={token ? '/dashboard' : '/register'}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 font-bold text-white shadow-xl shadow-purple-900/20 transition-all flex items-center gap-2 group hover:scale-[1.02]"
          >
            Start Analyzing Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl bg-[#161c2a] hover:bg-[#1f293d] border border-dark-border font-bold text-gray-200 transition-all"
          >
            How it Works
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="glass-card p-6 flex flex-col gap-3 hover:border-brand-violet/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-purple-400 mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Norwood Stage Estimation</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Detect hairline recession and crown thinning based on the clinical Norwood-Hamilton scale.
            </p>
          </div>

          <div className="glass-card p-6 flex flex-col gap-3 hover:border-brand-cyan/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-cyan-400 mb-2">
              <BarChart2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Progress & Slide Metrics</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Compare scalp photos side-by-side using draggable overlay comparison sliders and charts.
            </p>
          </div>

          <div className="glass-card p-6 flex flex-col gap-3 hover:border-brand-emerald/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-emerald-400 mb-2">
              <Apple className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Targeted Nutrition Scoring</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Receive a weekly meal plan (vegetarian/non-vegetarian options) targeting iron, zinc, protein, and vitamins.
            </p>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="mt-16 glass-card p-6 border-rose-500/20 bg-rose-500/5 max-w-4xl w-full flex items-start gap-4 text-left">
          <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-rose-400 mb-1">Medical Disclaimer</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              HairScope AI is designed solely for cosmetic hair tracking, general education, and dietary support. This software is not a diagnostic tool and does not replace medical advice, diagnosis, or clinical evaluation. Always consult a board-certified dermatologist or healthcare professional regarding hair loss treatments or severe conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border/40 py-8 bg-[#0b0f19] text-center text-xs text-gray-500">
        <p>© 2026 HairScope AI. Built using the full MERN Stack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
