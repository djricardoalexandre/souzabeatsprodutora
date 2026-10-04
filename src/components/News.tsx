import { Sparkles } from 'lucide-react';

export default function News() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0f1d] to-[#080b16]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-amber-400" />
          <h2 className="section-title mb-0">Novidades</h2>
          <Sparkles className="w-8 h-8 text-amber-500" />
        </div>
        <p className="section-subtitle mb-12">
          Confira o que há de mais recente na Souza Beats
        </p>
      </div>
    </section>
  );
}
