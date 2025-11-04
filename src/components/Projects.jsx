import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "Portfolio Optimizer",
    description: "Allocation dynamique d’actifs via corrélations & backtests.",
    stack: ["Python", "Pandas", "Matplotlib"],
    link: "https://github.com/Thomas-LEON",
  },
  {
    title: "AI YouTube Sentiment",
    description: "Analyse de 14M+ commentaires avec BERT/RoBERTa.",
    stack: ["Python", "NLP", "Transformers"],
    link: "https://github.com/Thomas-LEON",
  },
  {
    title: "Mini Bloomberg App",
    description: "Dashboard interactif pour suivre les marchés.",
    stack: ["Dash", "Plotly"],
    link: "https://github.com/Thomas-LEON",
  },
  {
    title: "ESG Risk Index (IRIS)",
    description: "Score social développé chez Arkéa.",
    stack: ["VBA", "SQL", "Oracle Analytics"],
    link: "https://github.com/Thomas-LEON",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projets</h2>
        <a href="https://github.com/Thomas-LEON" target="_blank" className="text-accent text-sm hover:underline">Voir tout</a>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            className="group rounded-2xl border border-slate-700 bg-ink/50 p-5 hover:bg-ink transition block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 * idx }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-xs text-slate-400 group-hover:text-accent transition">→</span>
            </div>
            <p className="mt-2 text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="text-xs px-2 py-1 rounded border border-slate-600 text-slate-300">{s}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
