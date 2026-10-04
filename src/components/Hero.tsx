export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-glow"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="hero-logo-wrap">
          <img
            src="/nova_logo_souza_beats-300x300.jpg"
            alt="Souza Beats - Um universo completo de soluções"
            className="hero-logo"
          />
        </div>
        <p className="hero-eyebrow">Souza Beats</p>
        <h1 className="hero-title">
          Um Ecossistema Completo<br />de Soluções
        </h1>
        <p className="hero-subtitle">
          Áudio, Produção, Radiodifusão, Equipamentos e Marketing Digital em um só lugar.
        </p>
        <p className="hero-tagline">
          Sua marca. Seu projeto. Sua rádio.<br className="hidden sm:block" /> Tudo conectado em um só ecossistema.
        </p>
        <div className="hero-areas">
          <span className="hero-area-pill">Produtora</span>
          <span className="hero-area-pill">Radiofusão</span>
          <span className="hero-area-pill">Equipamentos</span>
          <span className="hero-area-pill">Marketing</span>
        </div>
      </div>
    </section>
  );
}
