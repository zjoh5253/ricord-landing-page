'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Link2 } from 'lucide-react'

const benefits = [
  {
    icon: Bot,
    title: 'Advanced AI Processing',
    description: '99% accurate transcription with speaker identification',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Zap,
    title: 'Intelligent Action Detection',
    description: 'Automatically identifies and assigns tasks in seconds',
    color: 'from-accent to-accent-light',
  },
  {
    icon: Link2,
    title: 'Universal Integration',
    description: 'Connects with 20+ productivity tools and platforms',
    color: 'from-success to-emerald-400',
  },
]

export default function KeyBenefits() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Why Choose Ricord.ai
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Enterprise-grade AI meeting intelligence designed for modern teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-headline text-2xl font-bold text-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-medium-gray text-lg leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
