import { motion } from 'framer-motion';
import {
  Brain, Shield, BarChart3, Workflow, Globe,
  Cpu, Code2, Layers, Database, ArrowRight
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import GlassCard from '../components/GlassCard';

const mainFeatures = [
  {
    icon: Brain,
    color: 'cyan',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    glow: 'cyan' as const,
    title: 'AI-Powered Automation',
    description:
      'Deploy intelligent agents that learn your workflow patterns and automate repetitive tasks with human-level accuracy. Our LLM backbone processes context at enterprise scale.',
    tags: ['GPT-5', 'Agent Builder', 'Auto-Learn'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    color: 'purple',
    iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    glow: 'purple' as const,
    title: 'Real-Time Analytics',
    description:
      'Gain deep insights into your data streams with sub-second query response times. Visualize complex relationships with our drag-and-drop dashboard builder.',
    tags: ['Live Dashboards', 'SQL Engine', 'Predictive'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    color: 'green',
    iconBg: 'bg-green-500/10 border-green-500/20 text-green-400',
    glow: 'green' as const,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, SOC 2 Type II certified, with zero-trust architecture. Your data never leaves your region. Full GDPR & HIPAA compliance out of the box.',
    tags: ['SOC 2', 'Zero Trust', 'GDPR'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
];

const gridFeatures = [
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop nodes to build complex multi-step automations. No code required.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: '180+ CDN nodes worldwide with <50ms p99 latency guarantee.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Code2,
    title: 'Developer-First API',
    description: 'RESTful & GraphQL APIs with SDKs for 12+ languages. OpenAPI spec included.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Layers,
    title: 'Multi-Model Support',
    description: 'Switch between GPT, Claude, Gemini, Llama, and Mistral with one config change.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Database,
    title: 'Vector Database',
    description: 'Built-in semantic search with pgvector. Store, index, and query embeddings at scale.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Cpu,
    title: 'Auto-Scaling Compute',
    description: 'Serverless functions that scale from zero to millions of requests automatically.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel color="purple">Platform Features</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5"
          >
            Everything you need to{' '}
            <span className="gradient-text-multi">scale intelligently</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            A complete platform engineered for the next generation of AI-native applications.
            From prototype to production in minutes.
          </motion.p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {mainFeatures.map((feature, i) => (
            <GlassCard key={feature.title} glow={feature.glow} delay={i * 0.1} className="group overflow-hidden">
              {/* Image */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15] via-[#0a0a15]/60 to-transparent" />
                <div className={`absolute top-4 left-4 p-2.5 rounded-xl border ${feature.iconBg}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{feature.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${feature.iconBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white transition-colors group/btn">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Grid Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {gridFeatures.map((feat) => (
            <motion.div
              key={feat.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group hover:bg-white/[0.06] transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feat.bg} mb-4 group-hover:scale-110 transition-transform`}>
                <feat.icon className={`w-5 h-5 ${feat.color}`} />
              </div>
              <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
