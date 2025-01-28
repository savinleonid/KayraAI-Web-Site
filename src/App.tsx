import React from 'react';
    import { Fingerprint, MessageSquare, Users, Clock, ArrowRight, Zap, Target, Award, Globe, Laptop, Moon } from 'lucide-react';
    import { motion } from 'framer-motion';

    function App() {
      return (
        <div className="min-h-screen bg-kayra-dark">
          {/* Header/Navigation */}
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Fingerprint className="h-10 w-10 text-kayra-primary" />
                <span className="text-2xl font-bold text-white tracking-wider">KAYRA.AI</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-200 hover:text-kayra-primary">Features</a>
                <a href="#vision" className="text-gray-200 hover:text-kayra-primary">Vision</a>
                <a href="#benefits" className="text-gray-200 hover:text-kayra-primary">Benefits</a>
              </div>
              <button className="bg-kayra-primary text-kayra-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
                Get Started
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <motion.section
            className="container mx-auto px-6 py-16 md:py-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Your AI Partner for Simple, Personal Customer Interactions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Experience stress-free customer service across all languages and platforms, 24/7. Let AI transform how you connect with customers worldwide.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-kayra-primary text-kayra-dark px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center font-semibold">
                    Start Now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-kayra-primary text-kayra-primary px-8 py-3 rounded-lg hover:bg-kayra-primary hover:text-kayra-dark transition-colors font-semibold">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                  alt="Global Business Communication"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.section>

          {/* Vision Section */}
          <motion.section
            id="vision"
            className="py-16 bg-gradient-radial from-kayra-darker to-kayra-dark"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Our Vision for Your Success</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <VisionCard
                  icon={<Globe className="h-8 w-8 text-kayra-primary" />}
                  title="Any Language"
                  description="Break language barriers with AI that speaks your customers' language fluently"
                />
                <VisionCard
                  icon={<Laptop className="h-8 w-8 text-kayra-primary" />}
                  title="Any Platform"
                  description="Seamless integration across all your communication channels"
                />
                <VisionCard
                  icon={<Moon className="h-8 w-8 text-kayra-primary" />}
                  title="Any Time"
                  description="24/7 availability ensures you never miss a customer inquiry"
                />
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            id="features"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-white mb-4">Experience the Difference</h2>
              <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                Transform your customer service with AI that understands, adapts, and delivers.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Users className="h-8 w-8 text-kayra-primary" />}
                  title="Personal Touch"
                  description="AI that remembers preferences and provides tailored interactions"
                />
                <FeatureCard
                  icon={<MessageSquare className="h-8 w-8 text-kayra-primary" />}
                  title="Natural Conversations"
                  description="Fluid, context-aware dialogue that feels human and authentic"
                />
                <FeatureCard
                  icon={<Award className="h-8 w-8 text-kayra-primary" />}
                  title="Stress-Free Service"
                  description="Reliable, consistent support that keeps customers happy"
                />
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            id="benefits"
            className="py-16 bg-kayra-darker"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-6">
              <div className="bg-kayra-dark rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Kayra.ai</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                      <p className="text-gray-300">Connect with customers worldwide in their preferred language</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Always Available</h3>
                      <p className="text-gray-300">Round-the-clock service across all time zones</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Zap className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Quick Integration</h3>
                      <p className="text-gray-300">Easy setup on your existing platforms and channels</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scalable Solution</h3>
                      <p className="text-gray-300">Grows with your business, from startup to enterprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="bg-kayra-darker text-white py-12 border-t border-kayra-dark">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Fingerprint className="h-8 w-8 text-kayra-primary" />
                    <span className="text-xl font-bold">KAYRA.AI</span>
                  </div>
                  <p className="text-gray-400">
                    Your trusted AI partner for global customer interactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-kayra-primary">Features</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Integrations</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Documentation</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-kayra-primary">About</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Blog</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-kayra-primary">Privacy</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Terms</a></li>
                    <li><a href="#" className="hover:text-kayra-primary">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-kayra-dark mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Kayra.ai. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    }

    function FeatureCard({ icon, title, description }) {
      return (
        <div className="bg-kayra-dark p-6 rounded-lg">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      );
    }

    function VisionCard({ icon, title, description }) {
      return (
        <div className="bg-kayra-dark/50 backdrop-blur-sm p-6 rounded-lg border border-kayra-primary/20">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      );
    }

    export default App;
