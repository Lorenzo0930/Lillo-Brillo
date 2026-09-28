import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const photos = [
  "/WhatsApp Image 2026-05-23 at 14.52.25.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.52.07.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.57.31.jpeg",
  "/WhatsApp Image 2026-05-23 at 15.04.36.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.59.24.jpeg",
  "/WhatsApp Image 2026-05-23 at 14.55.10.jpeg",
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selectedPhoto) return;

    const dialog = dialogRef.current;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [selectedPhoto]);

  return (
    <section id="galleria" className="bg-[#fcfbf7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-dark">
            Galleria
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            I nostri clienti felici
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-700 sm:text-lg">
            Qualche scatto dei nostri amici a quattro zampe dopo il loro
            trattamento di bellezza da Lillo Brillo.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              onClick={() => setSelectedPhoto(src)}
              className={`group overflow-hidden rounded-[28px] bg-stone-200 text-left shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition focus:outline-none focus:ring-2 focus:ring-brand ${
                index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              aria-label={`Apri immagine ${index + 1} della galleria`}
            >
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <img
                  src={src}
                  alt={`Cane curato da Lillo Brillo ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} aria-label="Foto ingrandita della galleria Lillo Brillo"
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-transparent"
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            event.preventDefault();
            dialogRef.current?.querySelector("button")?.focus();
          }
        }}
        onCancel={(event) => { event.preventDefault(); setSelectedPhoto(null); }}>
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
                aria-label="Chiudi immagine"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <img
                  src={selectedPhoto}
                  alt="Foto ingrandita della galleria Lillo Brillo"
                  className="max-h-[82vh] w-full object-contain bg-[#f6f3eb]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </dialog>
    </section>
  );
}
