'use client';

import { useEffect, useState } from 'react';
import { Shield, Cpu, Zap, ArrowRight, Bot, Lock, Code, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [matrixData, setMatrixData] = useState<string[][]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Create matrix rain effect
    const rows = 20;
    const cols = 40;
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const initialMatrix = Array(rows).fill(null).map(() => 
      Array(cols).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)])
    );
    setMatrixData(initialMatrix);

    // Animate matrix
    const interval = setInterval(() => {
      setMatrixData(prev => 
        prev.map(row => 
          row.map(() => chars[Math.floor(Math.random() * chars.length)])
        )
      );
    }, 100);

    // Scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="grid gap-1 p-4 text-green-500 font-mono text-xs" style={{
          gridTemplateColumns: `repeat(${matrixData[0]?.length || 40}, minmax(0, 1fr))`
        }}>
          {matrixData.map((row, i) => (
            row.map((char, j) => (
              <span 
                key={`${i}-${j}`} 
                className="inline-block text-center"
                style={{
                  animationDelay: `${(i + j) * 0.1}s`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              >
                {char}
              </span>
            ))
          ))}
        </div>
      </div>

      {/* Glowing Orb Effect */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Fullscreen */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cyberai-hero.jpg" 
              alt="CyberAI Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="text-center max-w-5xl relative z-10">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <Zap className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-mono font-medium">AI-POWERED CYBERSECURITY</span>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/images/logo.jpg" 
                alt="CyberAI Logo" 
                className="w-32 h-32 md:w-48 md:h-48 mx-auto object-contain animate-pulse drop-shadow-2xl"
              />
            </div>

            {/* Main Title with Glitch Effect */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 drop-shadow-lg">
                CYBERAI
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ilham El Baraka
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light drop-shadow-md">
              Expert en Intelligence Artificielle & Cybersécurité
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="#project" 
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-3">
                  Découvrir le Projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </span>
              </Link>
              <Link 
                href="/agent" 
                className="group bg-black/50 backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <Bot className="w-5 h-5 text-green-400" />
                  Lancer l'Agent IA
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-green-400/50" />
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="min-h-screen py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  PROJET CYBERAI
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Plateforme de cybersécurité propulsée par l'IA pour la détection et la prévention des menaces
              </p>
            </div>

            {/* Dashboard Image */}
            <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 mb-12">
              <div className="aspect-video bg-black/50 rounded-2xl overflow-hidden border-2 border-purple-500/30">
                <img 
                  src="/images/cyberai-dashboard.jpg" 
                  alt="CyberAI Dashboard Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Détection en Temps Réel', desc: 'Analyse continue des menaces' },
                { icon: Bot, title: 'IA Propulsée', desc: 'Algorithmes d\'apprentissage automatique' },
                { icon: Lock, title: 'Sécurité Avancée', desc: 'Protection multi-couches' },
                { icon: Zap, title: 'Réponse Automatisée', desc: 'Actions immédiates sur incidents' }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <feature.icon className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  EXPERTISE
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Cpu, title: 'Intelligence Artificielle', desc: 'Machine Learning, Deep Learning, NLP' },
                { icon: Lock, title: 'Cybersécurité', desc: 'Pentesting, Sécurité Réseau, Cryptographie' },
                { icon: Code, title: 'Développement Full Stack', desc: 'Next.js, React, Python, Architecture Cloud' }
              ].map((exp, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <exp.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                  <p className="text-gray-400">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Architecture Image */}
            <div className="mt-16 bg-gradient-to-br from-green-900/20 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
              <div className="aspect-video bg-black/50 rounded-2xl overflow-hidden border-2 border-green-500/30">
                <img 
                  src="/images/cyberai-architecture.jpg" 
                  alt="CyberAI Architecture Technique" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen py-32 px-6 flex items-center justify-center relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-green-900/20 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30">
              <Shield className="w-20 h-20 text-purple-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PRÊT À COLLABORER ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Intéressé par une collaboration ou souhaitez en savoir plus sur mon travail ?
              </p>
              <a 
                href="https://www.linkedin.com/in/ilham-el-baraka-4aa451346/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <span>Me Contacter</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
