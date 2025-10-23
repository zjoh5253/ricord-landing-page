'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  'No credit card required',
  '14-day free trial',
  'Cancel anytime',
  'Setup in under 5 minutes',
]

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary via-primary-dark to-charcoal relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              Meeting Workflow?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Join hundreds of teams using Ricord.ai to capture, transcribe, and act on every meeting automatically.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-white"
              >
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group px-10 py-5 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent/50 flex items-center gap-3">
              Start Your Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-xl transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50">
              Schedule a Demo
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 text-gray-400 text-sm"
          >
            Trusted by 500+ teams • Processing 10,000+ hours weekly • 99.2% uptime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
