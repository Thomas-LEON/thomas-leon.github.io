import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-8 items-center"
      >
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">À propos</h2>
          <p className="mt-4 text-slate-300">
            Passionné par la modélisation, la recherche et l’innovation, j’ai travaillé sur des projets mêlant
            intelligence artificielle, finance de marché et data science appliquée.
          </p>
          <p className="mt-3 text-slate-300">
            Objectif : combiner rigueur scientifique, IA et stratégie financière pour créer de la valeur durable,
            avec un focus sur la qualité des données, la reproductibilité et l’impact métier.
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl border border-slate-700 bg-ink/60 flex items-center justify-center text-slate-400">
            {/* Remplace cette zone par ta photo dans /public/profile.jpg et dé-commente l'image */}
            {/* <img src="/profile.jpg" alt="Thomas Léon" className="w-full h-full object-cover rounded-2xl" /> */}
            <span className="text-sm">Photo pro ici</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
