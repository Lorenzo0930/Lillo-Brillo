import { motion } from 'motion/react';

export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1537151608804-ea2f14cb392c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="galleria" className="py-24 xl:py-32 bg-white">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 -mt-[41px]">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl xl:text-6xl 2xl:text-7xl font-sans font-extrabold text-stone-900 mb-6">
            I Nostri Clienti Felici
          </h2>
          <p className="text-lg xl:text-2xl 2xl:text-3xl text-stone-600 leading-relaxed">
            Qualche scatto dei nostri amici a quattro zampe dopo il loro trattamento di bellezza da Lillo Brillo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 xl:gap-12">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="aspect-square rounded-2xl xl:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Cane toelettato ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
