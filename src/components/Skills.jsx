import { motion } from "framer-motion"

const SKILLS = [
  "Python","SQL","Azure ML","Power BI","NLP","Machine Learning",
  "Data Viz","Quant Finance","Git","LangChain","Dash","Pandas"
]

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Compétences</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {SKILLS.map((s) => (
          <div key={s} className="rounded-lg border border-slate-700 bg-ink/50 px-4 py-3 text-sm text-slate-200">
            {s}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
