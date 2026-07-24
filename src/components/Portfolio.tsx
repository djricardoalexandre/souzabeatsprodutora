import AudioPlayer from './AudioPlayer';

export default function Portfolio() {
  const audioItems = [
    {
      id: 1,
      title: 'Vinhetas Cantadas',
      src: 'https://www.dropbox.com/scl/fi/2a9nb934eilcv0phskdwp/VINHETAS-CANTADAS-DEMO-SOUZA-BEATS.mp3?rlkey=dregkc8e74fcdfytpqixnm4a0&st=0cop33nd&raw=1',
    },
    {
      id: 2,
      title: 'Vinhetas Faladas',
      src: 'https://www.dropbox.com/scl/fi/lju2z9sthjf3fak1em7qh/VINHETAS-FALADAS-DEMO-SOUZA-BEATS.mp3?rlkey=bd35hgifp8t33tgr59l0mm4bv&st=yqtzm8zs&raw=1',
    },
    {
      id: 3,
      title: 'Spots Comerciais',
      src: 'https://www.dropbox.com/scl/fi/kkixxnlwzeskd2adawvl9/SOTS-COMERCIAIS-DEMO-SOUZA-BEATS.mp3?rlkey=xpl5skj9k12jy5de7cf8vnm1t&st=ubyf85xv&raw=1',
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
