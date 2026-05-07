import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section } from './Section'

const focusAreas = [
  'Translating business requirements into clean full stack features',
  'Building maintainable .NET backends and polished frontend workflows',
  'Shipping production updates with care, testing, and deployment discipline',
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A practical engineer for business-critical web apps."
      intro="Hamzeh works across backend, frontend, database, and deployment concerns, with experience in onboarding systems, KYC workflows, admin modules, and university scheduling tools."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {focusAreas.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <CheckCircle2 className="mb-5 text-cyan-300" size={24} />
            <p className="text-base leading-7 text-slate-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
