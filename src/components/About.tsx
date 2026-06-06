import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 xl:w-8 xl:h-8 text-rose-500" />,
      title: 'Amore e Pazienza',
      description: 'Trattiamo ogni cane come se fosse il nostro, con dolcezza e rispetto per i suoi tempi.',
    },
    {
      icon: <Sparkles className="w-6 h-6 xl:w-8 xl:h-8 text-amber-500" />,
      title: 'Prodotti di Qualità',
      description: 'Utilizziamo solo shampoo e balsami specifici e delicati sulla pelle e sul pelo.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 xl:w-8 xl:h-8 text-brand-dark" />,
      title: 'Igiene Sicura',
      description: 'Ambiente sanificato e sterilizzato dopo ogni trattamento.',
    },
  ];

  return (
    <section id="chi-siamo" className="py-24 xl:py-32 bg-white">
      <div className="max-w-[1700px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square xl:aspect-[5/4] 2xl:aspect-square rounded-[3rem] xl:rounded-[4rem] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1000"
                alt="Toelettatura cane"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-stone-50 rounded-[3rem] xl:rounded-[4rem] pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl 2xl:text-5xl font-sans font-extrabold text-stone-900 mb-8">
              Chi Siamo
            </h2>
            <p className="text-base xl:text-lg 2xl:text-xl text-stone-600 mb-10 leading-relaxed">
              <strong className="text-brand-dark">Lillo Brillo</strong> è una toelettatura per cani. Per noi "Lillo" è il cane per eccellenza: è quello che ti giri a guardare con stupore per strada per la sua bellezza, simpatia, eleganza ed unicità; è quello che completa la famiglia, vive con noi ed arricchisce le nostre giornate. Lillo è il cane salvato dalla strada che avrà sempre la riconoscenza nei suoi occhi. INSOMMA: Lillo è il CANE, te ne innamori e diventa la costante della tua vita. Siamo Anna grande ed Anna piccola, da sempre accomunata dalla passione per i cani e con il tempo ne abbiamo fatto il nostro lavoro. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
