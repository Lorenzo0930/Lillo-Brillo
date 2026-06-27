import { motion } from "motion/react";
import { Bath, Scissors, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bath className="h-8 w-8 text-brand-dark xl:h-10 xl:w-10" strokeWidth={1.8} />,
      title: "Bagno e Igiene",
      description:
        "Il bagno del cane può sembrare cosa facile, ma al contrario è diverso e complesso per ogni soggetto. I tipi di pelo sono molteplici non solo nel loro aspetto, ma anche nelle condizioni di manutenzione e nella finalità: il pelo di un cane da caccia non sarà mai come quello di un barboncino. Da qui i prodotti a disposizione sono tantissimi.",
    },
    {
      icon: <Scissors className="h-8 w-8 text-brand-dark xl:h-10 xl:w-10" strokeWidth={1.8} />,
      title: "Taglio a Forbice",
      description:
        "Tagli personalizzati eseguiti a forbice per valorizzare la razza e le forme del tuo cane.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand-dark xl:h-10 xl:w-10" strokeWidth={1.8} />,
      title: "Cura Dettagli",
      description:
        "Taglio unghie, pulizia orecchie e igiene dentale di base per un benessere completo.",
    },
  ];

  return (
    <section id="servizi" className="w-full bg-white py-20 sm:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 xl:mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
            Servizi
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-stone-900 sm:text-4xl xl:text-5xl">
            Cosa facciamo
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg xl:text-xl">
            Da noi il cliente si fidelizza, non è più un avventore casuale, i
            trattamenti sono programmati in base alle sue esigenze e richieste
            in modo da essere prefissati e cadenzati. Tu vai dal parrucchiere
            con regolarità?{" "}
            <span className="font-bold italic text-brand-dark">
              Lillo viene da noi!
            </span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col rounded-[28px] border border-stone-100 bg-[#fcfbf7] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7 xl:p-8"
            >
              <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light xl:h-20 xl:w-20">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-stone-900 xl:text-xl">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}