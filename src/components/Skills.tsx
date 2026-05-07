import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A full stack toolkit for shipping dependable products."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = group.icon

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <p key={skill} className="text-sm text-slate-300">
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
