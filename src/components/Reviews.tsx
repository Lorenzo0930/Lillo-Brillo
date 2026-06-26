import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alessandro M.",
    text: "Competenza, professionalità e tanta passione! Posto super consigliato per i nostri amici a quattro zampe.",
    rating: 5,
  },
  {
    name: "Daniela G.",
    text: "Bravissime e professionali ma soprattutto affettuose con i nostri amici a 4 zampe.",
    rating: 5,
  },
  {
    name: "Simona D.",
    text: "Un ambiente accogliente e pulito dove la professionalità e l'amore per gli animali sono di casa.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="recensioni" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
            Recensioni
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Dicono di noi
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-700 sm:text-lg">
            Alcune delle recensioni a 5 stelle lasciate dai nostri clienti
            soddisfatti.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex h-full flex-col rounded-[28px] bg-[#fcfbf7] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] ring-1 ring-stone-200/60 sm:p-7"
            >
              <div className="flex items-center gap-1 text-brand-dark">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
                “{review.text}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-black text-black">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-stone-900">{review.name}</p>
                  <p className="text-sm text-stone-500">Cliente Lillo Brillo</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}