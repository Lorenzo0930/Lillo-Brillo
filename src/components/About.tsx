import { motion } from "motion/react";

export default function About() {
  return (
    <section id="chi-siamo" className="bg-[#fcfbf7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
            Chi siamo
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Una toelettatura fatta con cura, esperienza e vero amore per i cani
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-bold text-stone-900">Lillo Brillo</span> è una
            toelettatura per cani nata da una passione autentica. Per noi
            “Lillo” è il cane per eccellenza: quello che ti fa sorridere, che
            arricchisce la famiglia e che con la sua presenza rende ogni giornata
            più piena.
          </p>

          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            È bellezza, simpatia, eleganza e unicità, ma anche dolcezza,
            riconoscenza e legame. In poche parole, Lillo è il cane di cui ti
            innamori e che diventa una costante della tua vita.
          </p>

          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            Siamo <span className="font-bold text-stone-900">Anna grande ed Anna piccola</span>,
            accomunate da sempre dall’amore per i cani. Col tempo abbiamo
            trasformato questa passione nel nostro lavoro, scegliendo di prenderci
            cura di ogni animale con attenzione, pazienza e sensibilità.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-stone-200/70 sm:p-7">
            <p className="text-4xl font-black text-stone-900">100%</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Attenzione
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              Ogni cane viene accolto con calma, rispetto e trattamenti pensati
              in base alle sue esigenze.
            </p>
          </div>

          <div className="rounded-[28px] bg-brand p-6 text-black shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:translate-y-8 sm:p-7">
            <p className="text-4xl font-black">2</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
              Professioniste
            </p>
            <p className="mt-3 text-sm leading-7 text-black/80">
              Due persone, una visione condivisa: far sentire ogni cane curato,
              valorizzato e al sicuro.
            </p>
          </div>

          <div className="rounded-[28px] bg-stone-900 p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:col-span-2 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              La nostra idea
            </p>
            <p className="mt-4 max-w-xl text-lg font-semibold leading-8 text-white/90">
              Non un servizio freddo e veloce, ma un luogo di fiducia dove il cane
              viene seguito con costanza, delicatezza e competenza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}