import { Smartphone, Globe, Video } from 'lucide-react';

export default function ServicesWeb() {
  const services = [
    {
      icon: Smartphone,
      title: 'Aplicativos Web (PWA)',
      description:
        'Desenvolvimento de Progressive Web Apps instaláveis e funcionais como aplicativos nativos.',
    },
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description:
        'Websites modernos, responsivos e otimizados para conversão e performance máxima.',
    },
    {
      icon: Video,
      title: 'Edição de Vídeos de Alto Impacto',
      description:
        'Produções audiovisuais que capturam atenção e transmitem sua mensagem com impacto.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Vídeos & Web</h2>
        <p className="section-subtitle mb-12">
          Tecnologia de ponta para elevar sua presença digital
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="service-icon-wrapper">
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
