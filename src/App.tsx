/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  X, 
  Share2, 
  Compass, 
  Clock, 
  BookOpen, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { SCHOOLS, School } from './data/schools';
import { QUESTIONS, Question } from './data/questions';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// --- Constants ---
const AXES = [
  'Metafísica', 'Epistemologia', 'Ética', 'Política', 'Linguagem', 'Subjetividade', 'Temporalidade'
];

const ERAS = {
  'Antiga': [1, 2, 3, 4, 5, 6, 7, 8],
  'Medieval': [9, 10, 11, 12],
  'Moderna': [13, 14, 15, 16, 17, 18],
  'Séc. XIX': [19, 20, 21, 22, 23, 24],
  'Séc. XX': [25, 26, 27, 28, 29, 30, 31, 32],
  'Contemporânea': [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
};

const BRANCH_QUESTIONS: Record<string, string[]> = {
  A: ['Q06A', 'Q07A', 'Q08A', 'Q09A', 'Q10A'],
  B: ['Q06B', 'Q07B', 'Q08B', 'Q09B', 'Q10B', 'Q11B'],
  C: ['Q06C', 'Q07C', 'Q08C', 'Q09C', 'Q10C', 'Q11C'],
  D: ['Q06D', 'Q07D', 'Q08D', 'Q09D', 'Q10D', 'Q11D']
};

const REFINE_CLUSTERS: Record<string, number[]> = {
  QR1: [1, 2, 3, 4],
  QR2: [5, 6, 7, 8],
  QR3: [9, 10, 11, 12],
  QR4: [13, 14, 15, 16],
  QR5: [17, 18, 19, 20],
  QR6: [21, 22, 23, 24],
  QR7: [25, 26, 27, 28],
  QR8: [29, 30, 31, 32],
  QR9: [33, 34, 35, 36],
  QR10: [37, 38, 39, 40],
  QR11: [41, 42, 43, 44],
  QR12: [45, 46, 47, 48]
};

// --- Helper Functions ---
function euclidean(a: number[], b: number[]) {
  return Math.sqrt(a.reduce((s, v, i) => s + Math.pow(v - b[i], 2), 0));
}

function determineBranch(v: number[]) {
  const scores = {
    A: -v[0] + -v[1], // Metafísica/Epistemologia negativa (Transcendência/Racionalismo Clássico)
    B: v[1] + -v[4], // Epistemologia positiva (Empirismo/Ciência) e Linguagem negativa
    C: -v[2] + v[3], // Ética negativa / Política positiva (Social/Coletivo)
    D: v[4] + v[5]   // Linguagem/Subjetividade positiva (Contemporâneo/Existencial)
  };
  return (Object.keys(scores) as (keyof typeof scores)[]).reduce((a, b) => scores[a] >= scores[b] ? a : b);
}

function selectRefinement(top5ids: number[]) {
  const sel: string[] = [];
  const top2 = top5ids.slice(0, 2);
  
  for (const [k, ids] of Object.entries(REFINE_CLUSTERS)) {
    const overlapTop2 = top2.filter(id => ids.includes(id));
    const overlapTop5 = top5ids.filter(id => ids.includes(id));
    
    if (overlapTop2.length >= 1 || overlapTop5.length >= 2) {
      if (!sel.includes(k)) sel.push(k);
    }
  }
  
  // Garantir que temos 4 clusters de refinamento para maior precisão e peso estatístico
  if (sel.length < 4) {
    const defaults = ['QR10', 'QR11', 'QR12', 'QR5'];
    for (const d of defaults) {
      if (!sel.includes(d) && sel.length < 4) sel.push(d);
    }
  }
  
  return sel.slice(0, 4);
}

// --- App Component ---
export default function App() {
  const [screen, setScreen] = useState<'home' | 'quiz' | 'thinking' | 'result' | 'explore'>('home');
  const [queue, setQueue] = useState<string[]>(['Q01', 'Q02', 'Q03', 'Q04', 'Q05']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [vector, setVector] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [phase, setPhase] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);
  const [eraFilter, setEraFilter] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // --- Quiz Logic ---
  const startQuiz = () => {
    setQueue(['Q01', 'Q02', 'Q03', 'Q04', 'Q05']);
    setCurrentIndex(0);
    setVector([0, 0, 0, 0, 0, 0, 0]);
    setPhase(0);
    setSelectedOption(null);
    setScreen('quiz');
  };

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const qid = queue[currentIndex];
    const q = QUESTIONS[qid];
    const opt = q.opts[selectedOption];

    // Acumula vetor
    const newVector = vector.map((val, i) => val + opt.v[i]);
    const nextCount = currentIndex + 1;
    
    setVector(newVector);
    setSelectedOption(null);

    const isLast = currentIndex === queue.length - 1;

    if (!isLast) {
      const nextIdx = currentIndex + 1;
      
      // Ao terminar as 5 universais, detecta ramo e expande fila
      if (phase === 0 && nextIdx === 5) {
        const branch = determineBranch(newVector);
        const branchQs = BRANCH_QUESTIONS[branch] || [];
        setQueue(prev => [...prev, ...branchQs]);
        setPhase(1);
      }
      
      setCurrentIndex(nextIdx);
    } else {
      if (phase === 0) {
        // Caso as 5 universais eram o fim da fila inicial
        const branch = determineBranch(newVector);
        const branchQs = BRANCH_QUESTIONS[branch] || [];
        setQueue(prev => [...prev, ...branchQs]);
        setPhase(1);
        setCurrentIndex(currentIndex + 1);
      } else if (phase === 1) {
        // Ao terminar o ramo, calcula top5 e adiciona refinamento
        // USAMOS A MESMA LÓGICA DE INTENSIFICAÇÃO PARA ESCOLHER OS REFINAMENTOS CERTOS
        const currentNorm = newVector.map(val => {
          const avg = val / Math.sqrt(nextCount * 1.5);
          let boosted = avg;
          if (Math.abs(avg) > 0.3) boosted *= 1.8;
          return Math.min(3, Math.max(-3, boosted));
        });
        
        const maxDistAtRef = Math.sqrt(7 * 36);

        const top5 = Object.values(SCHOOLS)
          .map(s => ({
            ...s,
            aff: Math.max(0, 100 - (euclidean(currentNorm, s.vector) / maxDistAtRef) * 100)
          }))
          .sort((a, b) => b.aff - a.aff)
          .slice(0, 5)
          .map(s => s.id);

        const refQs = selectRefinement(top5);
        setQueue(prev => [...prev, ...refQs]);
        setPhase(2);
        setCurrentIndex(currentIndex + 1);
      } else {
        // Fim — calcula resultado
        setScreen('thinking');
        setTimeout(() => {
          const finalResult = computeResult(newVector, nextCount);
          setResult(finalResult);
          setScreen('result');
        }, 1800);
      }
    }
  };

  const computeResult = (v: number[], count: number) => {
    // PESO POR RECÊNCIA E INTENSIFICAÇÃO
    // Em vez de tratar todas as perguntas com peso igual, damos um boost 
    // nas perguntas finais (refinamento) para que elas consigam "vencer"
    // a inércia das perguntas universais iniciais.
    
    const norm = v.map(val => {
      // Normalização baseada em um valor de "energia" acumulada
      // Note: o vetor 'v' já contém os pesos aplicados em cada resposta.
      // Dividimos por um fator que escala com a raiz para evitar a diluição linear.
      const avg = val / Math.sqrt(count * 1.5);
      
      // Aplicamos um "Soft-Clamp" para empurrar valores médios para as bordas
      let boosted = avg;
      if (Math.abs(avg) > 0.3) boosted *= 1.8;
      if (Math.abs(avg) > 1.0) boosted *= 1.3;

      return Math.min(3, Math.max(-3, boosted));
    });

    const maxDist = Math.sqrt(7 * 36);

    const ranked = Object.values(SCHOOLS).map(s => {
      const dist = euclidean(norm, s.vector);
      const aff = Math.max(0, 100 - (dist / maxDist) * 100);
      return { ...s, aff, dist };
    }).sort((a, b) => b.aff - a.aff);

    const top3sum = ranked.slice(0, 3).reduce((s, x) => s + x.aff, 0);
    ranked.forEach((s, i) => {
      s.pct = i < 3 && top3sum > 0 ? Math.round((s.aff / top3sum) * 100) : 0;
    });

    let edgeCase = null, edgeMsg = '';
    const gap = ranked[0].aff - ranked[1].aff;
    if (ranked[0].aff < 52) {
      edgeCase = 'eclectic';
      edgeMsg = 'Seu perfil filosófico é incomumente equilibrado — você não se encaixa com facilidade em uma única tradição. Isso é raro e honesto. Você pode ser um genuíno pluralista filosófico, ou ainda estar no processo de formar seus compromissos mais profundos.';
    } else if (gap < 4) {
      edgeCase = 'dual';
      edgeMsg = `Seus resultados revelam uma tensão filosófica genuína entre ${ranked[0].name} e ${ranked[1].name}. Isso não é indecisão — é a marca de alguém que vive um problema filosófico real.`;
    }

    const domIdx = norm.reduce((mi, val, i, a) => Math.abs(val) > Math.abs(a[mi]) ? i : mi, 0);

    return {
      primary: ranked[0],
      secondary: ranked[1],
      tertiary: ranked[2],
      all: ranked,
      norm,
      radarData: norm.map(val => {
        // Agora usamos o norm já intensificado para o gráfico
        return Math.min(100, Math.max(0, ((val + 3) / 6) * 100));
      }),
      edgeCase,
      edgeMsg,
      dominantAxis: AXES[domIdx]
    };
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleShare = () => {
    if (!result) return;
    const txt = 
      `Descobri minha identidade filosófica na Philosofi!\n\n` +
      `🎯 ${result.primary.name} (${result.primary.pct}%)\n` +
      `📌 ${result.secondary.name} (${result.secondary.pct}%)\n` +
      `📍 ${result.tertiary.name} (${result.tertiary.pct}%)\n\n` +
      `Eixo dominante: ${result.dominantAxis}\n\n` +
      `Descubra a sua → philosofi.app`;
    
    navigator.clipboard.writeText(txt).then(() => {
      showToast('Copiado para a área de transferência');
    });
  };

  // --- Filter Logic ---
  const filteredSchools = useMemo(() => {
    let schools = Object.values(SCHOOLS);
    if (eraFilter !== 'Todas') {
      const ids = (ERAS as any)[eraFilter] || [];
      schools = schools.filter(s => ids.includes(s.id));
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      schools = schools.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.thinkers.toLowerCase().includes(term) ||
        s.desc.some(p => p.toLowerCase().includes(term))
      );
    }
    return schools;
  }, [eraFilter, searchTerm]);

  // --- Render Helpers ---
  const currentQuestion = QUESTIONS[queue[currentIndex]];

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-18 flex items-center justify-between px-6 md:px-12 bg-white border-b-4 border-black z-[100]">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setScreen('home')}
        >
          <div className="w-10 h-10 bg-black flex items-center justify-center">
            <span className="text-white font-black text-xl font-mono">P/O</span>
          </div>
          <span className="font-black uppercase tracking-tighter text-2xl">Philosofi</span>
        </div>
        
        {screen === 'quiz' && (
          <div className="flex flex-col items-end gap-1.5 animate-in fade-in duration-500">
            <span className="text-[10px] font-bold uppercase opacity-50">Progresso</span>
            <div className="w-32 h-4 border-2 border-black bg-white overflow-hidden">
              <motion.div 
                className="h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${(currentIndex / (queue.length + 2)) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        )}
      </header>

      <main className="pt-18 pb-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {/* Home Screen */}
          {screen === 'home' && (
            <motion.section 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center max-w-4xl mx-auto h-[calc(100vh-7rem)] overflow-hidden"
            >
              <span className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">Arquétipos do Pensamento</span>
              <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter mb-4 md:mb-6 uppercase">
                Onde sua alma reside?
              </h1>
              <p className="text-muted text-lg md:text-xl font-bold max-w-2xl mx-auto leading-tight mb-8">
                Um mapeamento adaptativo através dos 7 eixos do pensamento filosófico ocidental. 
              </p>
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <button 
                  className="btn btn-primary"
                  onClick={startQuiz}
                >
                  Iniciar a Jornada →
                </button>
                <div className="bg-white border-2 border-black p-3 md:p-4 flex gap-6 md:gap-8">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase opacity-50">Tempo</span>
                    <span className="font-mono font-bold text-sm md:text-base">~5 MIN</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase opacity-50">Escolas</span>
                    <span className="font-mono font-bold text-sm md:text-base">48 TOTAL</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Quiz Screen */}
          {screen === 'quiz' && currentQuestion && (
            <motion.section 
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-4 md:p-6 h-[calc(100vh-7rem)] overflow-hidden"
            >
              <div className="w-full max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 mt-4 md:mt-8 h-full min-h-0">
                <div className="md:col-span-8 flex flex-col min-h-0">
                  <div className="bg-acid-pink text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.35em] mb-2 inline-block self-start">
                    {currentQuestion.cat}
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-none mb-6 md:mb-8 uppercase tracking-tighter shrink-0">
                    {currentQuestion.text}
                  </h2>
                  
                  <div className="grid gap-3 md:gap-4 mb-6 md:mb-8 overflow-y-auto pr-2 custom-scrollbar">
                    {currentQuestion.opts.map((opt, i) => (
                      <div key={i} className="group cursor-pointer" onClick={() => handleSelect(i)}>
                        <div className={`
                          flex items-center gap-4 md:gap-6 p-4 md:p-5 border-4 border-black transition-all duration-150
                          ${selectedOption === i ? 'bg-black text-white neo-shadow-sm translate-x-0.5 translate-y-0.5' : 'bg-white text-black neo-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                        `}>
                          <span className={`text-xl md:text-2xl font-black ${selectedOption === i ? 'text-acid-green' : 'text-black'}`}>
                            {opt.l}
                          </span>
                          <p className="text-base md:text-lg font-bold leading-tight">{opt.t}</p>
                          {selectedOption === i && <div className="ml-auto w-5 h-5 md:w-6 md:h-6 bg-acid-green rounded-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"></div>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex justify-between items-center bg-white z-10">
                    <button 
                      onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                      className={`flex items-center gap-2 font-black uppercase text-xs md:text-sm border-b-4 border-black transition-opacity ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-30 hover:opacity-100'}`}
                    >
                      ← Voltar
                    </button>
                    <button
                      disabled={selectedOption === null}
                      onClick={handleNext}
                      className={`px-8 md:px-12 py-3 md:py-4 bg-black text-white border-4 border-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,255,65,1)] transition-all ${selectedOption === null ? 'opacity-30 cursor-not-allowed' : 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,255,65,1)]'}`}
                    >
                      {currentIndex === queue.length - 1 ? 'Finalizar' : 'Confirmar'} →
                    </button>
                  </div>
                </div>

                <aside className="hidden md:flex md:col-span-4 h-fit border-4 border-black bg-gold p-6 md:p-8 neo-shadow flex-col">
                  <div className="flex flex-col items-center justify-center text-black">
                    <span className="text-6xl lg:text-8xl font-black leading-none">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                    <span className="text-[10px] lg:text-[12px] font-bold uppercase mt-2 tracking-widest">QUESTÃO {currentIndex + 1} DE {queue.length}</span>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-black/20">
                    <p className="text-[10px] font-bold leading-tight uppercase opacity-60 mb-2">Sistema Status</p>
                    <div className="flex gap-1 h-6 items-end">
                      {[60, 85, 40, 70, 95, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-black" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </motion.section>
          )}

          {/* Thinking Screen */}
          {screen === 'thinking' && (
            <motion.section 
              key="thinking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center p-6 text-center h-[calc(100vh-7rem)] overflow-hidden"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 border-8 border-black border-t-acid-green animate-spin mb-6 md:mb-8" />
              <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Sintetizando sua ontologia...</p>
            </motion.section>
          )}

          {/* Result Screen */}
          {screen === 'result' && result && (
            <motion.section 
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 w-full p-4 md:p-12 mb-10"
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 md:mb-16 border-4 border-black bg-white p-4 md:p-12 neo-shadow flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left w-full overflow-hidden">
                    <span className="bg-acid-pink text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 inline-block">Sua Bússola Identificada</span>
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 break-words">{result.primary.name}</h1>
                    <p className="font-mono font-bold text-sm md:text-xl uppercase opacity-60 break-words">{result.primary.era} // {result.primary.thinkers}</p>
                  </div>
                  <div className="bg-black text-acid-green p-6 md:p-8 border-4 border-black neo-shadow-sm flex flex-col items-center justify-center min-w-[140px] md:min-w-[200px] shrink-0">
                    <span className="text-4xl md:text-5xl font-black leading-none">{result.primary.pct}%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-2">Compatibilidade</span>
                  </div>
                </div>

                {result.edgeCase && (
                  <div className="bg-gold border-4 border-black p-6 md:p-8 mb-10 md:mb-16 neo-shadow flex items-start gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white shrink-0 flex items-center justify-center font-black text-xl md:text-2xl group">
                      <span className="animate-pulse">!</span>
                    </div>
                    <p className="font-bold text-sm md:text-lg leading-tight md:leading-snug uppercase">{result.edgeMsg}</p>
                  </div>
                )}

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 items-stretch">
                  <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12 w-full min-w-0">
                    <section className="bg-white border-4 border-black p-5 md:p-8 neo-shadow flex-1">
                      <h3 className="font-black uppercase text-lg md:text-xl mb-6 md:mb-8 border-b-4 border-black pb-2">Status dos Eixos</h3>
                      <div className="grid gap-5 md:gap-6">
                        {AXES.map((label, i) => {
                          const val = Math.round(((result.norm[i] + 3) / 6) * 100);
                          return (
                            <div key={i} className="flex flex-col gap-2">
                              <div className="flex justify-between font-mono font-bold text-[10px] md:text-xs uppercase">
                                <span className="truncate pr-2">{label}</span>
                                <span>{val}%</span>
                              </div>
                              <div className="h-5 md:h-6 border-2 border-black bg-bg overflow-hidden p-0.5">
                                <motion.div 
                                  className="h-full bg-black"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${val}%` }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    <section className="bg-acid-green border-4 border-black p-5 md:p-8 neo-shadow">
                      <h3 className="font-black uppercase text-lg md:text-xl mb-6 md:mb-8 border-b-4 border-black pb-2 text-black">Afinidades</h3>
                      <div className="grid gap-5 md:gap-6">
                        {[result.secondary, result.tertiary, ...result.all.slice(3, 5)].map((s, i) => (
                          <div key={i} className="flex justify-between items-center group cursor-pointer" onClick={() => setSelectedSchool(s)}>
                            <div className="min-w-0">
                              <div className="font-black text-base md:text-xl uppercase tracking-tighter transition-colors group-hover:text-white truncate">{s.name}</div>
                              <div className="text-[9px] md:text-[10px] font-bold uppercase opacity-60 truncate">{s.era}</div>
                            </div>
                            <div className="font-mono font-black text-sm md:text-lg pl-4">{s.pct || Math.round(s.aff)}%</div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12 w-full min-w-0">
                    <div className="bg-white border-4 border-black p-4 md:p-12 neo-shadow flex flex-col items-center justify-center overflow-hidden">
                      <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg mb-8 md:mb-12 mx-auto">
                        <Radar 
                          data={{
                            labels: AXES,
                            datasets: [{
                              data: result.radarData,
                              backgroundColor: 'rgba(0, 255, 65, 0.3)',
                              borderColor: '#000000',
                              borderWidth: 4,
                              pointBackgroundColor: '#00FF41',
                              pointBorderColor: '#000000',
                              pointBorderWidth: 2,
                              pointRadius: 5,
                              pointHoverRadius: 8,
                            }]
                          }}
                          options={{
                            scales: {
                              r: {
                                min: 0,
                                max: 100,
                                ticks: { display: false },
                                grid: { color: 'rgba(0, 0, 0, 0.1)', lineWidth: 1 },
                                angleLines: { color: 'rgba(0, 0, 0, 0.1)', lineWidth: 1 },
                                pointLabels: { 
                                  color: '#000000', 
                                  font: { family: 'Inter', size: 9, weight: 'bold' } 
                                }
                              }
                            },
                            plugins: { legend: { display: false } },
                            responsive: true,
                            maintainAspectRatio: true
                          }}
                        />
                      </div>

                      <div className="text-left w-full">
                        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                          {result.primary.desc.map((p: string, i: number) => (
                            <p key={i} className="text-lg md:text-2xl font-black leading-tight uppercase tracking-tighter break-words">{p}</p>
                          ))}
                        </div>
                        
                        <div className="bg-black text-white p-6 md:p-8 neo-shadow-sm mb-6 md:mb-8">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-acid-green mb-4">Tensões de Pensamento</span>
                          <p className="text-base md:text-xl font-bold uppercase leading-tight">{result.primary.tensions}</p>
                        </div>

                        <div className="border-l-8 border-black pl-4 md:pl-8 py-3 md:py-4 mb-8 md:mb-12 bg-acid-pink/10">
                          <q className="text-lg md:text-2xl font-black uppercase tracking-tighter block mb-4 italic break-words">"{result.primary.quote}"</q>
                          <cite className="block font-mono font-bold text-sm md:text-lg opacity-60 not-italic break-words">// {result.primary.author}</cite>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-12 border-t-8 border-black mb-20">
                  <button className="btn btn-primary" onClick={handleShare}>
                    Exportar Perfil <Share2 className="ml-2 w-4 h-4" />
                  </button>
                  <button className="btn btn-ghost" onClick={() => setScreen('explore')}>
                    Repositório <BookOpen className="ml-2 w-4 h-4" />
                  </button>
                  <button className="btn btn-ghost border-acid-pink" onClick={startQuiz}>
                    Refazer Teste
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {/* Explore Screen */}
          {screen === 'explore' && (
            <motion.section 
              key="explore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col p-4 md:p-12 h-[calc(100vh-7rem)] overflow-hidden"
            >
              <div className="max-w-7xl mx-auto w-full flex flex-col h-full min-h-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-6 md:mb-12 border-b-8 border-black pb-4 md:pb-8 shrink-0">
                  <div>
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em]">O Grande Repositório</span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase mt-1 md:mt-2 tracking-tighter leading-none">Sabedoria</h2>
                  </div>
                  <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                    <input 
                      type="text" 
                      placeholder="BUSCAR ESCOLA..." 
                      className="w-full bg-white border-4 border-black py-4 pl-14 pr-4 text-sm outline-none focus:bg-gold transition-all font-black uppercase tracking-widest neo-shadow-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-12 shrink-0">
                  <button 
                    onClick={() => setEraFilter('Todas')}
                    className={`px-4 md:px-6 py-2 text-[10px] font-bold uppercase tracking-widest border-4 transition-all ${eraFilter === 'Todas' ? 'bg-black border-black text-white' : 'border-black text-black hover:bg-gold'}`}
                  >
                    Todas
                  </button>
                  {Object.keys(ERAS).map(era => (
                    <button 
                      key={era}
                      onClick={() => setEraFilter(era)}
                      className={`px-4 md:px-6 py-2 text-[10px] font-bold uppercase tracking-widest border-4 transition-all ${eraFilter === era ? 'bg-black border-black text-white' : 'border-black text-black hover:bg-gold'}`}
                    >
                      {era}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 overflow-y-auto pr-2 custom-scrollbar pb-10">
                  {filteredSchools.map(s => {
                    const isResultPrimary = result?.primary.id === s.id;

                    return (
                      <div 
                        key={s.id}
                        onClick={() => setSelectedSchool(s)}
                        className={`
                          p-6 md:p-8 border-4 border-black bg-white transition-all duration-150 cursor-pointer group flex flex-col
                          ${isResultPrimary ? 'bg-gold neo-shadow-sm' : 'neo-shadow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}
                        `}
                      >
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">{s.era}</span>
                          {isResultPrimary && <span className="bg-black text-white text-[8px] font-black uppercase tracking-tighter px-2 py-0.5">Sua Escola</span>}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-4 group-hover:text-acid-pink transition-colors">{s.name}</h3>
                        <p className="text-black text-xs md:text-sm font-bold leading-tight uppercase opacity-70 line-clamp-3 mb-6 md:mb-8">{s.desc[0]}</p>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black">Explorar</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center mt-auto py-4 md:py-10 shrink-0">
                  <button className="btn btn-ghost h-auto py-2 md:py-4" onClick={() => setScreen('home')}>
                    Voltar ao Início
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* School Detail Modal */}
      <AnimatePresence>
        {selectedSchool && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSchool(null)}
              className="absolute inset-0 bg-bg/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass p-8 md:p-12 overflow-y-auto max-h-[85vh] neo-border neo-shadow-sm"
            >
              <button 
                onClick={() => setSelectedSchool(null)}
                className="absolute top-6 right-6 p-2 text-black hover:bg-gold transition-colors border-2 border-black"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10">
                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] opacity-50 mb-2">
                  {selectedSchool.era} · {selectedSchool.thinkers}
                </span>
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">{selectedSchool.name}</h2>
              </div>

              <div className="space-y-6 mb-10">
                {selectedSchool.desc.map((p, i) => (
                  <p key={i} className="text-xl font-bold uppercase leading-tight tracking-tight text-black">{p}</p>
                ))}
              </div>

              <div className="border-t-4 border-black pt-10 mb-10">
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Tensões de Pensamento</span>
                <p className="text-xl font-bold uppercase leading-tight opacity-70">{selectedSchool.tensions}</p>
              </div>

              {selectedSchool.quote && (
                <div className="border-l-8 border-black pl-6 py-2 mb-10 bg-acid-green/10">
                  <q className="text-2xl font-black uppercase tracking-tighter block mb-2 italic">"{selectedSchool.quote}"</q>
                  <cite className="block text-sm font-mono font-bold uppercase opacity-50 not-italic">// {selectedSchool.author}</cite>
                </div>
              )}

              <button className="btn btn-ghost w-full md:w-auto" onClick={() => setSelectedSchool(null)}>
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[300] bg-gold text-bg px-6 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-0 left-0 right-0 h-10 border-t-4 border-black bg-black text-white flex items-center px-8 justify-between text-[10px] font-bold uppercase tracking-widest z-[100]">
        <div className="flex gap-6">
          <span>Session: {Math.random().toString(36).substring(7).toUpperCase()}</span>
          <span className="hidden md:inline">Secure Node: Active</span>
        </div>
        <div className="flex gap-6">
          <span className="hidden md:inline">Status: 100% NOMINAL</span>
          <span>Philosofi © 2026</span>
        </div>
      </footer>
    </div>
  );
}
