'use client'

import { motion } from 'framer-motion'
import { Mic, Brain, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Mic,
    step: '01',
    title: 'Record',
    description: 'Ricord.ai joins your meetings across all platforms',
    details: 'Seamlessly integrates with Zoom, Teams, Meet, and more. One-click setup, zero disruption to your workflow.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Brain,
    step: '02',
    title: 'Process',
    description: 'Advanced AI analyzes conversations and extracts insights',
    details: 'Natural language processing identifies key decisions, action items, and important moments in real-time.',
    color: 'from-accent to-accent-light',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Execute',
    description: 'Action items automatically sync to your workflow tools',
    details: 'Tasks appear in Asana, Jira, Slack, and 20+ other platforms. No manual data entry required.',
    color: 'from-success to-emerald-400',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Three simple steps to transform your meeting workflow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-medium-gray/30 to-transparent -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="font-headline text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} opacity-10`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-headline text-2xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-charcoal font-semibold mb-2">
                    {step.description}
                  </p>
                  <p className="text-medium-gray leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Visual Flow Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark text-white text-sm font-medium">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>Fully automated process - no manual intervention required</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
