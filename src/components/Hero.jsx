import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-16 sm:pt-24 pb-10 sm:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-widest text-slate-400">Data • IA • Finance</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight">
          Ingénieur <span className="text-accent">Data & Finance</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Spécialisé en IA appliquée à la finance, modélisation quantitative et analyse ESG.
          Je conçois des solutions data robustes et utiles au business.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="px-5 py-2 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition">Voir mes projets</a>
          <a href="#contact" className="px-5 py-2 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition">Me contacter</a>
        </div>
      </motion.div>
    </section>
  )
}
