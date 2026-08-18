'use client';

import { useState, useEffect } from 'react';
import { Bot, Send, Shield, Cpu, Zap, Clock, CheckCircle, AlertCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AgentPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Bonjour ! Je suis votre Agent d\'Automatisation CyberAI. Je peux vous aider avec les tâches de cybersécurité, l\'analyse des menaces et fournir des insights intelligents. Comment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matrixData, setMatrixData] = useState<string[][]>([]);

  useEffect(() => {
    // Create matrix rain effect
    const rows = 15;
    const cols = 30;
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const initialMatrix = Array(rows).fill(null).map(() => 
      Array(cols).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)])
    );
    setMatrixData(initialMatrix);

    const interval = setInterval(() => {
      setMatrixData(prev => 
        prev.map(row => 
          row.map(() => chars[Math.floor(Math.random() * chars.length)])
        )
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer.' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickTasks = [
    { icon: Shield, label: 'Audit de Sécurité', desc: 'Analyser les vulnérabilités système' },
    { icon: Cpu, label: 'Détection Menaces', desc: 'Scanner les menaces potentielles' },
    { icon: Zap, label: 'Analyse Rapide', desc: 'Évaluation de sécurité rapide' },
    { icon: Clock, label: 'Analyse Logs', desc: 'Examiner les journaux système' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-15">
        <div className="grid gap-1 p-4 text-green-500 font-mono text-xs" style={{
          gridTemplateColumns: `repeat(${matrixData[0]?.length || 30}, minmax(0, 1fr))`
        }}>
          {matrixData.map((row, i) => (
            row.map((char, j) => (
              <span 
                key={`${i}-${j}`} 
                className="inline-block text-center"
                style={{
                  opacity: Math.random() * 0.4 + 0.3
                }}
              >
                {char}
              </span>
            ))
          ))}
        </div>
      </div>

      {/* Glowing Orb Effect */}
      <div className="fixed top-1/3 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="fixed bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
              <span className="font-mono text-sm">RETOUR</span>
            </Link>
            <a 
              href="https://www.linkedin.com/in/ilham-el-baraka-4aa451346/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition group"
            >
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition" />
              <span className="font-mono text-sm">LINKEDIN</span>
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/images/logo.jpg" 
                alt="CyberAI Logo" 
                className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain animate-pulse"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <Bot className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-mono font-medium">AGENT IA - AUTOMATISATION</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                AGENT CYBERAI
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Propulsé par Claude AI pour l'assistance intelligente en cybersécurité
            </p>
          </div>

          {/* Quick Tasks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickTasks.map((task, index) => (
              <button
                key={index}
                onClick={() => setInput(`Aide-moi avec ${task.label.toLowerCase()}`)}
                className="bg-black/30 backdrop-blur-sm p-5 rounded-xl border border-green-500/20 hover:border-green-500/40 transition text-left group transform hover:scale-105"
              >
                <task.icon className="w-7 h-7 text-green-400 mb-3 group-hover:scale-110 transition" />
                <h3 className="text-white font-semibold text-sm mb-1">{task.label}</h3>
                <p className="text-gray-400 text-xs">{task.desc}</p>
              </button>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-green-500/20 overflow-hidden mb-8">
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                        : 'bg-black/50 border border-green-500/20 text-gray-200'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-green-400 font-mono font-medium">CYBERAI AGENT</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-black/50 border border-green-500/20 p-4 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-green-400" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-green-500/20">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez des questions sur la cybersécurité, l'analyse des menaces..."
                  className="flex-1 bg-black/50 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition backdrop-blur-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition flex items-center gap-2 transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Envoyer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded-xl border border-green-500/20 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-white font-semibold text-sm">Système En Ligne</p>
                <p className="text-gray-400 text-xs">Tous systèmes opérationnels</p>
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded-xl border border-green-500/20 flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <div>
                <p className="text-white font-semibold text-sm">IA Prête</p>
                <p className="text-gray-400 text-xs">Claude API connectée</p>
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded-xl border border-green-500/20 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-white font-semibold text-sm">Surveillance</p>
                <p className="text-gray-400 text-xs">Détection de menaces active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}