import AudioPlayer from './AudioPlayer';
import { Sparkles } from 'lucide-react';

export default function News() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-cyan-400" />
          <h2 className="section-title mb-0">Novidades</h2>
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
        <p className="section-subtitle mb-12">
          Confira o que há de mais recente na Souza Beats
        </p>

        <div className="max-w-2xl mx-auto">
          <AudioPlayer src="/exclusivos/audio.mp3" title="Lançamento Exclusivo" />
        </div>
      </div>
    </section>
  );
}
