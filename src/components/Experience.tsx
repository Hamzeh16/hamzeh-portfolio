import { motion } from 'framer-motion'
import { experiences } from '../data/portfolio'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Hands-on software engineering across enterprise products."
    >
      <div className="space-y-5">
        {experiences.map((experience, index) => {
          const Icon = experience.icon

          return (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 font-medium text-cyan-200">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <p className="rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-slate-300">
                  {experience.period}
                </p>
              </div>

              <p className="mt-5 max-w-4xl leading-7 text-slate-300">
                {experience.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md bg-[#101f31] px-3 py-2 text-sm text-slate-200"
                  >
                    {highlight}
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
