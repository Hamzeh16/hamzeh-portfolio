import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected systems and product work."
      intro="A concise set of projects covering onboarding, KYC operations, scheduling, career tooling, and enterprise workflow automation."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-md bg-emerald-300/10 text-emerald-200">
                  <Icon size={23} />
                </div>
                <ExternalLink
                  size={18}
                  className="text-slate-500 transition group-hover:text-cyan-200"
                />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase text-cyan-300">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
