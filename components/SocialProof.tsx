'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '10,000+',
    label: 'Meeting Hours',
    sublabel: 'Processed Weekly',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Remote Teams',
    sublabel: 'Trust Ricord.ai',
    color: 'from-accent to-accent-light',
  },
  {
    icon: TrendingUp,
    value: '99.2%',
    label: 'Uptime',
    sublabel: 'Guaranteed',
    color: 'from-success to-emerald-400',
  },
]

export default function SocialProof() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-charcoal to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join hundreds of organizations transforming their meeting workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} opacity-20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className={`font-headline text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-6xl text-accent mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
              Ricord.ai has transformed how our distributed team collaborates. We&apos;ve cut post-meeting administrative work by 80% and never miss an action item.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <div className="font-semibold text-white">Sarah Chen</div>
                <div className="text-gray-400">VP of Operations, TechCorp</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
