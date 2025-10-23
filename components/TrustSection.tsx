'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Globe, CheckCircle2 } from 'lucide-react'

const securityBadges = [
  { icon: Shield, label: 'SOC 2 Type II', description: 'Certified' },
  { icon: Lock, label: 'GDPR', description: 'Compliant' },
  { icon: Globe, label: 'CCPA', description: 'Compliant' },
  { icon: CheckCircle2, label: 'ISO 27001', description: 'Certified' },
]

const platforms = [
  'Zoom', 'Microsoft Teams', 'Google Meet', 'Slack', 'Asana', 'Jira',
  'Trello', 'Monday.com', 'ClickUp', 'Notion', 'Linear', 'GitHub',
  'GitLab', 'Confluence', 'Salesforce', 'HubSpot', 'Zapier', 'Make',
]

const metrics = [
  { value: '99.9%', label: 'Uptime SLA', color: 'from-success to-emerald-400' },
  { value: '<100ms', label: 'API Response', color: 'from-primary to-primary-light' },
  { value: '256-bit', label: 'Encryption', color: 'from-accent to-accent-light' },
  { value: '24/7', label: 'Support', color: 'from-purple-500 to-purple-400' },
]

export default function TrustSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Your data is protected by industry-leading security standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {securityBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-light-gray rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-success mx-auto mb-4" />
                <h4 className="font-headline font-bold text-charcoal mb-1">{badge.label}</h4>
                <p className="text-sm text-medium-gray">{badge.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-light-gray rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className={`font-headline text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-medium-gray font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platform Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-headline text-3xl font-bold text-charcoal mb-4">
            Integrates With Your Favorite Tools
          </h3>
          <p className="text-lg text-medium-gray">
            Connect seamlessly with 20+ platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-light-gray rounded-lg p-4 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-semibold text-charcoal text-center">
                {platform}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
