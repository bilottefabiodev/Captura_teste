import React from 'react';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { HypnoticBackground } from './HypnoticBackground';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      <HypnoticBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Lançamento High Ticket 2026
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[1.1]">
          O modelo mais lucrativo e <span className="italic text-red-500">sustentável</span> do digital.
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          O plano à prova de mercado caro e desconfiado, com o melhor dos 3 mundos: 
          o volume do gratuito, o ROI do pago e a segurança do orgânico.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16 text-neutral-300">
          <div className="flex items-center gap-3 group transition-colors hover:text-white">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500/50">
              <Calendar size={18} className="text-red-500" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Data</div>
              <div className="font-bold">Sábado, 10 de Jan</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group transition-colors hover:text-white">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500/50">
              <Clock size={18} className="text-red-500" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Horário</div>
              <div className="font-bold">14h às 16h (BRT)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 group transition-colors hover:text-white">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500/50">
              <MapPin size={18} className="text-red-500" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Local</div>
              <div className="font-bold">Online, via Zoom</div>
            </div>
          </div>
        </div>

        {/* Parágrafo solicitado inserido estrategicamente acima do botão */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border border-white/10">
            Aula estratégica gratuita para experts, mentores e prestadores de serviço que desejam 
            masterizar seus lançamentos faturando mais com o mesmo investimento, diminuir complexidade em 4x 
            e sair da roda de rato do lança lança implementando um sistema orgânico e atemporal que gera 
            demanda qualificada e vendas entre um carrinho e outro.
          </p>
        </div>

        <button 
          onClick={onOpenModal}
          className="group relative px-12 py-6 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            GARANTIR MINHA VAGA GRATUITA
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        </button>

        <p className="mt-8 text-neutral-500 text-xs uppercase tracking-[0.3em] font-bold">
          Vagas Limitadas • 100% Gratuito
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
