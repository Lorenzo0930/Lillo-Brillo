import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Alessandro M.',
      text: 'Competenza, professionalità e tanta passione! Posto super consigliato per i nostri amici a quattro zampe.',
      rating: 5,
    },
    {
      name: 'Daniela G.',
      text: 'Bravissime e professionali ma soprattutto affettuose con i nostri amici a 4 zampe.',
      rating: 5,
    },
    {
      name: 'Simona D.',
      text: 'Un ambiente accogliente e pulito dove la professionalità e l\'amore per gli animali sono di casa.',
      rating: 5,
    }
  ];

  return (
    <section id="recensioni" className="py-24 xl:py-32 bg-stone-50">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl xl:text-6xl 2xl:text-7xl font-sans font-extrabold text-stone-900 mb-6">
            Dicono di Noi
          </h2>
          <p className="text-lg xl:text-2xl 2xl:text-3xl text-stone-600 leading-relaxed">
            Alcune delle recensioni a <span className="font-bold text-stone-800">4 e 5 stelle</span> lasciate dai nostri clienti soddisfatti su Google Maps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 xl:p-12 rounded-3xl xl:rounded-[2rem] shadow-sm border border-stone-100 flex flex-col h-full"
            >
              <div className="flex gap-1.5 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 xl:w-6 xl:h-6 ${index < review.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-200 fill-stone-200'}`}
                  />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 flex-grow text-base xl:text-lg 2xl:text-xl leading-relaxed">"{review.text}"</p>
              <div className="font-semibold text-stone-900 mt-auto flex items-center gap-4 xl:text-lg 2xl:text-xl">
                 <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold xl:text-lg">
                    {review.name.charAt(0)}
                 </div>
                 {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
