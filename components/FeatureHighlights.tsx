'use client'

import { motion } from 'framer-motion'
import { FileText, Target, Workflow } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Smart Transcription Engine',
    description: 'State-of-the-art AI delivers accurate, actionable transcripts',
    features: [
      'Real-time processing with <1s latency',
      'Multi-language support (50+ languages)',
      'Advanced speaker diarization',
      'Custom vocabulary and terminology',
    ],
    color: 'from-primary to-primary-light',
    alignment: 'left',
  },
  {
    icon: Target,
    title: 'AI-Powered Task Extraction',
    description: 'Intelligent algorithms identify and prioritize action items',
    features: [
      'Natural language processing (NLP)',
      'Automatic priority scoring',
      'Smart assignment based on context',
      'Deadline detection and scheduling',
    ],
    color: 'from-accent to-accent-light',
    alignment: 'right',
  },
  {
    icon: Workflow,
    title: 'Enterprise Integration Hub',
    description: 'Seamlessly connect with your entire tech stack',
    features: [
      'REST API with comprehensive docs',
      'Single Sign-On (SSO) support',
      'Workflow automation triggers',
      'Custom webhooks and integrations',
    ],
    color: 'from-success to-emerald-400',
    alignment: 'left',
  },
]

export default function FeatureHighlights() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Built for scale, designed for performance
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isReversed = feature.alignment === 'right'

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
              >
                {/* Visual/Icon Side */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-full`} />
                    <div className="relative bg-white rounded-2xl p-12 shadow-xl flex items-center justify-center">
                      <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                        <Icon className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-medium-gray mb-8">
                    {feature.description}
                  </p>

                  <ul className="space-y-4">
                    {feature.features.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-charcoal">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
