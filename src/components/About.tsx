export default function About() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="max-w-4xl mx-auto">
          <div className="about-card">
            <p className="text-lg leading-relaxed text-gray-300">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">Souza Beats</span> é uma central de inteligência criativa.
              Unimos a potência do áudio profissional à tecnologia de desenvolvimento web e estratégias de marketing digital.
              Nossa missão é transformar marcas comuns em referências no mercado através de vídeos, aplicativos e produções
              sonoras de elite.
            </p>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-6">
              Criatividade que conecta, tecnologia que escala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
