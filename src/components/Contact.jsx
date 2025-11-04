import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-2xl border border-slate-700 bg-ink/50 p-6"
      >
        <p className="text-slate-300">
          Envie d’échanger sur un projet ou une opportunité ?
          Je réponds rapidement.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a className="px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
             href="mailto:Thomas.leon1706@gmail.com">
            Envoyer un email
          </a>
          <a className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
             target="_blank"
             href="https://www.linkedin.com/in/thomas-leon-893316262">
            LinkedIn
          </a>
          <a className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
             target="_blank"
             href="https://github.com/Thomas-LEON">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
