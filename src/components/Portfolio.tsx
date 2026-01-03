import AudioPlayer from './AudioPlayer';

export default function Portfolio() {
  const audioItems = [
    {
      id: 1,
      title: 'Vinhetas Cantadas',
      src: '/cantadas/audio.mp3',
    },
    {
      id: 2,
      title: 'Vinhetas Faladas',
      src: '/faladas/audio.mp3',
    },
    {
      id: 3,
      title: 'Spots Comerciais',
      src: '/comerciais/audio.mp3',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Portfólio de Áudio</h2>
        <p className="section-subtitle mb-12">
          Conheça a qualidade profissional das nossas produções
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioItems.map((item) => (
            <AudioPlayer key={item.id} src={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
