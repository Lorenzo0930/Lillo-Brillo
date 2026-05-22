import { motion } from 'motion/react';

// Simple inline SVG icons to avoid external dependency on 'lucide-react'
const Bath = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M7 12V7a5 5 0 0110 0v5" />
  </svg>
);
const Scissors = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 14.5L21 21M3 3l7 7M10.5 6a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM21 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);
const Wind = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h12a3 3 0 100-6M3 16h9a2 2 0 100-4" />
  </svg>
);
const PawPrint = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 xl:w-10 xl:h-10 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13c2.5 0 4-2 4-4s-1.5-4-4-4-4 2-4 4 1.5 4 4 4zM6 14c0 2.5 2 4 3 4s3-1.5 3-4M18 14c0 2.5-2 4-3 4s-3-1.5-3-4" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: <Bath />,
      title: 'Bagno e Igiene',
      description: 'Bagni specifici per ogni tipo di pelo, con prodotti ipoallergenici e nutrienti per la cute.',
    },
    {
      icon: <Scissors />,
      title: 'Taglio a Forbice',
      description: 'Tagli personalizzati eseguiti a forbice per valorizzare la razza e le forme del tuo cane.',
    },
    {
      icon: <Wind />,
      title: 'Snodatura e Spazzolatura',
      description: 'Rimozione dei nodi e del sottopelo in eccesso per far respirare la pelle e mantenere il pelo lucido.',
    },
    {
      icon: <PawPrint />,
      title: 'Cura Dettagli',
      description: 'Taglio unghie, pulizia orecchie e igiene dentale di base per un benessere completo.',
    },
  ];

  return (
    <>
    <section id="servizi" className="py-24 xl:py-32 bg-stone-50">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl xl:text-6xl 2xl:text-7xl font-sans font-extrabold text-stone-900 mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-lg xl:text-2xl 2xl:text-3xl text-stone-600 leading-relaxed">
            Offriamo trattamenti completi per la cura, l'igiene e la bellezza del tuo cane, 
            garantendo sempre il massimo comfort durante ogni seduta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 xl:p-12 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 xl:w-20 xl:h-20 bg-brand-light rounded-2xl flex items-center justify-center mb-8 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-stone-900 mb-4">
                {service.title}
              </h3>
              <p className="text-stone-600 xl:text-lg 2xl:text-xl leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
